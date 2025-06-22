import React, { useState, useEffect } from "react";
import {
  DialogTitle,
  DialogContent,
  IconButton,
  DialogActions,
  Button,
  Typography,
  TextField,
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

export default function BuatPengajuan(props) {
  const {
    handleChange,
    ClickClosePenambahanWaktu,
    openPenambahanWaktu,
    formData,
    mataPelajaran,
    hadleSubmitPenambahanWaktu,
  } = props;
  return (
    <BootstrapDialog
      sx={{ backdropFilter: "blur(8px)" }}
      aria-labelledby="customized-dialog-title"
      open={openPenambahanWaktu}
      slots={{
        transition: AnimasiDialog,
      }}
      fullWidth={true}
      maxWidth="md"
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Ajukan Penambahan Waktu
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={ClickClosePenambahanWaktu}
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
          <Typography>Mata Pelajaran</Typography>
          <FormControl fullWidth margin="dense" size="small">
            <Select
              name="jadwalPelajaranId"
              value={formData.jadwalPelajaranId}
              onChange={handleChange}
            >
              {mataPelajaran.length > 0 ? (
                mataPelajaran.map((mapel) => (
                  <MenuItem key={mapel.japelId} value={mapel.japelId}>
                    {mapel.namaMapel}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>Loading...</MenuItem>
              )}
            </Select>
          </FormControl>
        </div>
        <div className="mb-3">
          <Typography>Type Penilaian</Typography>
          <FormControl fullWidth margin="dense" size="small">
            <Select
              name="assessmentType"
              value={formData.assessmentType}
              onChange={handleChange}
            >
              <MenuItem value="kuis">kuis</MenuItem>
              <MenuItem value="tugas">Tugas</MenuItem>
              <MenuItem value="uts">UTS</MenuItem>
              <MenuItem value="uas">UAS</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="mb-3">
          <Typography>Tanggal Yang Diajukan</Typography>
          <TextField
            name="requestedEndDate"
            fullWidth
            size="small"
            margin="dense"
            type="date"
            value={formData.requestedEndDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <Typography>Alasan</Typography>
          <TextField
            name="alasan"
            fullWidth
            size="small"
            margin="dense"
            value={formData.alasan}
            onChange={handleChange}
          />
        </div>
      </DialogContent>

      <DialogActions dividers>
        <Button
          sx={{ backgroundColor: "#85193C" }}
          variant="contained"
          onClick={hadleSubmitPenambahanWaktu}
        >
          Save changes
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
