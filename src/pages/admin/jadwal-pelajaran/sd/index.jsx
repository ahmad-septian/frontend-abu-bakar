import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ListJadwalPelajaranSd from "./component/ListJadwalPelajaran";
import TambahJadwalPelajaranSd from "./component/TambahJadwalPelajaran";
import EditJadwalPelajaranSd from "./component/EditJadwalPelajaran";

export default function JadwalPelajaranSd() {
  const navigate = useNavigate();
  const [pilihKelas, setPilihKelas] = useState("1");
  const [openTambahJadwalPelajaran, setOpenTambahJadwalPelajaran] =
    useState(false);
  const [openEditJadwalPelajaran, setOpenEditJadwalPelajaran] = useState(false);
  const [formDataJadwalPelajaran, setFormDataJadwalPelajaran] = useState({
    kelas: "",
    mataPelajaran: "",
    pengajar: "",
    hari: "",
    jamMulai: "",
    jamSelesai: "",
    isActive: true,
  });

  const handleChange = (e) => {
    setFormDataJadwalPelajaran({
      ...formDataJadwalPelajaran,
      [e.target.name]: e.target.value,
    });
  };

  const ClickOpenTambahJadwalPelajaran = () => {
    setOpenTambahJadwalPelajaran(true);
  };

  const ClickCloseTambahJadwalPelajaran = () => {
    setOpenTambahJadwalPelajaran(false);
  };

  const ClickOpenEditJadwalPelajaran = () => {
    setOpenEditJadwalPelajaran(true);
  };

  const ClickCloseEditJadwalPelajaran = () => {
    setOpenEditJadwalPelajaran(false);
  };
  return (
    <div>
      <Typography sx={{ fontSize: "1.5rem" }}>
        Master Jadwal Pelajaran SD
      </Typography>

      <ListJadwalPelajaranSd
        pilihKelas={pilihKelas}
        setPilihKelas={setPilihKelas}
        ClickOpenTambahJadwalPelajaran={ClickOpenTambahJadwalPelajaran}
        ClickOpenEditJadwalPelajaran={ClickOpenEditJadwalPelajaran}
      />

      <TambahJadwalPelajaranSd
        formDataJadwalPelajaran={formDataJadwalPelajaran}
        handleChange={handleChange}
        ClickCloseTambahJadwalPelajaran={ClickCloseTambahJadwalPelajaran}
        openTambahJadwalPelajaran={openTambahJadwalPelajaran}
      />

      <EditJadwalPelajaranSd
        formDataJadwalPelajaran={formDataJadwalPelajaran}
        handleChange={handleChange}
        ClickCloseEditJadwalPelajaran={ClickCloseEditJadwalPelajaran}
        openEditJadwalPelajaran={openEditJadwalPelajaran}
      />
    </div>
  );
}
