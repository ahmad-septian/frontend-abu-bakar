import api from "../lib/axios";

export async function GetAllPembayaran() {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/pembayaran/all`, {
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

export async function GetPembayaranPaginated(page = 1, take = 10, search = "") {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/pembayaran/paginated`, {
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

export async function GetOnePembayaran(id) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/pembayaran/${id}`, {
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

export async function CreatePembayaran(
  namaPembayaran,
  hargaPembayaran,
  modelPembayaran,
  isInstallment,
  aktif
) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.post(
      "/pembayaran/new",
      {
        namaPembayaran,
        hargaPembayaran,
        modelPembayaran,
        isInstallment,
        aktif,
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

export async function UpdatePembayaran(
  id,
  namaPembayaran,
  hargaPembayaran,
  modelPembayaran,
  isInstallment,
  aktif
) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.put(
      `/pembayaran/${id}/update`,
      {
        namaPembayaran,
        hargaPembayaran,
        modelPembayaran,
        isInstallment,
        aktif,
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
