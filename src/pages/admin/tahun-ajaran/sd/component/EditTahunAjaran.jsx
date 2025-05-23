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
        <div className="mb-3">
          <Typography>Nama Tahun Ajaran</Typography>
          <TextField
            name="namaTahunAjaran"
            fullWidth
            size="small"
            margin="dense"
            value={formDataTahunAjaran.namaTahunAjaran}
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
              labelId="demo-simple-select-label"
              id="demo-simple-select"
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
            name="startDate"
            fullWidth
            size="small"
            margin="dense"
            type="date"
            value={formDataTahunAjaran.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <Typography>Tanggal Selesai</Typography>
          <TextField
            name="endDate"
            fullWidth
            size="small"
            margin="dense"
            type="date"
            value={formDataTahunAjaran.endDate}
            onChange={handleChange}
          />
        </div>
        <FormControlLabel
          control={
            <Checkbox
              name="isActive"
              checked={formDataTahunAjaran.isActive}
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
          onClick={ClickCloseEditTahunAjaran}
        >
          Save changes
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
