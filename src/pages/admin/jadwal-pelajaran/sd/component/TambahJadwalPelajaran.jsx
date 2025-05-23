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
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formDataJadwalPelajaran.kelas}
              onChange={handleChange}
            >
              <MenuItem value="1A">1A</MenuItem>
              <MenuItem value="1B">1B</MenuItem>
              <MenuItem value="2A">2A</MenuItem>
              <MenuItem value="2B">2B</MenuItem>
              <MenuItem value="3A">3A</MenuItem>
              <MenuItem value="3B">3B</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="mb-3">
          <Typography>Mata Pelajaran</Typography>
          <FormControl fullWidth margin="dense" size="small">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formDataJadwalPelajaran.mataPelajaran}
              onChange={handleChange}
            >
              <MenuItem value="BI">Bahasa Indonesia</MenuItem>
              <MenuItem value="MAT">Matematika</MenuItem>
              <MenuItem value="IPS">IPS</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="mb-3">
          <Typography>Pengajar</Typography>
          <FormControl fullWidth margin="dense" size="small">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formDataJadwalPelajaran.pengajar}
              onChange={handleChange}
            >
              <MenuItem value="01-GR">Ibu Floryn</MenuItem>
              <MenuItem value="02-GR">Ibu Change</MenuItem>
              <MenuItem value="03-GR">Bapak Balmond</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="mb-3">
          <Typography>Hari Jadwal</Typography>
          <FormControl fullWidth margin="dense" size="small">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
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
          onClick={ClickCloseTambahJadwalPelajaran}
        >
          Save changes
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
