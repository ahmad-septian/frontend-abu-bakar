import React, { useState, useEffect } from "react";
import { Button, TextField, Typography, MenuItem } from "@mui/material";
import {} from "@mui/icons-material";
import {} from "react-router-dom";

export default function DetailGuru() {
  const [formData, setFormData] = useState({
    nama: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    agama: "",
    alamat: "",
    no_hp: "",
    email: "",
    pendidikan: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data guru disubmit:", formData);
  };
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200  mx-auto mt-6">
      <Typography variant="h6" className="text-[#85193C] font-semibold mb-4">
        Detail Pengajar
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <TextField
          name="nama"
          label="Nama"
          fullWidth
          size="small"
          margin="dense"
          value={formData.nama}
          onChange={handleChange}
        />
        <TextField
          name="tempat_lahir"
          label="Tempat Lahir"
          fullWidth
          size="small"
          margin="dense"
          value={formData.tempat_lahir}
          onChange={handleChange}
        />
        <TextField
          name="tanggal_lahir"
          label="Tanggal Lahir"
          type="date"
          fullWidth
          size="small"
          margin="dense"
          InputLabelProps={{ shrink: true }}
          value={formData.tanggal_lahir}
          onChange={handleChange}
        />
        <TextField
          name="agama"
          label="Agama"
          select
          fullWidth
          size="small"
          margin="dense"
          value={formData.agama}
          onChange={handleChange}
        >
          {["Islam", "Kristen", "Katolik", "Hindu", "Budha"].map((a) => (
            <MenuItem key={a} value={a}>
              {a}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="no_hp"
          label="No. Handphone"
          fullWidth
          size="small"
          margin="dense"
          value={formData.no_hp}
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Email"
          fullWidth
          size="small"
          margin="dense"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          name="pendidikan"
          label="Pendidikan Terakhir"
          fullWidth
          size="small"
          margin="dense"
          value={formData.pendidikan}
          onChange={handleChange}
        />

        <TextField
          name="alamat"
          label="Alamat"
          fullWidth
          multiline
          minRows={2}
          margin="dense"
          size="small"
          value={formData.alamat}
          onChange={handleChange}
        />

        <div className="col-span-2 text-right mt-2">
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "#85193C", color: "#fff" }}
          >
            Simpan
          </Button>
        </div>
      </form>
    </div>
  );
}
