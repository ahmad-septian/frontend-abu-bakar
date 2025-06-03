import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  GetOnePegawai,
  StatusPegawai,
  UpdatePasswordPegawai,
} from "../../../../../api/pegawai.api";

export default function RiwayatAkunPegawai() {
  const { id } = useParams();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    if (!password || !confirmPassword) {
      toast.error("Password tidak boleh kosong!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Konfirmasi password tidak sama!");
      return;
    }

    try {
      const resp = await UpdatePasswordPegawai(id, password, confirmPassword);
      if (resp.status === 200 || resp.status === 201) {
        toast.success("Password berhasil diubah!");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Gagal mengubah password.");
    }
  };

  const handleStatusChange = async (event) => {
    const newStatus = event.target.value;
    setStatus(newStatus);
    try {
      const resp = await StatusPegawai(id, newStatus);
      if (resp.status === 200 || resp.status === 201) {
        toast.success("Status pegawai berhasil diubah!");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Gagal mengubah status pegawai."
      );
    }
  };

  const getOneData = async () => {
    try {
      const response = await GetOnePegawai(id);
      const data = response.data;
      setStatus(data.statusPegawai || "");
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  useEffect(() => {
    getOneData();
  }, []);

  return (
    <div>
      <div className="bg-white p-6 rounded-xl border border-gray-200 mx-auto mt-2">
        <Typography
          variant="h6"
          className="text-[#85193C] font-semibold mb-4 text-center"
        >
          Ganti Password
        </Typography>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-1 gap-4"
        >
          <div className="my-2">
            <Typography>Password Baru</Typography>
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Input Password Baru"
              fullWidth
              margin="dense"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div>
            <Typography>Konfirmasi Password Baru</Typography>
            <TextField
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmPassword"
              placeholder="Konfirmasi Password Baru"
              fullWidth
              margin="dense"
              variant="outlined"
              type={showConfirm ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowConfirm((prev) => !prev)}
                      edge="end"
                    >
                      {showConfirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "10px",
            }}
          >
            <Button
              variant="contained"
              sx={{ backgroundColor: "#85193C", color: "#fff" }}
              onClick={handleSubmit}
            >
              Simpan
            </Button>
          </div>
        </form>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 mx-auto mt-5">
        <Typography
          variant="h6"
          className="text-[#85193C] font-semibold mb-4 text-center"
        >
          Ganti Status Pegawai
        </Typography>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-1 gap-4"
        >
          <div className="mt-3">
            <Typography>Status Pegawai</Typography>
            <FormControl fullWidth margin="dense" size="small">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                onChange={handleStatusChange}
              >
                <MenuItem value="AKTIF">AKTIF</MenuItem>
                <MenuItem value="TIDAK_AKTIF">TIDAK AKTIF</MenuItem>
                <MenuItem value="RESIGN">RESIGN</MenuItem>
              </Select>
            </FormControl>
          </div>
        </form>
      </div>
    </div>
  );
}
