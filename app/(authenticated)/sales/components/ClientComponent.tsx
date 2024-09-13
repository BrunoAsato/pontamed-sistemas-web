'use client';

import { useState, useEffect } from 'react';
import FileUpload from '../components/FileUpload';
import ResultsTable from '../components/ResultsTable';
import { ValidationResult } from '../types/bionexoFile';

export default function ClientComponent() {
  const [results, setResults] = useState<ValidationResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (file: File) => {
    setIsLoading(true);
    try {
      // Ler o conteúdo do arquivo
      const fileContent = await readFileAsJson(file);

      // Extrair itens únicos (ID e nome do produto)
      const uniqueItems = extractUniqueItems(fileContent);

      const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
      const host = (window as any).__HOST__;

      const url = `${protocol}://${host}/api/sales/validate`;

      // Enviar os itens únicos
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(uniqueItems),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setResults(data);
      } else {
        console.error('Erro ao validar os itens');
      }
    } catch (error) {
      console.error('Erro ao processar o arquivo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Validação de Pedidos</h1>
      <FileUpload
        onFileUpload={handleFileUpload}
        isLoading={isLoading}
        className={`mb-10`}
      />
      {results.length > 0 && <ResultsTable results={results} />}
    </div>
  );
}

// Função para ler o arquivo como JSON
const readFileAsJson = (file: File): Promise<any> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        resolve(json);
      } catch (error) {
        reject(new Error('Erro ao analisar o arquivo JSON'));
      }
    };
    reader.onerror = (error) => reject(error);
    reader.readAsText(file);
  });
};

interface UniqueItem {
  idPdc: number;
  valorTotal: number;
}

// Função para extrair itens únicos
const extractUniqueItems = (data: any[]): UniqueItem[] => {
  const uniqueMap = new Map<number, UniqueItem>();

  data.forEach((item) => {
    const idPdc = item['id pdc'];
    //const valorTotal = parseFloat(item['valor total']) || 0;

    if (!uniqueMap.has(idPdc)) {
      uniqueMap.set(idPdc, {
        idPdc: idPdc,
        valorTotal: item['valor total'],
      });
    } else {
      const existingItem = uniqueMap.get(idPdc)!;
      existingItem.valorTotal += item['valor total'];
    }
  });

  return Array.from(uniqueMap.values()).map((item) => ({
    ...item,
    valorTotal: Number(item.valorTotal.toFixed(2)), // Arredonda para 4 casas decimais
  }));
};
