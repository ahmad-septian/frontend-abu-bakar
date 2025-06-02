import React, { useState, useEffect } from "react";
import {
  DialogTitle,
  DialogContent,
  IconButton,
  DialogActions,
  Button,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import {} from "react-router-dom";
import {
  AnimasiDialog,
  BootstrapDialog,
} from "@/component-global/component-dialog";

export default function TambahJadwalPelajaranSd(props) {
  const {
    openTambahJadwalPelajaran,
    ClickCloseTambahJadwalPelajaran,
    formDataJadwalPelajaran,
    handleChange,
    handleSubmitCreate,
    dataMapel,
    dataKelas,
    dataGuru,
  } = props;
  return (
    <BootstrapDialog
      sx={{ backdropFilter: "blur(8px)" }}
      aria-labelledby="customized-dialog-title"
      open={openTambahJadwalPelajaran}
      slots={{
        transition: AnimasiDialog,
      }}
      fullWidth={true}
      maxWidth="md"
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Tambah Jadwal Pelajaran SD
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={ClickCloseTambahJadwalPelajaran}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <Close />
      </IconButton>
      <DialogContent dividers>
        <div className="mb-3">
          <Typography>Nama Kelas</Typography>
          <FormControl fullWidth margin="dense" size="small">
            <Select
              name="kelas"
              value={formDataJadwalPelajaran.kelas}
              onChange={handleChange}
            >
              {dataKelas.length > 0 ? (
                dataKelas.map((kelas) => (
                  <MenuItem key={kelas.id} value={kelas.id}>
                    {kelas.namaKelas}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>Loading...</MenuItem>
              )}
            </Select>
          </FormControl>
        </div>

        <div className="mb-3">
          <Typography>Mata Pelajaran</Typography>
          <FormControl fullWidth margin="dense" size="small">
            <Select
              name="mataPelajaran"
              value={formDataJadwalPelajaran.mataPelajaran}
              onChange={handleChange}
            >
              {dataMapel.length > 0 ? (
                dataMapel.map((mapel) => (
                  <MenuItem key={mapel.id} value={mapel.id}>
                    {mapel.namaMataPelajaran}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>Loading...</MenuItem>
              )}
            </Select>
          </FormControl>
        </div>

        <div className="mb-3">
          <Typography>Pengajar</Typography>
          <FormControl fullWidth margin="dense" size="small">
            <Select
              name="pengajar"
              value={formDataJadwalPelajaran.pengajar}
              onChange={handleChange}
            >
              {dataGuru.length > 0 ? (
                dataGuru.map((guru) => (
                  <MenuItem key={guru.id} value={guru.id}>
                    {guru.namaLengkap}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>Loading...</MenuItem>
              )}
            </Select>
          </FormControl>
        </div>

        <div className="mb-3">
          <Typography>Hari Jadwal</Typography>
          <FormControl fullWidth margin="dense" size="small">
            <Select
              name="hari"
              value={formDataJadwalPelajaran.hari}
              onChange={handleChange}
            >
              <MenuItem value="Senin">Senin</MenuItem>
              <MenuItem value="Selasa">Selasa</MenuItem>
              <MenuItem value="Rabu">Rabu</MenuItem>
              <MenuItem value="Kamis">Kamis</MenuItem>
              <MenuItem value="Jumat">Jumat</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="mb-3">
          <Typography>Jam Mulai</Typography>
          <TextField
            name="jamMulai"
            fullWidth
            size="small"
            margin="dense"
            type="time"
            value={formDataJadwalPelajaran.jamMulai}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <Typography>Jam Selesai</Typography>
          <TextField
            name="jamSelesai"
            fullWidth
            size="small"
            margin="dense"
            type="time"
            value={formDataJadwalPelajaran.jamSelesai}
            onChange={handleChange}
          />
        </div>

        <FormControlLabel
          control={
            <Checkbox
              name="isActive"
              checked={formDataJadwalPelajaran.isActive}
              onChange={handleChange}
            />
          }
          label="Jadwal Pelajaran Aktif?"
        />
      </DialogContent>
      <DialogActions dividers>
        <Button
          sx={{
            backgroundColor: "#85193C",
          }}
          variant="contained"
          onClick={handleSubmitCreate}
        >
          Save changes
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
