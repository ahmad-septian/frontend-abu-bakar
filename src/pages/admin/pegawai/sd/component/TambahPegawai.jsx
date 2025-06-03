import React, { useState, useEffect } from "react";
import {
  TextField,
  MenuItem,
  Typography,
  Button,
  FormControl,
  Select,
} from "@mui/material";
import {} from "@mui/icons-material";
import {} from "react-router-dom";
import { toast } from "react-toastify";
import { CreatePegawai } from "../../../../../api/pegawai.api";

export default function TambahPegawai() {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    nik: "",
    nuptk: "",
    tempatLahir: "",
    tanggalLahir: "",
    alamat: "",
    noHp: "",
    email: "",
    role: "",
    pendidikanTerakhir: "",
    jenisKelamin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = [
      "namaLengkap",
      "nik",
      "tempatLahir",
      "tanggalLahir",
      "alamat",
      "noHp",
      "email",
      "role",
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        toast.error(`Field ${field} wajib diisi`);
        return;
      }
    }

    try {
      const resp = await CreatePegawai(
        formData.namaLengkap,
        formData.nik,
        formData.nuptk,
        formData.tempatLahir,
        formData.tanggalLahir,
        formData.alamat,
        formData.noHp,
        formData.email,
        formData.role,
        formData.pendidikanTerakhir,
        formData.jenisKelamin
      );
      if (resp.status === 201) {
        toast.success("Pegawai berhasil ditambahkan!");
        setFormData({
          namaLengkap: "",
          nik: "",
          nuptk: "",
          tempatLahir: "",
          tanggalLahir: "",
          alamat: "",
          noHp: "",
          email: "",
          role: "",
          pendidikanTerakhir: "",
          jenisKelamin: "",
        });
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Gagal menambahkan pegawai!"
      );
    }
  };
  return (
    <div>
      <div className="bg-white p-6 rounded-xl border border-gray-200 mx-auto mt-2">
        <Typography variant="h6" className="text-[#85193C] font-semibold mb-4">
          Tambah Pegawai
        </Typography>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="mt-3">
            <Typography>Nama Lengkap</Typography>
            <TextField
              name="namaLengkap"
              fullWidth
              size="small"
              margin="dense"
              value={formData.namaLengkap}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <Typography>NIK</Typography>
            <TextField
              name="nik"
              fullWidth
              size="small"
              margin="dense"
              value={formData.nik}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <Typography>NUPTK</Typography>
            <TextField
              name="nuptk"
              fullWidth
              size="small"
              margin="dense"
              value={formData.nuptk}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <Typography>Tempat Lahir</Typography>
            <TextField
              name="tempatLahir"
              fullWidth
              size="small"
              margin="dense"
              value={formData.tempatLahir}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <Typography>Tanggal Lahir</Typography>
            <TextField
              name="tanggalLahir"
              type="date"
              fullWidth
              size="small"
              margin="dense"
              value={formData.tanggalLahir}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <Typography>Jenis Kelamin</Typography>
            <FormControl fullWidth margin="dense" size="small">
              <Select
                name="jenisKelamin"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.jenisKelamin}
                onChange={handleChange}
              >
                <MenuItem value="L">Laki Laki</MenuItem>
                <MenuItem value="P">Perempuan</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="mt-3">
            <Typography>No Handphone</Typography>
            <TextField
              name="noHp"
              fullWidth
              size="small"
              margin="dense"
              value={formData.noHp}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <Typography>Email</Typography>
            <TextField
              name="email"
              fullWidth
              size="small"
              margin="dense"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <Typography>Role Pegawai</Typography>
            <FormControl fullWidth margin="dense" size="small">
              <Select
                name="role"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.role}
                onChange={handleChange}
              >
                <MenuItem value="KEPALA_SEKOLAH"> KEPALA SEKOLAH</MenuItem>
                <MenuItem value="WAKIL_KEPSEK">WAKIL KEPSEK</MenuItem>
                <MenuItem value="PENGAJAR">PENGAJAR</MenuItem>
                <MenuItem value="TU">TATA USAHA</MenuItem>
                <MenuItem value="ADMIN">ADMIN</MenuItem>
                <MenuItem value="KEBERSIHAN">KEBERSIHAN</MenuItem>
                <MenuItem value="SATPAM">SATPAM</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="mt-3">
            <Typography>Pendidikan Terakhir</Typography>
            <TextField
              name="pendidikanTerakhir"
              fullWidth
              size="small"
              margin="dense"
              value={formData.pendidikanTerakhir}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <Typography>Alamat Lengkap</Typography>
            <TextField
              name="alamat"
              fullWidth
              multiline
              minRows={2}
              margin="dense"
              size="small"
              value={formData.alamat}
              onChange={handleChange}
            />
          </div>

          <div className="col-span-2 text-right mt-2">
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#85193C", color: "#fff" }}
            >
              Simpan Siswa
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
