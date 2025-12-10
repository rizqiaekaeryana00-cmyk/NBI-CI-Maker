export interface UserData {
  nama: string;
  nik: string;
  bagian: string;
  tema: string;
}

export interface CIGeneratedContent {
  latarBelakang: string;
  tujuan: string;
  keadaanSaatIni: string;
  rencanaKegiatan: string;
  perubahanDiharapkan: string;
}

export interface CIFormData extends UserData, Partial<CIGeneratedContent> {
  isGenerated: boolean;
}