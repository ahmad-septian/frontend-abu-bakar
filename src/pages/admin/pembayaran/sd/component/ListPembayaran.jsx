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
import { formatUang } from "../../../../../component-global/format-uang";
import PaginationComponent from "../../../../../component-global/pagination";

export default function ListPembayaranSd(props) {
  const {
    ClickOpenTambahPembayaran,
    ClickOpenEditPembayaran,
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
            {data.map((pembayaran, index) => (
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
                    label={pembayaran.modelPembayaran}
                    color={
                      pembayaran.modelPembayaran === "DIAWAL"
                        ? "primary"
                        : "success"
                    }
                    variant="contained"
                    size="small"
                  />
                </TableCell>

                <TableCell align="center">
                  <Chip
                    label={pembayaran.aktif ? "Aktif" : "Nonaktif"}
                    color={pembayaran.aktif ? "primary" : "error"}
                    variant="contained"
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={() => {
                      ClickOpenEditPembayaran(pembayaran.id);
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
