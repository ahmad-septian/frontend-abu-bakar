import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
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
  TextField,
} from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import {} from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function ListSiswa(props) {
  const {
    siswaData,
    events,
    statusIcons,
    anchorEl,
    handleCloseMenu,
    handleStatusChange,
    handleOpenMenu,
    handleAbsensiSiswa,
    summartData,
    selectedDate,
    setSelectedDate,
    setSearch,
    search,
  } = props;
  return (
    <div>
      <Box my={2} px={2}>
        <Card elevation={4}>
          <CardContent>
            <div className="my-3">
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Kalender Kehadiran Siswa
              </Typography>
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
                height="auto"
              />
            </div>

            {/* Keterangan Ikon */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="space-between"
              mb={3}
            >
              {Object.entries(statusIcons).map(([key, { icon, label }]) => (
                <Stack
                  key={key}
                  direction="row"
                  alignItems="center"
                  spacing={1}
                >
                  {icon}
                  <Typography variant="body2">{`Siswa ${label}`}</Typography>
                </Stack>
              ))}
            </Stack>

            <div className="flex justify-between items-center gap-3">
              <TextField
                fullWidth
                label="Tanggal"
                value={selectedDate.toISOString().split("T")[0]}
                onChange={(e) => setSelectedDate(new Date(e.target.value))}
                margin="normal"
                type="date"
              />
              <TextField
                fullWidth
                label="Cari Siswa"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                margin="normal"
              />
            </div>
            {/* Tabel Siswa */}
            <TableContainer
              component={Paper}
              variant="outlined"
              sx={{ overflowX: "auto" }}
            >
              <Table>
                <TableBody>
                  {siswaData.map((siswa, index) => (
                    <TableRow key={siswa.id}>
                      <TableCell>
                        <p>{siswa.namaLengkap}</p>
                        <p>{siswa.nis}</p>
                      </TableCell>

                      <TableCell align="right">
                        <IconButton onClick={(e) => handleOpenMenu(e, index)}>
                          {siswa.status ? (
                            statusIcons[siswa.status]?.icon
                          ) : (
                            <MoreHoriz />
                          )}
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Ringkasan Status */}
            <Divider sx={{ my: 3 }} />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} textAlign={"center"}>
                <Typography fontWeight="bold">{summartData.MASUK}</Typography>
                <Typography variant="body2">Siswa Masuk</Typography>
              </Grid>
              <Grid item xs={12} sm={6} textAlign={"center"}>
                <Typography fontWeight="bold">{summartData.ALFA}</Typography>
                <Typography variant="body2">Siswa Tidak Masuk</Typography>
              </Grid>
              <Grid item xs={12} sm={6} textAlign={"center"}>
                <Typography fontWeight="bold">{summartData.IZIN}</Typography>
                <Typography variant="body2">Siswa Izin</Typography>
              </Grid>
              <Grid item xs={12} sm={6} textAlign={"center"}>
                <Typography fontWeight="bold">{summartData.SAKIT}</Typography>
                <Typography variant="body2">Siswa Sakit</Typography>
              </Grid>
            </Grid>

            {/* Tombol Mulai */}
            <Box mt={4}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleAbsensiSiswa}
                sx={{
                  backgroundColor: "#85193C",
                  py: { xs: 1.2, sm: 1.5 },
                  fontWeight: "bold",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
              >
                SELESAI
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Popup Menu Status */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {Object.entries(statusIcons).map(([status, { icon, label }]) => (
          <MenuItem key={status} onClick={() => handleStatusChange(status)}>
            <Box display="flex" alignItems="center" gap={1}>
              {icon}
              <Typography>{label}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
