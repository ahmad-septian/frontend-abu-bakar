import api from "../lib/axios";

export async function GetProfile() {
  const token = localStorage.getItem("tokenSiswa");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/profile-siswa`, {
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

export async function UpdateProfile(
  namaLengkap,
  jenisKelamin,
  tempatLahir,
  tanggalLahir,
  emailOrangTua,
  namaAyah,
  namaIbu,
  namaWali,
  noHpAyah,
  noHpIbu,
  noHpWali,
  alamat
) {
  const token = localStorage.getItem("tokenSiswa");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.patch(
      "/profile-siswa/update",
      {
        namaLengkap,
        jenisKelamin,
        tempatLahir,
        tanggalLahir,
        emailOrangTua,
        namaAyah,
        namaIbu,
        namaWali,
        noHpAyah,
        noHpIbu,
        noHpWali,
        alamat,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return resp;
  } catch (error) {
    console.error("Sepertinya Terjadi Kesalahan:", error.response?.data);
    throw error;
  }
}

export async function UpdatePasswordProfile(newPassword, confirmPassword) {
  const token = localStorage.getItem("tokenSiswa");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.patch(
      `/profile-siswa/update-password`,
      {
        newPassword,
        confirmPassword,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return resp;
  } catch (error) {
    console.error("Sepertinya Terjadi Kesalahan:", error.response?.data);
    throw error;
  }
}
