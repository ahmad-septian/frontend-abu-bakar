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
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import {} from "react-router-dom";
import { FormatTanggal } from "../../../../../component-global/format-tanggal";
import PaginationComponent from "../../../../../component-global/pagination";

export default function ListTahunAjaran(props) {
  const {
    ClickOpenTambahTahunAjaran,
    ClickOpenEditTahunAjaran,
    handleChangePage,
    handleChangeRowsPerPage,
    rowsPerPage,
    page,
    data,
    totalItems,
  } = props;

  return (
    <div className=" grid grid-cols-1 overflow-x-auto mt-5">
      <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#85193C", color: "#fff" }}
          size="medium"
          onClick={ClickOpenTambahTahunAjaran}
        >
          Tambah Tahun Ajaran
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
                Nama Tahun Ajaran
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Kode Tahun Ajaran
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Semester
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Tanggal Mulai
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Tanggal Selesai
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
            {data.map((tajar, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:hover": {
                    backgroundColor: "#FFFBF4",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell align="center">{tajar.tahunAjaran}</TableCell>
                <TableCell align="center">{tajar.code}</TableCell>
                <TableCell align="center">{tajar.semester}</TableCell>
                <TableCell align="center">
                  {FormatTanggal(tajar.tanggalMulai)}{" "}
                </TableCell>
                <TableCell align="center">
                  {FormatTanggal(tajar.tanggalSelesai)}
                </TableCell>
                <TableCell align="center">
                  <Chip
                    label={tajar.aktif ? "Aktif" : "Nonaktif"}
                    color={tajar.aktif ? "primary" : "error"}
                    variant="contained"
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={() => {
                      ClickOpenEditTahunAjaran(tajar.id);
                    }}
                    sx={{ color: "#85193C" }}
                  >
                    <Edit />
                  </IconButton>
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
