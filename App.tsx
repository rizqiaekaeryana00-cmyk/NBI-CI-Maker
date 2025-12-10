import React, { useState } from 'react';
import InputForm from './components/InputForm';
import CIFormPreview from './components/CIFormPreview';
import { CIFormData } from './types';
import { generateCIContent } from './services/geminiService';

const App: React.FC = () => {
  const [ciData, setCIData] = useState<CIFormData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (inputData: CIFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      // Call Gemini API
      const generatedContent = await generateCIContent(inputData);
      
      // Merge User Input with Generated Content
      setCIData({
        ...inputData,
        ...generatedContent,
        isGenerated: true,
      });
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan saat menghubungi AI.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setCIData(null);
    setError(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation / Header - Hidden on Print */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center no-print sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
            <div className="bg-yellow-500 text-white font-bold p-1.5 rounded text-sm">NBI</div>
            <h1 className="text-xl font-bold text-gray-800">CI Generator</h1>
        </div>
        <div>
            {ciData && (
                <div className="flex gap-2">
                    <button 
                        onClick={handleReset}
                        className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 font-medium transition"
                    >
                        Buat Baru
                    </button>
                    <button 
                        onClick={handlePrint}
                        className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition flex items-center gap-2 shadow"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2-4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
                        </svg>
                        Print / Simpan PDF
                    </button>
                </div>
            )}
        </div>
      </nav>

      <main className="flex-1 bg-gray-50 p-4 md:p-8 relative">
        {/* Error Message */}
        {error && (
            <div className="max-w-2xl mx-auto mb-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow no-print" role="alert">
                <p className="font-bold">Error</p>
                <p>{error}</p>
            </div>
        )}

        {/* Input Form Mode */}
        {!ciData && (
          <div className="h-full flex items-center justify-center">
            <InputForm onSubmit={handleGenerate} isLoading={isLoading} />
          </div>
        )}

        {/* Preview Mode */}
        {ciData && (
          <div className="flex justify-center print-area">
            <CIFormPreview data={ciData} />
          </div>
        )}
      </main>

      {/* Footer - Hidden on Print */}
      <footer className="bg-white border-t border-gray-200 py-4 text-center text-xs text-gray-500 no-print">
        <p>Powered by Google Gemini AI | Built for NBI Productivity</p>
      </footer>
    </div>
  );
};

export default App;