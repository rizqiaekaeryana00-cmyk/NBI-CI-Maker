import React, { useState } from 'react';
import { CIFormData } from '../types';

interface InputFormProps {
  onSubmit: (data: CIFormData) => void;
  isLoading: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<CIFormData>({
    nama: '',
    nik: '',
    bagian: '',
    tema: '',
    isGenerated: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 border border-gray-100">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">CI Generator Assistant</h2>
        <p className="text-gray-500 text-sm mt-1">Masukkan data diri dan topik, AI akan membantu menyusun draf dokumen.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
              <input
                required
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                placeholder="Contoh: Budi Santoso"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">NIK</label>
              <input
                required
                type="text"
                name="nik"
                value={formData.nik}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                placeholder="Contoh: 12345"
              />
            </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bagian / Departemen</label>
          <input
            required
            type="text"
            name="bagian"
            value={formData.bagian}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
            placeholder="Contoh: Production / Warehouse"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tema / Topik CI</label>
          <textarea
            required
            name="tema"
            value={formData.tema}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
            placeholder="Contoh: Mengurangi waste material packing pada Line A sebesar 10%"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 px-4 rounded-lg text-white font-medium text-lg transition shadow-lg ${
            isLoading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 transform hover:scale-[1.01]'
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sedang Membuat Form...
            </span>
          ) : (
            'Generate CI Form'
          )}
        </button>
      </form>
    </div>
  );
};

export default InputForm;