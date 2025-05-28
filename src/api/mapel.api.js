import api from "../lib/axios";

export async function GetAllMataPelajaran() {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/mata-pelajaran/all`, {
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

export async function GetMataPelajaranPaginated(
  page = 1,
  take = 10,
  search = ""
) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/mata-pelajaran/paginated`, {
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

export async function GetOneMataPelajaran(id) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/mata-pelajaran/${id}`, {
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

export async function CreateMataPelajaran(
  namaMataPelajaran,
  kodePelajaran,
  deskripsi,
  isActive,
  tipePelajaran
) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.post(
      "/mata-pelajaran/new",
      {
        namaMataPelajaran,
        kodePelajaran,
        deskripsi,
        isActive,
        tipePelajaran,
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

export async function UpdateMataPelajaran(
  id,
  namaMataPelajaran,
  kodePelajaran,
  deskripsi,
  isActive,
  tipePelajaran
) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.put(
      `/mata-pelajaran/${id}/update`,
      {
        namaMataPelajaran,
        kodePelajaran,
        deskripsi,
        isActive,
        tipePelajaran,
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
