import React from "react";
import { Typography } from "@mui/material";
import DaftarKelas from "./daftar-kelas";



export default function Transaksi() {
  return (
    <div>
      <Typography sx={{ fontSize: "1.5rem" }}>Pembayaran Siswa</Typography>
      <DaftarKelas />
    </div>
  );
}
