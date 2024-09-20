'use client';

import UploadButton from '@auth/components/ui/UploadButton';
import UploadArea from '@auth/components/ui/UploadArea';
import React, { useState } from 'react';
import { DateTime } from 'mssql';

const Requests: React.FC = () => {
  const onFileSelect = useState<File | null>(null);
  const [selectedFile, setSelectedFile] = onFileSelect;
  const [isLoading, setIsLoading] = useState(false);
  const [documents, setDocuments] = useState<
    Array<{ itemCode: string; category: string; pdfFile: File }>
  >([]);
  const [itemCode, setItemCode] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const handleAddDocument = () => {
    if (itemCode && category && pdfFile) {
      const newDocument = { itemCode, category, pdfFile };
      setDocuments([...documents, newDocument]);
      setItemCode('');
      setCategory('');
      setDate('');
      setPdfFile(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPdfFile(e.target.files[0]);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white p-8 w-[40rem]">
        <h1 className="text-2xl font-bold mb-4">CRUD de Documentos</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Código do Item"
            value={itemCode}
            onChange={(e) => setItemCode(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white w-full mb-2"
          />

          <input
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white w-full mb-2"
          />

          <input
            type="date"
            placeholder="Data"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white w-full mb-2"
          />
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Documento</h4>
          <ul>
            {documents.map((doc, index) => (
              <li key={index} className="bg-gray-800 p-4 rounded mb-2">
                <p>Código: {doc.itemCode}</p>
                <p>Categoria: {doc.category}</p>
                <p>Arquivo: {doc.pdfFile.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <UploadArea
          onFileSelect={onFileSelect}
          isLoading={isLoading}
          acceptedType={'.pdf'}
        />
        <UploadButton
          selectedFile={selectedFile}
          isLoading={isLoading}
        ></UploadButton>
      </div>
      <div></div>
    </>
  );
};

export default Requests;
