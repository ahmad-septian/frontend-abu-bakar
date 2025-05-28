import api from "../lib/axios";

export async function LoginPegawai(login, password) {
  try {
    const resp = await api.post(
      "/auth/login-pegawai",
      {
        login,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return resp;
  } catch (error) {
    console.error("Sepertinya Terjadi Kesalahan:", error.response?.data);
    throw error;
  }
}

export async function CekLoginPegawai() {
  const token = localStorage.getItem("tokenPegawai");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/auth/check-login`, {
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
