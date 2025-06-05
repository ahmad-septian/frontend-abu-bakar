import api from "../lib/axios";

export async function ListPembayaranSiswa(siswaId) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/pembayaran-siswa/${siswaId}/list`, {
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

export async function CreatePembayaranSiswa(siswaId, pembayaranIds) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.post(
      `/pembayaran-siswa/${siswaId}/assign`,
      {
        pembayaranIds,
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


export async function UpdatePembayaranSiswa(siswaId, id, status, harga) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.patch(
      `/pembayaran-siswa/${siswaId}/update/${id}`,
      {
        status,
        harga,
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

export async function DeletePembayaranSiswa(siswaId, id) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.delete(`/pembayaran-siswa/${siswaId}/delete/${id}`, {
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

// SISWA
export async function ListTagihanMurid() {
  const token = localStorage.getItem("tokenSiswa");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/tagihan-murid/list`, {
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

export async function CheckoutTagihan(codePembayaran) {
  const token = localStorage.getItem("tokenSiswa");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/tagihan-murid/checkout/${codePembayaran}`, {
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
