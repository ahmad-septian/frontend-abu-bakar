import api from "../lib/axios";

export async function GetJapelAdmin(guruId) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/jadwal-pelajaran/${guruId}/pengajar`, {
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

export async function GetJapelGuru() {
  const token = localStorage.getItem("tokenGuru");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/jadwal-pelajaran/pengajar`, {
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

export async function GetInputNilaiAdmin(guruId, japelId) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/nilai/${guruId}/${japelId}/hasil`, {
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

export async function GetInputNilaiGuru(japelId) {
  const token = localStorage.getItem("tokenGuru");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/nilai/${japelId}/hasil`, {
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

export async function InputNilaiGuru(
  japelId,
  siswaId,
  assessmentType,
  nilai,
  capaianKompetensi
) {
  const token = localStorage.getItem("tokenGuru");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.post(
      `/nilai/${japelId}/${siswaId}/input`,
      {
        assessmentType,
        nilai,
        capaianKompetensi,
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

export async function GetRapotSiswa() {
  const token = localStorage.getItem("tokenSiswa");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/nilai/rapot-siswa`, {
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

export async function ExportSiswa(type) {
  const token = localStorage.getItem("tokenSiswa");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/pdf/export/${type}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "blob",
    });
    return resp;
  } catch (error) {
    console.error("Sepertinya Terjadi Kesalahan:", error.response?.data);
    throw error;
  }
}
