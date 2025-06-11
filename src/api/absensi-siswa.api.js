import api from "../lib/axios";

export async function AbsensiSiswa(dataAbsen) {
  const token = localStorage.getItem("tokenGuru");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.post(`absensi-siswa`, dataAbsen, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return resp;
  } catch (error) {
    console.error("Sepertinya Terjadi Kesalahan:", error.response?.data);
    throw error;
  }
}

export async function getAbsensiByTanggal(tanggal = "") {
  const token = localStorage.getItem("tokenGuru");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/absensi-siswa/list-absensi`, {
      params: {
        tanggal,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return resp;
  } catch (error) {
    console.error("Sepertinya Terjadi Kesalahan:", error.response?.data);
    throw error;
  }
}

export async function getRekapAbsensi() {
  const token = localStorage.getItem("tokenGuru");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/absensi-siswa/rekap-absensi`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return resp;
  } catch (error) {
    console.error("Sepertinya Terjadi Kesalahan:", error.response?.data);
    throw error;
  }
}

export async function getRekapAbsensiForSiswa() {
  const token = localStorage.getItem("tokenSiswa");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/absensi-siswa/rekap-absensi-siswa`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return resp;
  } catch (error) {
    console.error("Sepertinya Terjadi Kesalahan:", error.response?.data);
    throw error;
  }
}

export async function getRekapAbsensiSummaryForSiswa() {
  const token = localStorage.getItem("tokenSiswa");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/absensi-siswa/summary-absensi-siswa`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return resp;
  } catch (error) {
    console.error("Sepertinya Terjadi Kesalahan:", error.response?.data);
    throw error;
  }
}

export async function getUcapanSiswa() {
  const token = localStorage.getItem("tokenSiswa");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/absensi-siswa/ucapan`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return resp;
  } catch (error) {
    console.error("Sepertinya Terjadi Kesalahan:", error.response?.data);
    throw error;
  }
}
