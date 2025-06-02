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

  if (!token) {
    return { isLoggedIn: false };
  }

  try {
    const response = await api.get("/auth/cek-login", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data?.pegawai?.role === "ADMIN") {
      return { isLoggedIn: true, data: response.data.pegawai };
    } else {
      return { isLoggedIn: false };
    }
  } catch (error) {
    console.error("Gagal cek login:", error);
    return { isLoggedIn: false };
  }
}
