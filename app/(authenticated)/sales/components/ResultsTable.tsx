import { ValidationResult } from '../types/bionexoFile';
import { formatForReal } from '../../utils/functions';

interface ResultsTableProps {
  results: ValidationResult[];
}

export default function ResultsTable({ results }: ResultsTableProps) {
  return (
    <div className="overflow-x-auto">
      <div className="overflow-y-auto max-h-[30rem]">
        <table className="min-w-full text-blue-950">
          <thead className="bg-gray-300 border-b sticky top-0">
            <tr className="bg-gray-100">
              <th className="px-4 py-2">ID PDC</th>
              <th className="px-4 py-2">Data do Pedido</th>
              <th className="px-4 py-2">Valor DB</th>
              <th className="px-4 py-2">Valor JSON</th>
              <th className="px-4 py-2">Valores iguais</th>
            </tr>
          </thead>
          <tbody className="h-96 overflow-y-auto">
            {results.map((result, index) => (
              <tr
                key={index}
                className={`
                  ${index % 2 === 0 ? `${result.valoresIguais ? 'bg-green-300' : 'bg-red-300'}` : `${result.valoresIguais ? 'bg-green-200' : 'bg-red-200'}`}
                `}
              >
                <td className="px-4 py-2">{result.idPdc}</td>
                <td className="px-4 py-2">{result.dataPedido}</td>
                <td className="px-4 py-2 text-right">
                  {result.valorTotalDB == null
                    ? 'Não Encontrado'
                    : formatForReal(Number(result.valorTotalDB))}
                </td>
                <td className="px-4 py-2 text-right">
                  {formatForReal(Number(result.valorTotalJSON))}
                </td>
                <td className="px-4 py-2">
                  {result.valoresIguais ? 'Sim' : 'Não'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
