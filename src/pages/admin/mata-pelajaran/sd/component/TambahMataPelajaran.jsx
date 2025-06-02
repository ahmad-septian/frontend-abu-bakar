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

export default function TambahMataPelajaranSd(props) {
  const {
    openTambahMataPelajaran,
    ClickCloseTambahMataPelajaran,
    formDataMataPelajaran,
    handleChange,
    handleSubmitCreate,
  } = props;
  return (
    <BootstrapDialog
      sx={{ backdropFilter: "blur(8px)" }}
      aria-labelledby="customized-dialog-title"
      open={openTambahMataPelajaran}
      slots={{
        transition: AnimasiDialog,
      }}
      fullWidth={true}
      maxWidth="md"
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Tambah Mata Pelajaran SD
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={ClickCloseTambahMataPelajaran}
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
          <Typography>Nama Mata Pelajaran</Typography>
          <TextField
            name="namaMataPelajaran"
            fullWidth
            size="small"
            margin="dense"
            value={formDataMataPelajaran.namaMataPelajaran}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <Typography>Kode Pelajaran</Typography>
          <TextField
            name="kodePelajaran"
            fullWidth
            size="small"
            margin="dense"
            value={formDataMataPelajaran.kodePelajaran}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <Typography>Deskripsi Mata Pelajaran</Typography>
          <TextField
            name="deskripsi"
            fullWidth
            multiline
            minRows={4}
            margin="dense"
            size="small"
            value={formDataMataPelajaran.deskripsi}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <Typography>Deskripsi Mata Pelajaran</Typography>
          <FormControl fullWidth margin="dense" size="small">
            <Select
              name="tipe"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formDataMataPelajaran.tipe}
              onChange={handleChange}
            >
              <MenuItem value="WAJIB">WAJIB</MenuItem>
              <MenuItem value="ESKUL">ESKUL</MenuItem>
            </Select>
          </FormControl>
        </div>
        <FormControlLabel
          control={
            <Checkbox
              name="isActive"
              checked={formDataMataPelajaran.isActive}
              onChange={handleChange}
            />
          }
          label="Mata Pelajaran Aktif?"
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
