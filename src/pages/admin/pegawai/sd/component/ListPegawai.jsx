import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  TextField,
} from "@mui/material";
import {} from "@mui/icons-material";
import { FormatTanggal } from "@/component-global/format-tanggal";
import PaginationComponent from "@/component-global/pagination";
import {} from "react-router-dom";

export default function ListPegawai(props) {
  const {
    handleClickTambah,
    handleClickDetail,
    data,
    handleChangePage,
    handleChangeRowsPerPage,
    totalItems,
    rowsPerPage,
    page,
    search,
  } = props;

  const getChipColorByStatus = (statusPegawai) => {
    switch (statusPegawai) {
      case "AKTIF":
        return "success";
      case "RESIGN":
        return "warning";
      case "TIDAK_AKTIF":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <div className=" grid grid-cols-1 overflow-x-auto mt-5">
      <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#85193C", color: "#fff" }}
          size="medium"
          onClick={handleClickTambah}
        >
          Tambah pegawai
        </Button>

        <TextField
          size="small"
          placeholder="Cari pegawai..."
          variant="outlined"
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            input: { padding: "8px 12px" },
            width: { xs: "100%", sm: "250px" },
          }}
        />
      </div>
      <TableContainer component={Paper} sx={{ border: "1px solid #333" }}>
        <Table
          sx={{ minWidth: 650, borderRadius: "10px" }}
          aria-label="pegawai table"
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "#85193C" }}>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                NIK
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Nama Lengkap
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Email
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Nomer Telepon
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Role Pegawai
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Status Pegawai
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((pegawai, index) => (
              <TableRow
                key={pegawai.id}
                sx={{
                  "&:hover": {
                    backgroundColor: "#FFFBF4",
                    cursor: "pointer",
                  },
                }}
                onClick={() => handleClickDetail(pegawai.id)}
              >
                <TableCell align="center">{pegawai.nik}</TableCell>
                <TableCell align="center">{pegawai.namaLengkap}</TableCell>
                <TableCell align="center">{pegawai.email}</TableCell>
                <TableCell align="center">{pegawai.noHp}</TableCell>
                <TableCell align="center">{pegawai.role}</TableCell>
                <TableCell align="center">
                  <Chip
                    label={pegawai.statusPegawai}
                    color={getChipColorByStatus(pegawai.statusPegawai)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <PaginationComponent
          component="div"
          count={totalItems}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
}
