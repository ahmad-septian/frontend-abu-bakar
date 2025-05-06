import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const transaksi = [
  {
    id: 1,
    kodepembayaran: "TRX001",
    jenispembayaran: "SPP Bln Maret",
    tanggal: "11/03/25",
    jumlah: 400000,
    status: "Lunas",
  },
  {
    id: 2,
    kodepembayaran: "TRX002",
    jenispembayaran: "SPP Bln April",
    tanggal: "12/03/25",
    jumlah: 400000,
    status: "Lunas",
  },
];

const DetailTransaksi = () => {
  const navigate = useNavigate();

  const handleClickDownload = () => {
    navigate(`/admin/transaksi/detail-transaksi-siswa`);
  };

  return (
    <div className="grid grid-cols-1 overflow-x-auto mt-5">
      <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#85193C", color: "#fff" }}
          size="medium"
          onClick={handleClickDownload}
        >
          Download Transaksi
        </Button>

        <TextField
          size="small"
          placeholder="Cari Siswa..."
          variant="outlined"
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            input: { padding: "8px 12px" },
            width: { xs: "100%", sm: "250px" },
          }}
          // onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <TableContainer component={Paper} sx={{ border: "1px solid #333" }}>
        <Table sx={{ minWidth: 650, borderRadius: "10px" }} aria-label="siswa table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f3e6ea" }}>
              <TableCell sx={{ fontWeight: "bold", color: "#85193C" }}>
                Kode Pembayaran
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#85193C" }}>
                Jenis Pembayaran
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#85193C" }}>
                Tanggal
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#85193C" }}>
                Jumlah
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#85193C" }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transaksi.map((trx) => (
              <TableRow
                key={trx.id}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#fdf6f8",
                  },
                }}
              >
                <TableCell>{trx.kodepembayaran}</TableCell>
                <TableCell>{trx.jenispembayaran}</TableCell>
                <TableCell>{trx.tanggal}</TableCell>
                <TableCell>
                  {trx.jumlah.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </TableCell>
                <TableCell align="center">
                  <Chip
                    label={trx.status}
                    color={trx.status === "Lunas" ? "success" : "warning"}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DetailTransaksi;
