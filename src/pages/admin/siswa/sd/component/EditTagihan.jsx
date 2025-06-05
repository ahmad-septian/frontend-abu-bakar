import React, { useState, useEffect } from "react";
import {
  DialogTitle,
  DialogContent,
  IconButton,
  DialogActions,
  Button,
  Typography,
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
import { NumericFormat } from "react-number-format";

export default function EditTagihan(props) {
  const {
    openEdit,
    handleCloseEdit,
    formData,
    setFormData,
    handleChange,
    submitEditPembayaran,
  } = props;

  const ChangeInputNumber = (event) => {
    const value = event.target.value;
    const replaceValue = value.replace(/,/g, "");
    const convertValue = Number(replaceValue);
    setFormData((prev) => ({
      ...prev,
      harga: convertValue,
    }));
  };

  return (
    <BootstrapDialog
      sx={{ backdropFilter: "blur(8px)" }}
      aria-labelledby="customized-dialog-title"
      open={openEdit}
      slots={{
        transition: AnimasiDialog,
      }}
      fullWidth={true}
      maxWidth="md"
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Edit Tagihan Siswa
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleCloseEdit}
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
        <div className="mb-4">
          <Typography gutterBottom>Harga</Typography>
          <NumericFormat
            value={formData.harga}
            onChange={ChangeInputNumber}
            allowLeadingZeros
            thousandSeparator=","
            className="appearance-none border border-[#ddd] rounded-sm w-full p-2 text-gray-700 focus:outline-none focus:border-blue-500 h-10 hover:border-black"
          />
        </div>

        <div>
          <Typography gutterBottom>Status</Typography>
          <FormControl fullWidth margin="dense" size="small">
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
              defaultValue="BELUM_LUNAS"
              displayEmpty
            >
              <MenuItem value="LUNAS">Lunas</MenuItem>
              <MenuItem value="BELUM_LUNAS">Belum Lunas</MenuItem>
            </Select>
          </FormControl>
        </div>
      </DialogContent>

      <DialogActions dividers>
        <Button
          sx={{ backgroundColor: "#85193C" }}
          variant="contained"
          onClick={submitEditPembayaran}
        >
          Save changes
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
