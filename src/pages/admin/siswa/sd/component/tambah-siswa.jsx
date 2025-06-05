import { useState, useEffect } from "react";
import {
  TextField,
  MenuItem,
  Typography,
  Button,
  FormControl,
  Select,
  Avatar,
} from "@mui/material";
import { CreateSiswa } from "../../../../../api/siswa.api";
import { toast } from "react-toastify";
import { GetAllKelas } from "@/api/kelas.api";
import { GetAllTahunAjaran } from "../../../../../api/tahunAjaran.api";

export default function TambahSiswa() {
  const [dataKelas, setDataKelas] = useState([]);
  const [dataTahunAjaran, setDataTahunAjaran] = useState([]);
  const [formData, setFormData] = useState({
    nisn: "",
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
    tahunAjaran: "",
    emailOrangTua: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "namaLengkap",
      "jenisKelamin",
      "tempatLahir",
      "tanggalLahir",
      "tahunMasuk",
      "kelas",
      "tahunAjaran",
      "alamat",
      "emailOrangTua",
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        toast.error(`Field ${field} wajib diisi`);
        return;
      }
    }

    try {
      await CreateSiswa(
        formData.namaLengkap,
        formData.jenisKelamin,
        formData.tempatLahir,
        formData.tanggalLahir,
        formData.nisn,
        formData.namaAyah,
        formData.namaIbu,
        formData.namaWali,
        formData.noHpAyah,
        formData.noHpIbu,
        formData.noHpWali,
        formData.alamat,
        formData.tahunMasuk,
        formData.kelas,
        formData.tahunAjaran,
        formData.emailOrangTua
      );
      toast.success("Siswa berhasil ditambahkan!");
      setFormData({
        nisn: "",
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
        tahunAjaran: "",
        emailOrangTua: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Gagal menambahkan siswa!");
    }
  };

  const getAllDataKelas = async () => {
    try {
      const response = await GetAllKelas();
      setDataKelas(response.data);
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  const getAllDataTahunAjaran = async () => {
    try {
      const response = await GetAllTahunAjaran();
      setDataTahunAjaran(response.data);
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  useEffect(() => {
    getAllDataKelas();
    getAllDataTahunAjaran();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 mx-auto mt-2">
      <Typography variant="h6" className="text-[#85193C] font-semibold mb-4">
        Tambah Siswa
      </Typography>

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
          <Typography>Email Orang Tua</Typography>
          <TextField
            name="emailOrangTua"
            fullWidth
            size="small"
            margin="dense"
            value={formData.emailOrangTua}
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
            <Select name="kelas" value={formData.kelas} onChange={handleChange}>
              {dataKelas.length > 0 ? (
                dataKelas.map((kelas) => (
                  <MenuItem key={kelas.id} value={kelas.id}>
                    {kelas.namaKelas}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>Loading...</MenuItem>
              )}
            </Select>
          </FormControl>
        </div>
        <div className="mt-3">
          <Typography>Tahun Ajaran</Typography>
          <FormControl fullWidth margin="dense" size="small">
            <Select
              name="tahunAjaran"
              value={formData.tahunAjaran}
              onChange={handleChange}
            >
              {dataTahunAjaran.length > 0 ? (
                dataTahunAjaran.map((kelas) => (
                  <MenuItem key={kelas.id} value={kelas.id}>
                    {kelas.code} - {kelas.tahunAjaran}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>Loading...</MenuItem>
              )}
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
            Simpan Siswa
          </Button>
        </div>
      </form>
    </div>
  );
}
