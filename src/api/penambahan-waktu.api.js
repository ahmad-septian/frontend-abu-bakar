import api from "../lib/axios";

export async function getPenambahanWaktuGuru() {
  const token = localStorage.getItem("tokenGuru");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/perpanjangan-nilai/request-guru`, {
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

export async function RequestPenambahanWaktuGuru(
  jadwalPelajaranId,
  assessmentType,
  requestedEndDate,
  alasan
) {
  const token = localStorage.getItem("tokenGuru");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.post(
      "/perpanjangan-nilai/request-guru",
      {
        jadwalPelajaranId,
        assessmentType,
        requestedEndDate,
        alasan,
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

export async function ApprovedPenambahanWaktu(id, status, requestedEndDate) {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.patch(
      `/perpanjangan-nilai/${id}/approve`,
      {
        status,
        requestedEndDate,
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

export async function getNotifPenambahanWaktuAdmin() {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/perpanjangan-nilai/notif-admin`, {
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
