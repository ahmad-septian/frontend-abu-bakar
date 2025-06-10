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
