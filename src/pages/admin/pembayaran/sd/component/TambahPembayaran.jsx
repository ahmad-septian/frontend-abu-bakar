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
  Switch,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import {} from "react-router-dom";
import {
  AnimasiDialog,
  BootstrapDialog,
} from "@/component-global/component-dialog";
import { NumericFormat } from "react-number-format";

export default function TambahPembayaranSd(props) {
  const {
    openTambahPembayaran,
    ClickCloseTambahPembayaran,
    formDataPembayaran,
    handleChange,
    ChangeInputNumber,
    handleInstallment,
    handleSubmitCreate,
    setFormDataPembayaran,
  } = props;
  return (
    <BootstrapDialog
      sx={{ backdropFilter: "blur(8px)" }}
      aria-labelledby="customized-dialog-title"
      open={openTambahPembayaran}
      slots={{
        transition: AnimasiDialog,
      }}
      fullWidth={true}
      maxWidth="md"
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Tambah Pembayaran SD
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={ClickCloseTambahPembayaran}
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
          <Typography>Nama Pembayaran</Typography>
          <TextField
            name="namaPembayaran"
            fullWidth
            size="small"
            margin="dense"
            value={formDataPembayaran.namaPembayaran}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <Typography>Harga Pembayaran</Typography>

          <NumericFormat
            value={formDataPembayaran.hargaPembayaran}
            onChange={ChangeInputNumber}
            allowLeadingZeros
            thousandSeparator=","
            className="appearance-none border border-[#ddd] rounded-md w-full p-2 text-gray-700 focus:outline-none focus:border-blue-500 h-14 hover:border-black"
          />
        </div>

        <div className="mb-3">
          <Typography>Bisa Diangsur?</Typography>
          <Switch
            checked={formDataPembayaran.isInstallment}
            onChange={handleInstallment}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>

        <div className="mb-3">
          <Typography>Model Pembayaran</Typography>
          <FormControl fullWidth margin="dense" size="small">
            <Select
              name="modelPembayaran"
              value={formDataPembayaran.modelPembayaran}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="">Pilih Model</MenuItem>
              <MenuItem value="BULANAN">BULANAN</MenuItem>
              <MenuItem value="DIAWAL">DIAWAL</MenuItem>
            </Select>
          </FormControl>
        </div>

        <FormControlLabel
          control={
            <Checkbox
              name="aktif"
              checked={formDataPembayaran.aktif}
              onChange={(e) =>
                setFormDataPembayaran((prev) => ({
                  ...prev,
                  aktif: e.target.checked,
                }))
              }
            />
          }
          label="Pembayaran Aktif?"
        />
      </DialogContent>

      <DialogActions dividers>
        <Button
          sx={{ backgroundColor: "#85193C" }}
          variant="contained"
          onClick={handleSubmitCreate}
        >
          Save changes
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
