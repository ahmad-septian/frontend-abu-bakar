import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Button,
    Chip,
    TextField,
  } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  
  const Students = [
    {
      id: 1,
      nama: "Muhammad Fajar",
      nis: "2023001",
      kelas: "kelas 1",
      gender: "Laki-laki",
    },
    {
      id: 2,
      nama: "Aisyah Zahra",
      nis: "2023002",
      kelas: "Kelas 1",
      gender: "Perempuan",
    },
    {
      id: 3,
      nama: "Ahmad Yusuf",
      nis: "2023003",
      kelas: "Kelas 1",
      gender: "Laki-laki",
    },
    {
      id: 4,
      nama: "Fatimah Nuraini",
      nis: "2023004",
      kelas: "Kelas 1",
      gender: "Perempuan",
    },
  ];
  
  const DetailTransaksiKelas = () => {
    const navigate = useNavigate();
  
    const handleClickDetail = () => {
      navigate(`/admin/transaksi/detail-transaksi`);
    };
    return (
      <div className=" grid grid-cols-1 overflow-x-auto mt-5">
        <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        
  
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
            //   onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <TableContainer component={Paper} sx={{ border: "1px solid #333" }}>
          <Table
            sx={{ minWidth: 650, borderRadius: "10px" }}
            aria-label="table siswa"
          >
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f3e6ea" }}>
                <TableCell sx={{ fontWeight: "bold", color: "#85193C" }}>
                  Nama
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#85193C" }}>
                  NIS
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#85193C" }}>
                  Kelas
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#85193C" }}>
                  Jenis Kelamin
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", color: "#85193C" }}
                >
                
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Students.map((siswa) => (
                <TableRow
                  key={siswa.id}
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#fdf6f8",
                    },
                  }}
                >
                  <TableCell onClick={handleClickDetail}>
                    {siswa.nama}
                  </TableCell>
                  <TableCell onClick={handleClickDetail}>{siswa.nis}</TableCell>
                  <TableCell>{siswa.kelas}</TableCell>
                  <TableCell>{siswa.gender}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  
  export default DetailTransaksiKelas;
  