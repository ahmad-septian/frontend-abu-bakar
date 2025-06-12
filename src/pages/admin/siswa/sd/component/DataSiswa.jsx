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
import { useParams } from "react-router-dom";
import { stringAvatar } from "@/component-global/format-avatar";
import {
  GetOneSiswa,
  UpdateSiswa,
  UploadFotoSiswa,
} from "../../../../../api/siswa.api";
import { toast } from "react-toastify";
import { GetAllKelas } from "@/api/kelas.api";
import { GetAllTahunAjaran } from "../../../../../api/tahunAjaran.api";

export default function DataSiswaSd() {
  const { id } = useParams();
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
    tahunAjaran: "",
    foto: "",
    emailOrangTua: "",
    kelompok: null,
  });
  const [dataKelas, setDataKelas] = useState([]);
  const [dataTahunAjaran, setDataTahunAjaran] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getOneData = async () => {
    try {
      const response = await GetOneSiswa(id);
      const data = response.data;

      setFormData({
        nisn: data.nisn || "",
        nis: data.nis || "",
        namaLengkap: data.namaLengkap || "",
        tempatLahir: data.tempatLahir || "",
        namaAyah: data.namaAyah || "",
        namaIbu: data.namaIbu || "",
        noHpAyah: data.noHpAyah || "",
        noHpIbu: data.noHpIbu || "",
        tanggalLahir: data.tanggalLahir || "",
        jenisKelamin: data.jenisKelamin || "",
        namaWali: data.namaWali || "",
        noHpWali: data.noHpWali || "",
        tahunMasuk: data.tahunMasuk || "",
        kelas: data.kelas?.id || "",
        alamat: data.alamat || "",
        tahunAjaran: data.tahunAjaran?.id || "",
        foto: data.foto || "",
        emailOrangTua: data.emailOrangTua || "",
        kelompok: data.kelompok || null,
      });
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  const uploadImageSiswa = async (e) => {
    const foto = e.target.files[0];
    if (!foto) {
      toast.error("Tidak ada file yang dipilih");
      return;
    }

    const formData = new FormData();
    formData.append("foto", foto);

    try {
      const resp = await UploadFotoSiswa(id, formData);
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
      await UpdateSiswa(
        id,
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
        formData.emailOrangTua,
        formData.kelompok
      );
      toast.success("Siswa berhasil diupdate!");
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
    getOneData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 mx-auto mt-2">
      <Typography variant="h6" className="text-[#85193C] font-semibold mb-4">
        Detail Data Siswa
      </Typography>
      <div className="flex justify-center mb-4 flex-col items-center">
        {formData.foto ? (
          <img
            src={
              `${import.meta.env.VITE_API}/siswa/foto-siswa/` + formData.foto
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

        {/* Input file hidden */}
        <input
          type="file"
          id="foto-siswa"
          accept="image/*"
          style={{ display: "none" }}
          onChange={uploadImageSiswa} // ← handler dari kamu
        />

        {/* Label sebagai tombol upload */}
        <label htmlFor="foto-siswa">
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
            disabled
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
            value={
              formData.tanggalLahir
                ? new Date(formData.tanggalLahir).toISOString().split("T")[0]
                : ""
            }
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
          <Typography>Kelompok</Typography>
          <FormControl fullWidth margin="dense" size="small">
            <Select
              name="kelompok"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.kelompok}
              onChange={handleChange}
            >
              <MenuItem value="KELOMPOK1">Kelompok 1</MenuItem>
              <MenuItem value="KELOMPOK2">Kelompok 2</MenuItem>
              <MenuItem value="KELOMPOK3">Kelompok 3</MenuItem>
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
