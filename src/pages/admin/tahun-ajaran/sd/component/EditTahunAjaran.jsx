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

export default function EditTahunAjaran(props) {
  const {
    formDataTahunAjaran,
    handleChange,
    ClickCloseEditTahunAjaran,
    openEditTahunAjaran,
    handleSubmitEdit,
  } = props;
  return (
    <BootstrapDialog
      sx={{ backdropFilter: "blur(8px)" }}
      aria-labelledby="customized-dialog-title"
      open={openEditTahunAjaran}
      slots={{
        transition: AnimasiDialog,
      }}
      fullWidth={true}
      maxWidth="md"
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Edit Tahun Ajaran SD
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={ClickCloseEditTahunAjaran}
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
        <form onSubmit={handleSubmitEdit}>
          <div className="mb-3">
            <Typography>Nama Tahun Ajaran</Typography>
            <TextField
              name="tahunAjaran"
              fullWidth
              size="small"
              margin="dense"
              value={formDataTahunAjaran.tahunAjaran}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Typography>Kode Tahun Ajaran</Typography>
            <TextField
              name="code"
              fullWidth
              size="small"
              margin="dense"
              value={formDataTahunAjaran.code}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Typography>Semester</Typography>
            <FormControl fullWidth margin="dense" size="small">
              <Select
                name="semester"
                value={formDataTahunAjaran.semester}
                onChange={handleChange}
              >
                <MenuItem value="GANJIL">GANJIL</MenuItem>
                <MenuItem value="GENAP">GENAP</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="mb-3">
            <Typography>Tanggal Mulai</Typography>
            <TextField
              name="tanggalMulai"
              fullWidth
              size="small"
              margin="dense"
              type="date"
              value={formDataTahunAjaran.tanggalMulai}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </div>
          <div className="mb-3">
            <Typography>Tanggal Selesai</Typography>
            <TextField
              name="tanggalSelesai"
              fullWidth
              size="small"
              margin="dense"
              type="date"
              value={formDataTahunAjaran.tanggalSelesai}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </div>
          <FormControlLabel
            control={
              <Checkbox
                name="aktif"
                checked={formDataTahunAjaran.aktif}
                onChange={handleChange}
              />
            }
            label="Tahun Ajaran Aktif?"
          />
          <DialogActions sx={{ mt: 2 }}>
            <Button
              sx={{ backgroundColor: "#85193C" }}
              variant="contained"
              type="submit"
            >
              Simpan
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </BootstrapDialog>
  );
}
