import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { LoginSiswa } from "../../../api/loginSiswa.api";

const LoginFormSiswa = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!login || !password) {
      toast.error("Email dan Password wajib diisi!");
      return;
    }

    setLoading(true);
    try {
      const response = await LoginSiswa(login, password);
      const { access_token, siswa } = response.data;

      localStorage.setItem("tokenSiswa", access_token);

      toast.success(`Assalamualaikum... 👋 ${siswa.namaLengkap}!`);
      navigate(`/siswa/home`);
    } catch (error) {
      toast.error("Login gagal. Periksa kembali email dan password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row ">
      <div className="w-full md:w-1/2">
        <img
          src="/assets/bgLogin.png"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-10 bg-white">
        <div className="w-full max-w-md">
          <Typography
            sx={{
              fontSize: {
                xs: "1.2rem",
                sm: "1.5rem",
                md: "1.7rem",
              },
              textAlign: "center",
              marginBottom: "20px",
              fontWeight: "bold",
              color: "#85193C",
            }}
          >
            Selamat Datang Kembali
          </Typography>

          <div className="mb-6">
            <TextField
              id="nis"
              placeholder="Masukan NIS"
              fullWidth
              variant="outlined"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <TextField
              id="password"
              placeholder="Masukan Password"
              type="password"
              fullWidth
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-5">
            <Button
              variant="contained"
              onClick={handleLogin}
              disabled={loading}
              sx={{
                backgroundColor: "#85193C",
                paddingX: "45%",
                paddingY: "10px",
              }}
            >
              {loading ? "Memuat..." : "Login"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFormSiswa;
