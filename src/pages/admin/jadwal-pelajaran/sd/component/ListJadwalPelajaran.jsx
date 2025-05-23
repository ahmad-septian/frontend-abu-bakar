import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import {} from "react-router-dom";

const dataJadwalPelajaran = [
  {
    id: 1,
    kelas: "1A",
    mataPelajaran: "Bahasa Indonesia",
    pengajar: "Bapak Balmond",
    hari: "Senin",
    jamMulai: "08.00",
    jamSelesai: "10.00",
    isActive: true,
  },
  {
    id: 2,
    kelas: "1A",
    mataPelajaran: "Matematika",
    pengajar: "Ibu Floryn",
    hari: "Senin",
    jamMulai: "10.00",
    jamSelesai: "12.00",
    isActive: true,
  },
  {
    id: 3,
    kelas: "1A",
    mataPelajaran: "IPS",
    pengajar: "Ibu Change",
    hari: "Senin",
    jamMulai: "13.00",
    jamSelesai: "15.00",
    isActive: true,
  },
];

export default function ListJadwalPelajaranSd(props) {
  const {
    ClickOpenTambahJadwalPelajaran,
    pilihKelas,
    setPilihKelas,
    ClickOpenEditJadwalPelajaran,
  } = props;

  return (
    <div className=" grid grid-cols-1 overflow-x-auto mt-5">
      <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#85193C", color: "#fff" }}
          size="medium"
          onClick={ClickOpenTambahJadwalPelajaran}
        >
          Tambah Japel
        </Button>

        <FormControl sx={{ minWidth: 200, my: 3 }} size="small">
          <InputLabel id="semester-select-label">Pilih Kelas</InputLabel>
          <Select
            labelId="semester-select-label"
            value={pilihKelas}
            label="Pilih Kelas"
            onChange={(e) => setPilihKelas(e.target.value)}
          >
            <MenuItem value={"1"}>Kelas 1</MenuItem>
            <MenuItem value={"2"}>Kelas 2</MenuItem>
            <MenuItem value={"3"}>Kelas 3</MenuItem>
          </Select>
        </FormControl>
      </div>
      <TableContainer component={Paper} sx={{ border: "1px solid #333" }}>
        <Table
          sx={{ minWidth: 650, borderRadius: "10px" }}
          aria-label="siswa table"
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "#85193C" }}>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Nama Kelas
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Mata Pelajaran
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Nama Pengajar
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Hari
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Jam Mulai
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Jam Selesai
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Status
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Aksi
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataJadwalPelajaran.map((mapel, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:hover": {
                    backgroundColor: "#FFFBF4",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell align="center">{mapel.kelas}</TableCell>
                <TableCell align="center">{mapel.mataPelajaran}</TableCell>
                <TableCell align="center">{mapel.pengajar}</TableCell>
                <TableCell align="center">{mapel.hari}</TableCell>
                <TableCell align="center">{mapel.jamMulai}</TableCell>
                <TableCell align="center">{mapel.jamSelesai}</TableCell>
                <TableCell align="center">
                  <Chip
                    label={mapel.isActive ? "Aktif" : "Nonaktif"}
                    color={mapel.isActive ? "primary" : "error"}
                    variant="contained"
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={ClickOpenEditJadwalPelajaran}
                    sx={{ color: "#85193C" }}
                  >
                    <Edit />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
