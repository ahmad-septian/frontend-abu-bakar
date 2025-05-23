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
import { formatUang } from "../../../../../component-global/format-uang";

const dataPembayaran = [
  {
    id: 1,
    namaPembayaran: "UANG PANGKAL",
    hargaPembayaran: 2000000,
    isInstallment: true,
    PaymentModel: "DIAWAL",
    isActive: true,
  },
  {
    id: 2,
    namaPembayaran: "UANG SERAGAM",
    hargaPembayaran: 500000,
    isInstallment: true,
    PaymentModel: "DIAWAL",
    isActive: true,
  },
  {
    id: 3,
    namaPembayaran: "UANG SPP",
    hargaPembayaran: 350000,
    isInstallment: false,
    PaymentModel: "BULANAN",
    isActive: true,
  },
  {
    id: 4,
    namaPembayaran: "UANG UJIAN",
    hargaPembayaran: 400000,
    isInstallment: false,
    PaymentModel: "BULANAN",
    isActive: true,
  },
];

export default function ListPembayaranSd(props) {
  const { ClickOpenTambahPembayaran, ClickOpenEditPembayaran } = props;

  return (
    <div className=" grid grid-cols-1 overflow-x-auto mt-5">
      <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#85193C", color: "#fff" }}
          size="medium"
          onClick={ClickOpenTambahPembayaran}
        >
          Tambah Pembayaran
        </Button>
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
                Nama Pembayaran
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Harga Pembayaran
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Bisa Diangsur?
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Jenis Pembayaran
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
            {dataPembayaran.map((pembayaran, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:hover": {
                    backgroundColor: "#FFFBF4",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell align="center">
                  {pembayaran.namaPembayaran}
                </TableCell>
                <TableCell align="center">
                  {formatUang(pembayaran.hargaPembayaran)}
                </TableCell>
                <TableCell align="center">
                  {pembayaran.isInstallment ? "Ya" : "Tidak"}
                </TableCell>
                <TableCell align="center">
                  <Chip
                    label={pembayaran.PaymentModel}
                    color={
                      pembayaran.PaymentModel === "DIAWAL"
                        ? "primary"
                        : "success"
                    }
                    variant="contained"
                    size="small"
                  />
                </TableCell>

                <TableCell align="center">
                  <Chip
                    label={pembayaran.isActive ? "Aktif" : "Nonaktif"}
                    color={pembayaran.isActive ? "primary" : "error"}
                    variant="contained"
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={ClickOpenEditPembayaran}
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
