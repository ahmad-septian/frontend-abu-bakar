import React, { useState, useEffect } from "react";
import {
  TextField,
  MenuItem,
  Typography,
  Button,
  FormControl,
  Select,
  Avatar,
} from "@mui/material";
import {} from "@mui/icons-material";
import { useParams } from "react-router-dom";
import {
  GetOnePegawai,
  UpdatePegawai,
  UploadFotoPegawai,
} from "../../../../../api/pegawai.api";
import { toast } from "react-toastify";
import { stringAvatar } from "@/component-global/format-avatar";
export default function DataPegawai() {
  const { id } = useParams();
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

  const getOneData = async () => {
    try {
      const response = await GetOnePegawai(id);
      const data = response.data;

      setFormData({
        namaLengkap: data.namaLengkap || "",
        nik: data.nik || "",
        nuptk: data.nuptk || "",
        tempatLahir: data.tempatLahir || "",
        tanggalLahir: data.tanggalLahir || "",
        alamat: data.alamat || "",
        noHp: data.noHp || "",
        email: data.email || "",
        role: data.role || "",
        pendidikanTerakhir: data.pendidikanTerakhir || "",
        foto: data.foto || "",
        jenisKelamin: data.jenisKelamin || "",
      });
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  const uploadImagePegawai = async (e) => {
    const foto = e.target.files[0];
    if (!foto) {
      toast.error("Tidak ada file yang dipilih");
      return;
    }

    const formData = new FormData();
    formData.append("foto", foto);

    try {
      const resp = await UploadFotoPegawai(id, formData);
      setFormData({ ...formData, foto: resp.data.url });
      toast.success("Foto siswa berhasil diupload!");
    } catch (error) {
      toast.error("Gagal mengupload foto siswa!");
    }
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
      "jenisKelamin",
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        toast.error(`Field ${field} wajib diisi`);
        return;
      }
    }

    try {
      await UpdatePegawai(
        id,
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
      toast.success("Pegawai berhasil diupdate!");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Gagal menambahkan siswa!");
    }
  };

  useEffect(() => {
    getOneData();
  }, [id]);
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 mx-auto mt-2">
      <Typography variant="h6" className="text-[#85193C] font-semibold mb-4">
        Detail Data Siswa
      </Typography>
      <div className="flex justify-center mb-4 flex-col items-center">
        {formData.foto ? (
          <img
            src={
              "http://localhost:5001/api/pegawai/foto-pegawai/" + formData.foto
            }
            alt="Foto Siswa"
            className="w-32 h-32 rounded-full object-cover border-2 border-[#85193C]"
          />
        ) : (
          <Avatar
            {...stringAvatar(formData.namaLengkap)}
            sx={{
              ...stringAvatar(formData.namaLengkap).sx,
              width: "6rem",
              height: "6rem",
              fontSize: "2.5rem",
            }}
          />
        )}

        <input
          type="file"
          id="foto-pegawai"
          accept="image/*"
          style={{ display: "none" }}
          onChange={uploadImagePegawai} // ← handler dari kamu
        />

        <label htmlFor="foto-pegawai">
          <Button
            component="span"
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#85193C",
              color: "#fff",
              marginTop: "10px",
            }}
          >
            Upload Image
          </Button>
        </label>
      </div>
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
  );
}
