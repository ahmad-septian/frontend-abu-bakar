import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ListMataPelajaranSd from "./component/ListMataPelajaran";
import TambahMataPelajaranSd from "./component/TambahMataPelajaran";
import EditMataPelajaranSd from "./component/EditMataPelajaran";

export default function MataPelajaranSd() {
  const navigate = useNavigate();
  const [pilihKelas, setPilihKelas] = useState("1");
  const [openTambahMataPelajaran, setOpenTambahMataPelajaran] = useState(false);
  const [openEditMataPelajaran, setOpenEditMataPelajaran] = useState(false);
  const [formDataMataPelajaran, setFormDataMataPelajaran] = useState({
    namaMataPelajaran: "",
    kodePelajaran: "",
    deskripsi: "",
    tipe: "",
    isActive: true,
  });

  const handleChange = (e) => {
    setFormDataMataPelajaran({
      ...formDataMataPelajaran,
      [e.target.name]: e.target.value,
    });
  };

  const ClickOpenTambahMataPelajaran = () => {
    setOpenTambahMataPelajaran(true);
  };

  const ClickCloseTambahMataPelajaran = () => {
    setOpenTambahMataPelajaran(false);
  };

  const ClickOpenEditMataPelajaran = () => {
    setOpenEditMataPelajaran(true);
  };

  const ClickCloseEditMataPelajaran = () => {
    setOpenEditMataPelajaran(false);
  };
  return (
    <div>
      <Typography sx={{ fontSize: "1.5rem" }}>
        Master Mata Pelajaran SD
      </Typography>

      <ListMataPelajaranSd
        pilihKelas={pilihKelas}
        setPilihKelas={setPilihKelas}
        ClickOpenTambahMataPelajaran={ClickOpenTambahMataPelajaran}
        ClickOpenEditMataPelajaran={ClickOpenEditMataPelajaran}
      />

      <TambahMataPelajaranSd
        formDataMataPelajaran={formDataMataPelajaran}
        handleChange={handleChange}
        ClickCloseTambahMataPelajaran={ClickCloseTambahMataPelajaran}
        openTambahMataPelajaran={openTambahMataPelajaran}
      />

      <EditMataPelajaranSd
        formDataMataPelajaran={formDataMataPelajaran}
        handleChange={handleChange}
        ClickCloseEditMataPelajaran={ClickCloseEditMataPelajaran}
        openEditMataPelajaran={openEditMataPelajaran}
      />
    </div>
  );
}
