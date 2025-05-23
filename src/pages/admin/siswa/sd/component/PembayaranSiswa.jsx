import React, { useState, useEffect } from "react";
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import {} from "react-router-dom";
import { formatUang } from "../../../../../component-global/format-uang";

const tagihanAwalMasuk = [
  {
    namaTagihan: "Uang pangkal",
    NoUrut: 1,
    JumlahBayar: 5000000,
    statusBayar: "Belum Lunas",
  },
  {
    namaTagihan: "Uang seragam",
    NoUrut: 2,
    JumlahBayar: 500000,
    statusBayar: "Lunas",
  },
  {
    namaTagihan: "Uang buku / LKS",
    NoUrut: 3,
    JumlahBayar: 400000,
    statusBayar: "Belum Lunas",
  },
  {
    namaTagihan: "Uang pengembangan teknologi",
    NoUrut: 4,
    JumlahBayar: 300000,
    statusBayar: "Lunas",
  },
  {
    namaTagihan: "Uang infaq dan shadeqah",
    NoUrut: 5,
    JumlahBayar: 200000,
    statusBayar: "Belum Lunas",
  },
];
const tagihanPerbulan = [
  {
    namaTagihan: "Uang SPP",
    NoUrut: 1,
    JumlahBayar: 5000000,
    statusBayar: "Lunas",
  },
  {
    namaTagihan: "Uang kegiatan",
    NoUrut: 2,
    JumlahBayar: 500000,
    statusBayar: "Lunas",
  },
  {
    namaTagihan: "Uang ekskul",
    NoUrut: 3,
    JumlahBayar: 400000,
    statusBayar: "Lunas",
  },
  {
    namaTagihan: "Uang catering",
    NoUrut: 4,
    JumlahBayar: 300000,
    statusBayar: "Lunas",
  },
  {
    namaTagihan: "Uang saku",
    NoUrut: 5,
    JumlahBayar: 200000,
    statusBayar: "Lunas",
  },
  {
    namaTagihan: "Uang ujian",
    NoUrut: 6,
    JumlahBayar: 200000,
    statusBayar: "Lunas",
  },
];
const primaryColor = "#85193C";
export default function AbsensiSiswaSd() {
  const [kelas, setKelas] = useState("1");
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
      <FormControl sx={{ minWidth: 200, my: 3 }} size="small">
        <InputLabel id="semester-select-label">Pilih Semester</InputLabel>
        <Select
          labelId="semester-select-label"
          value={kelas}
          label="Pilih Semester"
          onChange={(e) => setKelas(e.target.value)}
        >
          <MenuItem value={"1"}>Kelas 1</MenuItem>
          <MenuItem value={"2"}>Kelas 2</MenuItem>
          <MenuItem value={"3"}>Kelas 3</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="h5" fontWeight={600} mb={1} color={primaryColor}>
        Tagihan Di Awal Masuk
      </Typography>

      <Table
        component={Paper}
        sx={{ borderRadius: 2, overflow: "hidden", mb: 4 }}
      >
        <TableHead>
          <TableRow sx={{ backgroundColor: primaryColor }}>
            <TableCell sx={{ color: "white" }}>Nama Tagihan</TableCell>
            <TableCell sx={{ color: "white" }}>No Urut</TableCell>
            <TableCell sx={{ color: "white" }}>Jumlah Bayar</TableCell>
            <TableCell sx={{ color: "white" }}>Status Bayar</TableCell>
            <TableCell sx={{ color: "white" }}>Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tagihanAwalMasuk.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.namaTagihan}</TableCell>
              <TableCell>{item.NoUrut}</TableCell>
              <TableCell>{formatUang(item.JumlahBayar)} </TableCell>
              <TableCell>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.statusBayar === "Lunas"
                      ? "bg-green-100 text-green-700"
                      : item.statusBayar === "Belum Lunas"
                      ? "bg-red-100 text-red-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {item.statusBayar}
                </span>
              </TableCell>
              <TableCell>
                <IconButton aria-label="edit">
                  <Edit sx={{ color: "#85193C" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="h5" fontWeight={600} mb={1} color={primaryColor}>
        Tagihan Perbulan
      </Typography>

      <Table
        component={Paper}
        sx={{ borderRadius: 2, overflow: "hidden", mb: 4 }}
      >
        <TableHead>
          <TableRow sx={{ backgroundColor: primaryColor }}>
            <TableCell sx={{ color: "white" }}>Nama Tagihan</TableCell>
            <TableCell sx={{ color: "white" }}>No Urut</TableCell>
            <TableCell sx={{ color: "white" }}>Jumlah Bayar</TableCell>
            <TableCell sx={{ color: "white" }}>Status Bayar</TableCell>
            <TableCell sx={{ color: "white" }}>Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tagihanPerbulan.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.namaTagihan}</TableCell>
              <TableCell>{item.NoUrut}</TableCell>
              <TableCell>{formatUang(item.JumlahBayar)} </TableCell>
              <TableCell>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.statusBayar === "Lunas"
                      ? "bg-green-100 text-green-700"
                      : item.statusBayar === "Belum Lunas"
                      ? "bg-red-100 text-red-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {item.statusBayar}
                </span>
              </TableCell>
              <TableCell>
                <IconButton aria-label="edit">
                  <Edit sx={{ color: "#85193C" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
