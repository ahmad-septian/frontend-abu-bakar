import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  Grid,
  Stack,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const statusIcons = {
  hadir: { icon: <CheckCircleIcon sx={{ color: "green" }} />, label: "Hadir" },
  absen: { icon: <CancelIcon sx={{ color: "red" }} />, label: "Absen" },
  izin: { icon: <DescriptionIcon sx={{ color: "blue" }} />, label: "Izin" },
  sakit: { icon: <LocalHospitalIcon sx={{ color: "teal" }} />, label: "Sakit" },
};

const AbsenSiswaGuru = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [siswaData, setSiswaData] = useState([
    { no: 1, nama: "Budi Anggara", status: null },
    { no: 2, nama: "Puspita Ningsih", status: "hadir" },
    { no: 3, nama: "Bayu Aji Restu", status: null },
    { no: 4, nama: "Pratiwi Ajeng", status: null },
    { no: 5, nama: "Anita Mayangsari", status: "absen" },
    { no: 6, nama: "Arif Wijaya", status: "izin" },
    { no: 7, nama: "Adi Nugroho", status: null },
    { no: 8, nama: "Arif Wijaya", status: "hadir" },
    { no: 9, nama: "Kurnia Fatmawati", status: "sakit" },
    { no: 10, nama: "Bayu Aji Restu", status: null },
  ]);

  const handleOpenMenu = (event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedIndex(null);
  };

  const handleStatusChange = (status) => {
    if (selectedIndex !== null) {
      setSiswaData((prevData) =>
        prevData.map((siswa, idx) =>
          idx === selectedIndex ? { ...siswa, status } : siswa
        )
      );
    }
    handleCloseMenu();
  };

  const countStatus = (status) =>
    siswaData.filter((siswa) => siswa.status === status).length;

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Card elevation={4}>
          <CardContent>
            {/* Header */}
            <Grid container spacing={5} mb={2}>
              <Grid item xs={4} pl={4}>
                <Typography variant="subtitle2">Nama Kelas</Typography>
                <Typography variant="subtitle1" fontWeight="bold">Kelas 1</Typography>
              </Grid>
              
              <Grid item xs={4}>
                <Typography variant="subtitle2">Guru Pengajar</Typography>
                <Typography variant="subtitle1" fontWeight="bold">Bambang Maulana SPd</Typography>
              </Grid>
            </Grid>

            {/* Keterangan Ikon */}
            <Stack direction="row" spacing={2} justifyContent="space-between" mb={2}>
              {Object.entries(statusIcons).map(([key, { icon, label }]) => (
                <Stack key={key} direction="row" alignItems="center" spacing={1}>
                  {icon}
                  <Typography variant="body2">{`Siswa ${label}`}</Typography>
                </Stack>
              ))}
            </Stack>

            {/* Tabel Siswa */}
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableBody>
                  {siswaData.map((siswa, index) => (
                    <TableRow key={siswa.no}>
                      <TableCell>{siswa.no}</TableCell>
                      <TableCell>{siswa.nama}</TableCell>
                      <TableCell align="right">
                        <IconButton onClick={(e) => handleOpenMenu(e, index)}>
                          {siswa.status
                            ? statusIcons[siswa.status].icon
                            : <MoreHorizIcon />}
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Jumlah dan Selanjutnya */}
            <Box mt={2} display="flex" justifyContent="space-between">
              <Typography variant="body2">{siswaData.length} dari 30</Typography>
              <Button size="small">Selanjutnya</Button>
            </Box>

            {/* Ringkasan Status */}
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={2} textAlign="center">
              {["hadir", "absen", "izin", "sakit"].map((stat) => (
                <Grid item xs={3} key={stat}>
                  <Typography fontWeight="bold">{countStatus(stat)}</Typography>
                  <Typography variant="body2">Siswa {statusIcons[stat].label}</Typography>
                </Grid>
              ))}
            </Grid>

            {/* Tombol Mulai */}
            <Box mt={3}>
              <Button fullWidth variant="contained" sx={{ py: 1.5, fontWeight: "bold" }}>
                SELESAI
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Popup Menu Status */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
        {Object.entries(statusIcons).map(([status, { icon, label }]) => (
          <MenuItem key={status} onClick={() => handleStatusChange(status)}>
            <Box display="flex" alignItems="center" gap={1}>
              {icon}
              <Typography>{label}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Container>
  );
};

export default AbsenSiswaGuru;

