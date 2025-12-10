import { GoogleGenAI, Type } from "@google/genai";
import { UserData, CIGeneratedContent } from "../types";

const genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCIContent = async (userData: UserData): Promise<CIGeneratedContent> => {
  const model = "gemini-2.5-flash";

  const prompt = `
    Anda adalah seorang ahli Insinyur Industri dan Manajer QA yang ahli dalam membuat dokumen Perbaikan Berkelanjutan (Continuous Improvement/CI/Kaizen).
    
    Tugas: Buatlah isi konten untuk formulir CI berdasarkan data berikut:
    - Bagian/Departemen: ${userData.bagian}
    - Tema/Topik CI: ${userData.tema}

    Instruksi:
    1. Gunakan Bahasa Indonesia yang formal, profesional, dan ringkas.
    2. Isi harus relevan dengan konteks industri manufaktur atau operasional perusahaan.
    3. Output harus sesuai dengan 5 bagian formulir standar.

    Detail Bagian:
    1. Latar Belakang: Mengapa perbaikan ini diperlukan? Masalah apa yang mendasari?
    2. Tujuan: Apa target spesifik yang ingin dicapai (SMART goals)?
    3. Keadaan Saat Ini: Deskripsikan kondisi sebelum perbaikan (masalah, inefisiensi, dll).
    4. Rencana Kegiatan: Langkah-langkah konkret perbaikan (Poin-poin singkat).
    5. Perubahan yang Diharapkan: Hasil positif atau benefit yang diekspektasikan setelah implementasi.
  `;

  try {
    const response = await genAI.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            latarBelakang: { type: Type.STRING, description: "Isi untuk kolom Latar Belakang" },
            tujuan: { type: Type.STRING, description: "Isi untuk kolom Tujuan" },
            keadaanSaatIni: { type: Type.STRING, description: "Isi untuk kolom Keadaan Saat Ini" },
            rencanaKegiatan: { type: Type.STRING, description: "Isi untuk kolom Rencana Kegiatan (bisa format list)" },
            perubahanDiharapkan: { type: Type.STRING, description: "Isi untuk kolom Perubahan yang Diharapkan/Hasil" },
          },
          required: ["latarBelakang", "tujuan", "keadaanSaatIni", "rencanaKegiatan", "perubahanDiharapkan"],
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as CIGeneratedContent;
    } else {
      throw new Error("Empty response from AI");
    }
  } catch (error) {
    console.error("Error generating CI content:", error);
    throw error;
  }
};