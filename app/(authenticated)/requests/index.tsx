import React, { useState } from 'react';

const Requests: React.FC = () => {
  const [documents, setDocuments] = useState([]);
  const [itemCode, setItemCode] = useState('');
  const [category, setCategory] = useState('');
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const handleAddDocument = () => {
    if (itemCode && category && pdfFile) {
      const newDocument = { itemCode, category, pdfFile };
      setDocuments([...documents, newDocument]);
      setItemCode('');
      setCategory('');
      setPdfFile(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPdfFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
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
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="p-2 rounded bg-gray-800 text-white w-full mb-2"
        />
        <button
          onClick={handleAddDocument}
          className="bg-green-500 p-2 rounded w-full"
        >
          Adicionar Documento
        </button>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Documentos</h2>
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
    </div>
  );
};

export default Requests;
