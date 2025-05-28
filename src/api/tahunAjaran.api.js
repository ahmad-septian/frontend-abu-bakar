import api from "../lib/axios";

export async function GetAllTahunAjaran() {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/tahun-ajaran/all`, {
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

export async function GetTahunAjaranPaginated(
  page = 1,
  take = 10,
  search = ""
) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/tahun-ajaran/paginated`, {
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

export async function GetOneTahunAjaran(id) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/tahun-ajaran/${id}`, {
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

export async function CreateTahunAjaran(
  tahunAjaran,
  code,
  tanggalMulai,
  tanggalSelesai,
  isActive
) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.post(
      "/tahun-ajaran/new",
      {
        tahunAjaran,
        code,
        tanggalMulai,
        tanggalSelesai,
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

export async function UpdateTahunAjaran(
  id,
  tahunAjaran,
  code,
  tanggalMulai,
  tanggalSelesai,
  isActive
) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.put(
      `/tahun-ajaran/${id}/update`,
      {
        tahunAjaran,
        code,
        tanggalMulai,
        tanggalSelesai,
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
