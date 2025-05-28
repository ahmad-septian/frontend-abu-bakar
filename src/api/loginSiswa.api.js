import api from "../lib/axios";

export async function LoginSiswa(login, password) {
  try {
    const resp = await api.post(
      "/auth-siswa/login",
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

export async function CekLoginSiswa() {
  const token = localStorage.getItem("tokenSiswa");
  if (!token) throw new Error("No access token found");

  try {
    const resp = await api.get(`/auth-siswa/check-login`, {
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
