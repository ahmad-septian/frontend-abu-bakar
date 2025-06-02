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

export default function TambahKelasSd(props) {
  const {
    openTambahKelas,
    ClickCloseTambahKelas,
    formDataKelas,
    handleChange,
    dataGuru,
    handleSubmitCreate,
  } = props;
  return (
    <BootstrapDialog
      sx={{ backdropFilter: "blur(8px)" }}
      aria-labelledby="customized-dialog-title"
      open={openTambahKelas}
      slots={{
        transition: AnimasiDialog,
      }}
      fullWidth={true}
      maxWidth="md"
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Tambah Kelas SD
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={ClickCloseTambahKelas}
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
          <TextField
            name="namaKelas"
            fullWidth
            size="small"
            margin="dense"
            value={formDataKelas.namaKelas}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <Typography>Tingkat Kelas</Typography>
          <TextField
            name="tingkat"
            fullWidth
            size="small"
            margin="dense"
            value={formDataKelas.tingkat}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <Typography>Wali Kelas</Typography>
          <FormControl fullWidth margin="dense" size="small">
            <Select
              name="waliKelas"
              value={formDataKelas.waliKelas}
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
          <Typography>Deskripsi Kelas</Typography>
          <TextField
            name="deskripsi"
            fullWidth
            multiline
            minRows={4}
            margin="dense"
            size="small"
            value={formDataKelas.deskripsi}
            onChange={handleChange}
          />
        </div>
        <FormControlLabel
          control={
            <Checkbox
              name="isActive"
              checked={formDataKelas.isActive}
              onChange={handleChange}
            />
          }
          label="Kelas Aktif?"
        />
      </DialogContent>
      <DialogActions>
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
