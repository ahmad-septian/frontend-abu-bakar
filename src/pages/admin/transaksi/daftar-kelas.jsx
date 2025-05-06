import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const dummyKelas = [
  { no: 1, kelas: "Kelas 1" },
  { no: 2, kelas: "Kelas 2" },
  { no: 3, kelas: "Kelas 3" },
  { no: 4, kelas: "Kelas 4" },
  { no: 5, kelas: "Kelas 5" },
  { no: 6, kelas: "Kelas 6" },
];

const DaftarTransaksiKelas = () => {
  const navigate = useNavigate();

  const handleClickDetail = () => {
    navigate(`/admin/transaksi/detail-transaksi-kelas/`); // kirim ID kelas ke URL
  };

  return (
    <div className="grid grid-cols-1 overflow-x-auto mt-5">
      <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3">
        <TextField
          size="small"
          placeholder="Cari Kelas..."
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
        <Table sx={{ minWidth: 650, borderRadius: "10px" }} aria-label="table kelas">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f3e6ea" }}>
              <TableCell sx={{ fontWeight: "bold", textAlign: "center", color: "#85193C" }}>No</TableCell>
              <TableCell sx={{ fontWeight: "bold", textAlign: "center", color: "#85193C" }}>Kelas</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyKelas.map((kelas) => (
              <TableRow
                key={kelas.no}
                hover
                sx={{ cursor: "pointer" }}
                onClick={() => handleClickDetail(kelas.no)} // kirim nomor kelas
              >
                <TableCell align="center">{kelas.no}</TableCell>
                <TableCell align="center">{kelas.kelas}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DaftarTransaksiKelas;
