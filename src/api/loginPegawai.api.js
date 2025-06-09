import api from "../lib/axios";
import { AxiosError } from "axios";

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
    return { isLoggedIn: false }; // token tidak ada, dianggap belum login
  }

  try {
    const resp = await api.get("/auth/check-login", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      isLoggedIn: true,
      user: resp.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      // kalau 401 atau token expired
      if (error.response?.status === 401) {
        return { isLoggedIn: false };
      }
    }

    // selain 401, baru anggap fatal
    console.error("CekLoginPegawai gagal:", error);
    return { isLoggedIn: false };
  }
}

export async function CekLoginGuru() {
  const token = localStorage.getItem("tokenGuru");

  if (!token) {
    return { isLoggedIn: false }; // token tidak ada, dianggap belum login
  }

  try {
    const resp = await api.get("/auth/check-login", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      isLoggedIn: true,
      user: resp.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      // kalau 401 atau token expired
      if (error.response?.status === 401) {
        return { isLoggedIn: false };
      }
    }

    // selain 401, baru anggap fatal
    console.error("CekLoginPegawai gagal:", error);
    return { isLoggedIn: false };
  }
}
