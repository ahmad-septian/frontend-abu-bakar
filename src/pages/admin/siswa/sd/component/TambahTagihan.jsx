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
  Chip,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import {} from "react-router-dom";
import {
  AnimasiDialog,
  BootstrapDialog,
} from "@/component-global/component-dialog";

export default function TambahTagihanSd(props) {
  const {
    openTambah,
    handleCloseTambah,
    selectedIds,
    togglePembayaran,
    filteredPembayaran,
    setSearch,
    search,
    submitPembayaran,
  } = props;

  

  return (
    <BootstrapDialog
      sx={{ backdropFilter: "blur(8px)" }}
      aria-labelledby="customized-dialog-title"
      open={openTambah}
      slots={{
        transition: AnimasiDialog,
      }}
      fullWidth={true}
      maxWidth="md"
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Pilih Pembayaran Untuk Siswa
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleCloseTambah}
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
        <div className="flex flex-col gap-4">
          <TextField
            label="Cari pembayaran..."
            variant="outlined"
            size="small"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-3">
            {filteredPembayaran.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 italic">
                Tidak ada pembayaran ditemukan.
              </div>
            ) : (
              filteredPembayaran.map((item) => {
                const isSelected = selectedIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => togglePembayaran(item.id)}
                    className={`rounded-xl border transition-colors cursor-pointer shadow-sm p-4 ${
                      isSelected
                        ? "bg-[#85193C] text-white"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    <Chip
                      label={item.modelPembayaran}
                      color={
                        item.modelPembayaran === "DIAWAL"
                          ? "primary"
                          : "success"
                      }
                      sx={{
                        marginBottom: 1,
                      }}
                      variant="contained"
                      size="small"
                    />
                    <div className="font-semibold">{item.namaPembayaran}</div>
                    <div className="text-sm">
                      Rp {item.hargaPembayaran.toLocaleString("id-ID")}
                    </div>

                    <Checkbox checked={isSelected} sx={{ display: "none" }} />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </DialogContent>

      <DialogActions dividers>
        <Button
          sx={{ backgroundColor: "#85193C" }}
          variant="contained"
          onClick={submitPembayaran}
        >
          Save changes
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
