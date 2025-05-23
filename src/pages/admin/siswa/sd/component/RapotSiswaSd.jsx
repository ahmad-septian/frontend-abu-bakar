import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@mui/material";
import { PictureAsPdf } from "@mui/icons-material";
import {} from "react-router-dom";

export default function RapotSiswaSd() {
  const primaryColor = "#85193C";
  const [semester, setSemester] = useState("ganjil");

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 3,
        p: 3,
        p: 4,
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" fontWeight={600} color={primaryColor}>
          E-Rapot Siswa
        </Typography>
        <Button
          variant="contained"
          startIcon={<PictureAsPdf />}
          sx={{
            backgroundColor: primaryColor,
            "&:hover": { backgroundColor: "#6d142f" },
          }}
        >
          Download PDF
        </Button>
      </Box>

      <FormControl sx={{ minWidth: 200, my: 3 }} size="small">
        <InputLabel id="semester-select-label">Pilih Semester</InputLabel>
        <Select
          labelId="semester-select-label"
          value={semester}
          label="Pilih Semester"
          onChange={(e) => setSemester(e.target.value)}
        >
          <MenuItem value={"ganjil"}>Semester Ganjil</MenuItem>
          <MenuItem value={"genap"}>Semester Genap</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="h6" fontWeight={600} mb={1} color={primaryColor}>
        Nilai Akademik
      </Typography>
      <Table
        component={Paper}
        sx={{ borderRadius: 2, overflow: "hidden", mb: 4 }}
      >
        <TableHead>
          <TableRow sx={{ backgroundColor: primaryColor }}>
            <TableCell sx={{ color: "white" }}>Mapel</TableCell>
            <TableCell sx={{ color: "white" }}>Nilai Tugas</TableCell>
            <TableCell sx={{ color: "white" }}>UH</TableCell>
            <TableCell sx={{ color: "white" }}>UTS</TableCell>
            <TableCell sx={{ color: "white" }}>UAS</TableCell>
            <TableCell sx={{ color: "white" }}>Keterangan</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Matematika</TableCell>
            <TableCell>85</TableCell>
            <TableCell>80</TableCell>
            <TableCell>78</TableCell>
            <TableCell>88</TableCell>
            <TableCell>Baik</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>PAI</TableCell>
            <TableCell>90</TableCell>
            <TableCell>85</TableCell>
            <TableCell>82</TableCell>
            <TableCell>87</TableCell>
            <TableCell>Sangat Baik</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Typography variant="h6" fontWeight={600} mb={1} color={primaryColor}>
        Hafalan Qur'an
      </Typography>
      <Table
        component={Paper}
        sx={{ borderRadius: 2, overflow: "hidden", mb: 4 }}
      >
        <TableHead>
          <TableRow sx={{ backgroundColor: primaryColor }}>
            <TableCell sx={{ color: "white" }}>Surat</TableCell>
            <TableCell sx={{ color: "white" }}>Juz</TableCell>
            <TableCell sx={{ color: "white" }}>Keterangan</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Al-Fatihah</TableCell>
            <TableCell>Juz 1</TableCell>
            <TableCell>Hafal dengan baik</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Al-Baqarah ayat 1-5</TableCell>
            <TableCell>Juz 1</TableCell>
            <TableCell>Perlu pengulangan</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Typography variant="h6" fontWeight={600} mb={1} color={primaryColor}>
        Projek Penguatan Profil Pelajar Pancasila
      </Typography>
      <Table
        component={Paper}
        sx={{ borderRadius: 2, overflow: "hidden", mb: 4 }}
      >
        <TableHead>
          <TableRow sx={{ backgroundColor: primaryColor }}>
            <TableCell sx={{ color: "white" }}>Tema</TableCell>
            <TableCell sx={{ color: "white" }}>Judul</TableCell>
            <TableCell sx={{ color: "white" }}>Deskripsi</TableCell>
            <TableCell sx={{ color: "white" }}>Capaian</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Gaya Hidup Berkelanjutan</TableCell>
            <TableCell>Projek Pengelolaan Sampah</TableCell>
            <TableCell>
              Siswa membuat karya daur ulang dari sampah plastik
            </TableCell>
            <TableCell>Berkembang Sesuai Harapan</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Typography variant="h6" fontWeight={600} mb={1} color={primaryColor}>
        Kegiatan Ekstrakurikuler
      </Typography>
      <Table
        component={Paper}
        sx={{ borderRadius: 2, overflow: "hidden", mb: 4 }}
      >
        <TableHead>
          <TableRow sx={{ backgroundColor: primaryColor }}>
            <TableCell sx={{ color: "white" }}>Nama Kegiatan</TableCell>
            <TableCell sx={{ color: "white" }}>Deskripsi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Pramuka</TableCell>
            <TableCell>
              Aktif mengikuti kegiatan dan menunjukkan sikap kepemimpinan.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Typography variant="h6" fontWeight={600} mb={1} color={primaryColor}>
        Presensi
      </Typography>
      <Table
        component={Paper}
        sx={{ borderRadius: 2, overflow: "hidden", mb: 4 }}
      >
        <TableHead>
          <TableRow sx={{ backgroundColor: primaryColor }}>
            <TableCell sx={{ color: "white" }}>Hadir</TableCell>
            <TableCell sx={{ color: "white" }}>Izin</TableCell>
            <TableCell sx={{ color: "white" }}>Tanpa Keterangan</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>120</TableCell>
            <TableCell>3</TableCell>
            <TableCell>1</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Typography variant="h6" fontWeight={600} mb={1} color={primaryColor}>
        Catatan Wali Kelas
      </Typography>
      <Table component={Paper} sx={{ borderRadius: 2, overflow: "hidden" }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: primaryColor }}>
            <TableCell sx={{ color: "white" }}>Tanggal</TableCell>
            <TableCell sx={{ color: "white" }}>Catatan</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>10 Januari 2025</TableCell>
            <TableCell>
              Siswa sangat aktif dan menunjukkan peningkatan signifikan.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5 Maret 2025</TableCell>
            <TableCell>
              Perlu bimbingan tambahan untuk mata pelajaran IPA.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}
