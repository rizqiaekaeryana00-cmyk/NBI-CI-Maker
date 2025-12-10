import React from 'react';
import { CIFormData } from '../types';

interface CIFormPreviewProps {
  data: CIFormData;
}

const CIFormPreview: React.FC<CIFormPreviewProps> = ({ data }) => {
  return (
    <div className="w-[297mm] h-[210mm] bg-white text-black text-sm relative border border-gray-300 shadow-lg mx-auto p-4 print:shadow-none print:border-none print:m-0 print:p-0 overflow-hidden box-border font-sans">
      
      {/* Container for the whole form with outer border */}
      <div className="h-full w-full border-2 border-black flex flex-col">
        
        {/* HEADER SECTION */}
        <div className="flex h-[15%] border-b-2 border-black">
          {/* Logo & Company Name */}
          <div className="w-[50%] border-r border-black flex flex-col">
            <div className="h-1/2 border-b border-black bg-yellow-200 flex items-center justify-center relative">
               {/* Simulating the NBI Logo */}
               <div className="font-black text-4xl tracking-tighter">
                 <span className="text-red-700">N</span>
                 <span className="text-green-700">B</span>
                 <span className="text-yellow-600">I</span>
               </div>
            </div>
            <div className="h-1/2 bg-yellow-200 flex items-center justify-center border-t border-black font-bold text-lg">
              PT. NUSANTARA BUILDING INDUSTRIES
            </div>
          </div>
          
          {/* Document Info */}
          <div className="w-[30%] border-r border-black flex flex-col">
            <div className="flex-1 flex items-center border-b border-black">
               <span className="font-bold px-2 w-[40%] text-xs">No. Dokumen</span>
               <span className="border-l border-black px-2 flex-1 text-xs">: F.28/WM/NBI</span>
            </div>
            <div className="flex-1 flex items-center border-b border-black">
               <span className="font-bold px-2 w-[40%] text-xs">Revisi</span>
               <span className="border-l border-black px-2 flex-1 text-xs">: 00</span>
            </div>
            <div className="flex-1 flex items-center border-b border-black">
               <span className="font-bold px-2 w-[40%] text-xs">Tanggal</span>
               <span className="border-l border-black px-2 flex-1 text-xs">: {new Date().toLocaleDateString('id-ID')}</span>
            </div>
            <div className="flex-1 flex items-center">
               <span className="font-bold px-2 w-[40%] text-xs">Terbitan</span>
               <span className="border-l border-black px-2 flex-1 text-xs">: 01</span>
            </div>
          </div>

          {/* Signatures Header */}
          <div className="w-[20%] flex flex-col">
             <div className="flex h-6 border-b border-black">
                <div className="flex-1 border-r border-black text-center text-xs font-bold flex items-center justify-center">Disetujui</div>
                <div className="flex-1 border-r border-black text-center text-xs font-bold flex items-center justify-center">Diperiksa</div>
                <div className="flex-1 text-center text-xs font-bold flex items-center justify-center">Dibuat</div>
             </div>
             <div className="flex-1 flex">
                <div className="flex-1 border-r border-black"></div>
                <div className="flex-1 border-r border-black"></div>
                <div className="flex-1"></div>
             </div>
          </div>
        </div>

        {/* TITLE SECTION: PERBAIKAN BERKELANJUTAN */}
        <div className="absolute top-2 left-[50%] translate-x-[-50%] font-bold text-lg uppercase tracking-wider bg-transparent pointer-events-none">
          PERBAIKAN BERKELANJUTAN
        </div>

        {/* IDENTITY & THEME SECTION */}
        <div className="flex h-[10%] border-b border-black">
          {/* Left: Identity */}
          <div className="w-[45%] p-2 flex flex-col justify-center space-y-1">
            <div className="flex">
              <span className="w-32 font-bold text-xs">Bagian / Jabatan</span>
              <span className="font-bold px-1">:</span>
              <span className="border-b border-dotted border-gray-400 flex-1 text-xs">{data.bagian}</span>
            </div>
            <div className="flex">
              <span className="w-32 font-bold text-xs">Nama / NIK</span>
              <span className="font-bold px-1">:</span>
              <span className="border-b border-dotted border-gray-400 flex-1 text-xs uppercase">{data.nama} / {data.nik}</span>
            </div>
          </div>
          
          {/* Right: Theme */}
          <div className="w-[55%] p-1 relative border-l border-black">
             <div className="bg-yellow-200 px-2 py-0.5 border border-black inline-block absolute -top-3 left-1 text-xs font-bold uppercase">
               TEMA / TOPIK
             </div>
             <div className="w-full h-full border border-black p-2 flex items-center">
                <p className="font-semibold text-sm">{data.tema}</p>
             </div>
          </div>
        </div>

        {/* CONTENT GRIDS - 2x2 Layout mostly */}
        <div className="flex flex-1">
            {/* Left Column */}
            <div className="w-1/2 flex flex-col border-r border-black">
                
                {/* I. LATAR BELAKANG */}
                <div className="h-[33%] p-2 relative border-b border-black">
                    <div className="bg-yellow-200 px-2 py-0.5 border border-black inline-block absolute -top-3 left-1 text-xs font-bold">
                        I. LATAR BELAKANG
                    </div>
                    <div className="w-full h-full border border-black p-2 pt-4 text-xs whitespace-pre-line leading-relaxed overflow-hidden">
                       {data.latarBelakang}
                    </div>
                </div>

                {/* II. TUJUAN */}
                <div className="h-[33%] p-2 relative border-b border-black mt-2">
                    <div className="bg-yellow-200 px-2 py-0.5 border border-black inline-block absolute -top-3 left-1 text-xs font-bold">
                        II. TUJUAN
                    </div>
                    <div className="w-full h-full border border-black p-2 pt-4 text-xs whitespace-pre-line leading-relaxed overflow-hidden">
                        {data.tujuan}
                    </div>
                </div>

                 {/* III. KEADAAN SAAT INI */}
                 <div className="h-[34%] p-2 relative mt-2">
                    <div className="bg-yellow-200 px-2 py-0.5 border border-black inline-block absolute -top-3 left-1 text-xs font-bold">
                        III. KEADAAN SAAT INI
                    </div>
                    <div className="w-full h-full border border-black p-2 pt-4 text-xs whitespace-pre-line leading-relaxed overflow-hidden">
                        {data.keadaanSaatIni}
                    </div>
                </div>

            </div>

            {/* Right Column */}
            <div className="w-1/2 flex flex-col">
                
                {/* IV. RENCANA KEGIATAN */}
                <div className="h-[70%] p-2 relative border-b border-black">
                    <div className="bg-yellow-200 px-2 py-0.5 border border-black inline-block absolute -top-3 left-1 text-xs font-bold">
                        IV. RENCANA KEGIATAN
                    </div>
                    <div className="w-full h-full border border-black p-2 pt-4 text-xs whitespace-pre-line leading-relaxed overflow-hidden">
                        {data.rencanaKegiatan}
                    </div>
                </div>

                {/* V. PERUBAHAN YANG DIHARAPKAN (Labeled IV in image, but using proper label) */}
                <div className="h-[30%] p-2 relative mt-2">
                    <div className="bg-yellow-200 px-2 py-0.5 border border-black inline-block absolute -top-3 left-1 text-xs font-bold">
                        IV. PERUBAHAN YANG DIHARAPKAN
                    </div>
                    <div className="w-full h-full border border-black p-2 pt-4 text-xs whitespace-pre-line leading-relaxed overflow-hidden">
                         {data.perubahanDiharapkan}
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default CIFormPreview;