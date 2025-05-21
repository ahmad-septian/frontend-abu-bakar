import { useState } from "react";
import {
  TextField,
  MenuItem,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  Avatar,
} from "@mui/material";
import { stringAvatar } from "../../../../../component-global/format-avatar";

export default function DataSiswaSd() {
  const [formData, setFormData] = useState({
    nisn: "",
    nis: "",
    namaLengkap: "",
    tempatLahir: "",
    namaAyah: "",
    namaIbu: "",
    noHpAyah: "",
    noHpIbu: "",
    tanggalLahir: "",
    jenisKelamin: "",
    namaWali: "",
    noHpWali: "",
    tahunMasuk: "",
    kelas: "",
    alamat: "",
    foto: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data siswa disubmit:", formData);
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 mx-auto mt-2">
      <Typography variant="h6" className="text-[#85193C] font-semibold mb-4">
        Detail Data Siswa
      </Typography>
      {/* Foto Siswa */}
      <div className="flex justify-center mb-4 flex-col items-center">
        {formData.foto ? (
          <img
            src={formData.foto}
            alt="Foto Siswa"
            className="w-32 h-32 rounded-full object-cover border-2 border-[#85193C]"
          />
        ) : (
          <Avatar
            {...stringAvatar("Fira Riyanti")}
            sx={{
              ...stringAvatar("Fira Riyanti").sx,
              width: "6rem",
              height: "6rem",
              fontSize: "2.5rem",
            }}
          />
        )}

        <Button
          type="submit"
          variant="contained"
          size="small"
          sx={{ backgroundColor: "#85193C", color: "#fff", marginTop: "10px" }}
        >
          Upload Image
        </Button>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="mt-3">
          <Typography>NISN</Typography>
          <TextField
            name="nisn"
            fullWidth
            size="small"
            margin="dense"
            value={formData.nisn}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3">
          <Typography>NIS</Typography>
          <TextField
            name="nis"
            fullWidth
            size="small"
            margin="dense"
            value={formData.nis}
            onChange={handleChange}
          />
        </div>
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
          <Typography>Nama Ayah</Typography>
          <TextField
            name="namaAyah"
            fullWidth
            size="small"
            margin="dense"
            value={formData.namaAyah}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3">
          <Typography>Nama Ibu</Typography>
          <TextField
            name="namaIbu"
            fullWidth
            size="small"
            margin="dense"
            value={formData.namaIbu}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3">
          <Typography>No Handphone Ayah</Typography>
          <TextField
            name="noHpAyah"
            fullWidth
            size="small"
            margin="dense"
            value={formData.noHpAyah}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3">
          <Typography>No Handphone Ibu</Typography>
          <TextField
            name="noHpIbu"
            fullWidth
            size="small"
            margin="dense"
            value={formData.noHpIbu}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3">
          <Typography>Tanggal Lahir</Typography>
          <TextField
            name="tanggalLahir"
            fullWidth
            size="small"
            margin="dense"
            type="date"
            value={formData.tanggalLahir}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3">
          <Typography>Jenis Kelamin</Typography>
          <FormControl fullWidth margin="dense" size="small">
            <Select
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
          <Typography>Nama Wali</Typography>
          <TextField
            name="namaWali"
            fullWidth
            size="small"
            margin="dense"
            value={formData.namaWali}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3">
          <Typography>No Handphone Wali</Typography>
          <TextField
            name="noHpWali"
            fullWidth
            size="small"
            margin="dense"
            value={formData.noHpWali}
            onChange={handleChange}
          />
        </div>

        <div className="mt-3">
          <Typography>Tahun Masuk</Typography>
          <TextField
            name="tahunMasuk"
            fullWidth
            size="small"
            margin="dense"
            value={formData.tahunMasuk}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3">
          <Typography>Kelas</Typography>
          <FormControl fullWidth margin="dense" size="small">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.kelas}
              onChange={handleChange}
            >
              <MenuItem value="1A">Kelas 1A Abu Bakar</MenuItem>
              <MenuItem value="1B">Kelas 1B Umar Bin Khatab</MenuItem>
              <MenuItem value="1C">Kelas 1C Usman Bin Afan</MenuItem>
            </Select>
          </FormControl>
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
            Simpan Perubahan
          </Button>
        </div>
      </form>
    </div>
  );
}
