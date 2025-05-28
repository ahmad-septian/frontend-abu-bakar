import api from "../lib/axios";

export async function GetAllKelas() {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/kelas/all`, {
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

export async function GetKelasPaginated(page = 1, take = 10, search = "") {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/kelas/paginated`, {
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
    return resp;
  } catch (error) {
    console.error("Sepertinya Terjadi Kesalahan:", error.response?.data);
    throw error;
  }
}

export async function GetOneKelas(id) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/kelas/${id}`, {
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

export async function CreateKelas(
  namaKelas,
  tingkat,
  deskripsi,
  waliKelas,
  isActive
) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.post(
      "/kelas/new",
      {
        namaKelas,
        tingkat,
        deskripsi,
        waliKelas,
        isActive,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer token`,
        },
      }
    );
    return resp;
  } catch (error) {
    console.error("Sepertinya Terjadi Kesalahan:", error.response?.data);
    throw error;
  }
}

export async function UpdateKelas(
  id,
  namaKelas,
  tingkat,
  deskripsi,
  waliKelas,
  isActive
) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.put(
      `/kelas/${id}/update`,
      {
        namaKelas,
        tingkat,
        deskripsi,
        waliKelas,
        isActive,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer token`,
        },
      }
    );
    return resp;
  } catch (error) {
    console.error("Sepertinya Terjadi Kesalahan:", error.response?.data);
    throw error;
  }
}
