import api from "../lib/axios";

export async function GetAllPegawai() {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/pegawai/all`, {
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

export async function GetPegawaiPaginated(page = 1, take = 10, search = "") {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/pegawai/pagination`, {
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

export async function GetOnePegawai(id) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/pegawai/${id}`, {
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

export async function CreatePegawai(
  namaLengkap,
  nik,
  nuptk,
  tempatLahir,
  tanggalLahir,
  alamat,
  noHp,
  email,
  role,
  pendidikanTerakhir,
  jenisKelamin,
  kelompok
) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.post(
      "/pegawai/new",
      {
        namaLengkap,
        nik,
        nuptk,
        tempatLahir,
        tanggalLahir,
        alamat,
        noHp,
        email,
        role,
        pendidikanTerakhir,
        jenisKelamin,
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
    console.error("Sepertinya Terjadi Kesalahan:", error.response?.data);
    throw error;
  }
}

export async function UpdatePegawai(
  id,
  namaLengkap,
  nik,
  nuptk,
  tempatLahir,
  tanggalLahir,
  alamat,
  noHp,
  email,
  role,
  pendidikanTerakhir,
  jenisKelamin,
  kelompok
) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.patch(
      `/pegawai/${id}/update`,
      {
        namaLengkap,
        nik,
        nuptk,
        tempatLahir,
        tanggalLahir,
        alamat,
        noHp,
        email,
        role,
        pendidikanTerakhir,
        jenisKelamin,
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
    console.error("Sepertinya Terjadi Kesalahan:", error.response?.data);
    throw error;
  }
}

export async function UpdatePasswordPegawai(id, newPassword, confirmPassword) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.patch(
      `/pegawai/${id}/password`,
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

export async function StatusPegawai(id, status) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.patch(
      `/pegawai/${id}/status`,
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

export async function UploadFotoPegawai(id, formData) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.post(`/pegawai/${id}/upload-foto`, formData, {
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

export async function GetListSiswaPerWalikelas(search) {
  const token = localStorage.getItem("tokenGuru");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/pegawai/walikelas`, {
      params: {
        search,
      },
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
