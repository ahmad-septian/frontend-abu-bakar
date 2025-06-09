import React, { useState, useEffect } from "react";
import {
  TextField,
  MenuItem,
  Typography,
  Button,
  FormControl,
  Select,
} from "@mui/material";
import {} from "@mui/icons-material";
import {} from "react-router-dom";

export default function EditProfile(props) {
  const { formData, handleChange, handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit} className=" gap-4">
        <div className="mt-3">
          <Typography>Nama Lengkap</Typography>
          <TextField
            name="namaLengkap"
            fullWidth
            size="small"
            margin="dense"
            value={formData.namaLengkap}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3">
          <Typography>Tempat Lahir</Typography>
          <TextField
            name="tempatLahir"
            fullWidth
            size="small"
            margin="dense"
            value={formData.tempatLahir}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3">
          <Typography>Nama Ayah</Typography>
          <TextField
            name="namaAyah"
            fullWidth
            size="small"
            margin="dense"
            value={formData.namaAyah}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3">
          <Typography>Nama Ibu</Typography>
          <TextField
            name="namaIbu"
            fullWidth
            size="small"
            margin="dense"
            value={formData.namaIbu}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3">
          <Typography>Email Orang Tua</Typography>
          <TextField
            name="emailOrangTua"
            fullWidth
            size="small"
            margin="dense"
            value={formData.emailOrangTua}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3">
          <Typography>No Handphone Ayah</Typography>
          <TextField
            name="noHpAyah"
            fullWidth
            size="small"
            margin="dense"
            value={formData.noHpAyah}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3">
          <Typography>No Handphone Ibu</Typography>
          <TextField
            name="noHpIbu"
            fullWidth
            size="small"
            margin="dense"
            value={formData.noHpIbu}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3">
          <Typography>Tanggal Lahir</Typography>
          <TextField
            name="tanggalLahir"
            fullWidth
            size="small"
            margin="dense"
            type="date"
            value={
              formData.tanggalLahir
                ? new Date(formData.tanggalLahir).toISOString().split("T")[0]
                : ""
            }
            onChange={handleChange}
          />
        </div>
        <div className="mt-3">
          <Typography>Jenis Kelamin</Typography>
          <FormControl fullWidth margin="dense" size="small">
            <Select
              name="jenisKelamin"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.jenisKelamin}
              onChange={handleChange}
            >
              <MenuItem value="L">Laki Laki</MenuItem>
              <MenuItem value="P">Perempuan</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="mt-3">
          <Typography>Nama Wali</Typography>
          <TextField
            name="namaWali"
            fullWidth
            size="small"
            margin="dense"
            value={formData.namaWali}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3">
          <Typography>No Handphone Wali</Typography>
          <TextField
            name="noHpWali"
            fullWidth
            size="small"
            margin="dense"
            value={formData.noHpWali}
            onChange={handleChange}
          />
        </div>

        <div className="mt-3">
          <Typography>Alamat Lengkap</Typography>
          <TextField
            name="alamat"
            fullWidth
            multiline
            minRows={2}
            margin="dense"
            size="small"
            value={formData.alamat}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-2 text-right mt-2">
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "#85193C", color: "#fff" }}
          >
            Simpan Siswa
          </Button>
        </div>
      </form>
    </div>
  );
}
