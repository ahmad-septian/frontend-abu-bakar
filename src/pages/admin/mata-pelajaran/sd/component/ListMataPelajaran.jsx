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

const dataMataPelajaran = [
  {
    id: 1,
    namaMataPelajaran: "Bahasa Indonesia",
    kodePelajaran: "BI",
    deskripsi: "Bahasa Indonesia",
    isActive: true,
    tipe: "WAJIB",
  },
  {
    id: 2,
    namaMataPelajaran: "Bahasa Melayu",
    kodePelajaran: "BM",
    deskripsi: "Bahasa Melayu",
    isActive: true,
    tipe: "WAJIB",
  },
  {
    id: 3,
    namaMataPelajaran: "English",
    kodePelajaran: "EN",
    deskripsi: "English",
    isActive: true,
    tipe: "WAJIB",
  },
  {
    id: 4,
    namaMataPelajaran: "Mathematics",
    kodePelajaran: "MA",
    deskripsi: "Mathematics",
    isActive: true,
    tipe: "WAJIB",
  },
  {
    id: 5,
    namaMataPelajaran: "PRAMUKA",
    kodePelajaran: "PRM",
    deskripsi: "Pramuka",
    isActive: true,
    tipe: "ESKUL",
  },
];

export default function ListMataPelajaranSd(props) {
  const {
    ClickOpenTambahMataPelajaran,
    pilihKelas,
    setPilihKelas,
    ClickOpenEditMataPelajaran,
  } = props;

  return (
    <div className=" grid grid-cols-1 overflow-x-auto mt-5">
      <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#85193C", color: "#fff" }}
          size="medium"
          onClick={ClickOpenTambahMataPelajaran}
        >
          Tambah Mapel
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
                Nama Mata Pelajaran
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Kode Pelajaran
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Tipe Pelajaran
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
            {dataMataPelajaran.map((mapel, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:hover": {
                    backgroundColor: "#FFFBF4",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell align="center">{mapel.namaMataPelajaran}</TableCell>
                <TableCell align="center">{mapel.kodePelajaran}</TableCell>
                <TableCell align="center">{mapel.tipe}</TableCell>
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
                    onClick={ClickOpenEditMataPelajaran}
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
