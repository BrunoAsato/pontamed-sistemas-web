export interface ProductData {
  productName: string;
  productCode: string;
  quantity: number;
}

export interface ValidationResult {
  idPdc: number;
  dataPedido: string | null;
  pedidoEncontrado: boolean;
  valorTotalDB: number;
  valorTotalJSON: string | null;
  valoresIguais: string | null;
}
