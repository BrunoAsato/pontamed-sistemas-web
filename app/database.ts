import sql from 'mssql';
import { ValidationResult } from './(authenticated)/sales/types/bionexoFile';

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: true,
    enableArithAbort: true,
    connectionTimeout: 30000, // 30 segundos
    rowCollectionOnRequestCompletion: true,
  },
};

export async function validateOrders(
  orders: any[]
): Promise<ValidationResult[]> {
  try {
    await sql.connect(config);

    const results = [];
    //console.log(orders);
    for (const order of orders) {
      const query = `
      SELECT
        FORMAT(ORDR.DocDate, 'dd/MM/yyyy'),
        ORDR.DocTotal
      FROM ORDR
      WHERE ORDR.U_PONTA_PEDPharma = 1
        AND ORDR.U_PONTA_NOMEPORTAL = 3
        AND ORDR.U_Numerodocumento = CONVERT(VARCHAR, @idPdc)
      `; //U_PONTA_NRPEDPHARMA

      const request = new sql.Request();
      request.input('idPdc', sql.Int, order.idPdc);

      const result = await request.query(query);

      const dbDocTotal = result.recordset[0]?.DocTotal;
      const jsonValorTotal = parseFloat(order.valorTotal);
      const valoresIguais = dbDocTotal === jsonValorTotal;

      results.push({
        idPdc: order.idPdc,
        dataPedido: result.recordset[0]?.DocDate || '-',
        pedidoEncontrado: result.recordset.length > 0,
        valorTotalDB: dbDocTotal || '-',
        valorTotalJSON: jsonValorTotal,
        valoresIguais: valoresIguais,
      });
      /*
      if (result.recordset.length === 0) {
        console.log(`Pedido #${order.idPdc} não encontrado`);
      } else {
        console.log(`Pedido #${order.idPdc} encontrado`);
        console.log(
          ` Valor total DB: ${dbDocTotal}, Valor total JSON: ${jsonValorTotal}, Valores iguais: ${valoresIguais}`
        );
      }
      */
    }

    return results;
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    throw error;
  } finally {
    await sql.close();
  }
}
