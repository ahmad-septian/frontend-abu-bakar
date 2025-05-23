import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ListTahunAjaran from "./component/ListTahunAjaran";
import TambahTahuAjaran from "./component/TambahTahunAjaran";
import EditTahunAjaran from "./component/EditTahunAjaran";

export default function TahunAjaranSd() {
  const navigate = useNavigate();
  const [openTambahTahunAjaran, setOpenTambahTahunAjaran] = useState(false);
  const [openEditTahunAjaran, setOpenEditTahunAjaran] = useState(false);
  const [formDataTahunAjaran, setFormDataTahunAjaran] = useState({
    code: "",
    nama: "",
    semester: "",
    startDate: "",
    endDate: "",
    isActive: true,
  });

  const handleChange = (e) => {
    setFormDataTahunAjaran({
      ...formDataTahunAjaran,
      [e.target.name]: e.target.value,
    });
  };

  const ClickOpenTambahTahunAjaran = () => {
    setOpenTambahTahunAjaran(true);
  };

  const ClickCloseTambahTahunAjaran = () => {
    setOpenTambahTahunAjaran(false);
  };

  const ClickOpenEditTahunAjaran = () => {
    setOpenEditTahunAjaran(true);
  };

  const ClickCloseEditTahunAjaran = () => {
    setOpenEditTahunAjaran(false);
  };
  return (
    <div>
      <Typography sx={{ fontSize: "1.5rem" }}>
        Master Tahun Ajaran SD
      </Typography>

      <ListTahunAjaran
        ClickOpenTambahTahunAjaran={ClickOpenTambahTahunAjaran}
        ClickOpenEditTahunAjaran={ClickOpenEditTahunAjaran}
      />

      <TambahTahuAjaran
        formDataTahunAjaran={formDataTahunAjaran}
        handleChange={handleChange}
        ClickCloseTambahTahunAjaran={ClickCloseTambahTahunAjaran}
        openTambahTahunAjaran={openTambahTahunAjaran}
      />

      <EditTahunAjaran
        formDataTahunAjaran={formDataTahunAjaran}
        handleChange={handleChange}
        ClickCloseEditTahunAjaran={ClickCloseEditTahunAjaran}
        openEditTahunAjaran={openEditTahunAjaran}
      />
    </div>
  );
}
