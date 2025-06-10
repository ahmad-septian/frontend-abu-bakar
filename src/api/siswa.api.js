import api from "../lib/axios";

export async function GetAllSiswa() {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/siswa/all`, {
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

export async function GetSiswaPaginated(page = 1, take = 10, search = "") {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/siswa/paginated`, {
      params: {
        page,
        take,
        search,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return resp.data;
  } catch (error) {
    console.error("Sepertinya Terjadi Kesalahan:", error.response?.data);
    throw error;
  }
}

export async function GetOneSiswa(id) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/siswa/${id}`, {
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

export async function CreateSiswa(
  namaLengkap,
  jenisKelamin,
  tempatLahir,
  tanggalLahir,
  nisn,
  namaAyah,
  namaIbu,
  namaWali,
  noHpAyah,
  noHpIbu,
  noHpWali,
  alamat,
  tahunMasuk,
  kelas,
  tahunAjaran,
  emailOrangTua,
  kelompok
) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.post(
      "/siswa/new",
      {
        namaLengkap,
        jenisKelamin,
        tempatLahir,
        tanggalLahir,
        nisn,
        namaAyah,
        namaIbu,
        namaWali,
        noHpAyah,
        noHpIbu,
        noHpWali,
        alamat,
        tahunMasuk,
        kelas,
        tahunAjaran,
        emailOrangTua,
        kelompok,
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
    console.error("Sepertinya Terjadi Kesalahan:", error);
    throw error;
  }
}

export async function UpdateSiswa(
  id,
  namaLengkap,
  jenisKelamin,
  tempatLahir,
  tanggalLahir,
  nisn,
  namaAyah,
  namaIbu,
  namaWali,
  noHpAyah,
  noHpIbu,
  noHpWali,
  alamat,
  tahunMasuk,
  kelas,
  tahunAjaran,
  emailOrangTua
) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.patch(
      `/siswa/${id}/update`,
      {
        namaLengkap,
        jenisKelamin,
        tempatLahir,
        tanggalLahir,
        nisn,
        namaAyah,
        namaIbu,
        namaWali,
        noHpAyah,
        noHpIbu,
        noHpWali,
        alamat,
        tahunMasuk,
        kelas,
        tahunAjaran,
        emailOrangTua,
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

export async function UpdatePasswordSiswa(id, newPassword, confirmPassword) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.patch(
      `/siswa/${id}/password`,
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

export async function StatusSiswa(id, status) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.patch(
      `/siswa/${id}/status`,
      {
        status,
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

export async function UploadFotoSiswa(id, formData) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.post(`/siswa/${id}/upload-foto`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return resp;
  } catch (error) {
    console.error("Sepertinya Terjadi Kesalahan:", error.response?.data);
    throw error;
  }
}
