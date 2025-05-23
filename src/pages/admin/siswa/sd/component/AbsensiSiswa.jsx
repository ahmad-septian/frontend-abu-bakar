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
} from "@mui/material";

import {} from "@mui/icons-material";
import {} from "react-router-dom";
import { FormatTanggal } from "@/component-global/format-tanggal";

const attendanceData = [
  { date: "2025-05-01", status: "Hadir", timeIn: "06:58", timeOut: "13:00" },
  { date: "2025-05-02", status: "Hadir", timeIn: "06:30", timeOut: "13:01" },
  { date: "2025-05-03", status: "Hadir", timeIn: "06:25", timeOut: "13:07" },
  { date: "2025-05-04", status: "Telat", timeIn: "07:01", timeOut: "13:43" },
  { date: "2025-05-05", status: "Sakit", timeIn: "-", timeOut: "-" },
  { date: "2025-05-06", status: "Hadir", timeIn: "06:25", timeOut: "13:07" },
  { date: "2025-05-07", status: "Hadir", timeIn: "06:25", timeOut: "13:07" },
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
      <Typography variant="h5" fontWeight={600} mb={1} color={primaryColor}>
        Absensi Siswa
      </Typography>

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

      <Typography variant="h6" fontWeight={600} mb={1} color={primaryColor}>
        Jumlah Absensi Kelas 1
      </Typography>
      <Table
        component={Paper}
        sx={{ borderRadius: 2, overflow: "hidden", mb: 4 }}
      >
        <TableHead>
          <TableRow sx={{ backgroundColor: primaryColor }}>
            <TableCell sx={{ color: "white" }}>Hadir</TableCell>
            <TableCell sx={{ color: "white" }}>Izin</TableCell>
            <TableCell sx={{ color: "white" }}>Sakit</TableCell>
            <TableCell sx={{ color: "white" }}>Tanpa Keterangan</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>120</TableCell>
            <TableCell>2</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table
        component={Paper}
        sx={{ borderRadius: 2, overflow: "hidden", mb: 4 }}
      >
        <TableHead>
          <TableRow sx={{ backgroundColor: primaryColor }}>
            <TableCell sx={{ color: "white" }}>Tanggal</TableCell>
            <TableCell sx={{ color: "white" }}>Waktu Masuk</TableCell>
            <TableCell sx={{ color: "white" }}>Waktu Pulang</TableCell>
            <TableCell sx={{ color: "white" }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {attendanceData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{FormatTanggal(item.date)}</TableCell>
              <TableCell>{item.timeIn}</TableCell>
              <TableCell>{item.timeOut}</TableCell>
              <TableCell>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.status === "Hadir"
                      ? "bg-green-100 text-green-700"
                      : item.status === "Izin"
                      ? "bg-yellow-100 text-yellow-700"
                      : item.status === "Sakit"
                      ? "bg-red-100 text-red-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {item.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
