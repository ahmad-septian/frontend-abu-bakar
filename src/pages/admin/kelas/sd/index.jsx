import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ListKelas from "./component/ListKelas";
import TambahKelasSd from "./component/TambahKelas";
import EditKelasSd from "./component/EditKelas";

export default function KelasSd() {
  const navigate = useNavigate();
  const [pilihKelas, setPilihKelas] = useState("1");
  const [openTambahKelas, setOpenTambahKelas] = useState(false);
  const [openEditKelas, setOpenEditKelas] = useState(false);
  const [formDataKelas, setFormDataKelas] = useState({
    namaKelas: "",
    tingkat: "",
    deskripsi: "",
    isActive: true,
  });

  const handleChange = (e) => {
    setFormDataKelas({ ...formDataKelas, [e.target.name]: e.target.value });
  };

  const ClickOpenTambahKelas = () => {
    setOpenTambahKelas(true);
  };

  const ClickCloseTambahKelas = () => {
    setOpenTambahKelas(false);
  };

  const ClickOpenEditKelas = () => {
    setOpenEditKelas(true);
  };

  const ClickCloseEditKelas = () => {
    setOpenEditKelas(false);
  };

  return (
    <div>
      <Typography sx={{ fontSize: "1.5rem" }}>Master Kelas SD</Typography>
      <ListKelas
        pilihKelas={pilihKelas}
        setPilihKelas={setPilihKelas}
        ClickOpenTambahKelas={ClickOpenTambahKelas}
        ClickOpenEditKelas={ClickOpenEditKelas}
      />
      <TambahKelasSd
        formDataKelas={formDataKelas}
        handleChange={handleChange}
        ClickCloseTambahKelas={ClickCloseTambahKelas}
        openTambahKelas={openTambahKelas}
      />

      <EditKelasSd
        formDataKelas={formDataKelas}
        handleChange={handleChange}
        ClickCloseEditKelas={ClickCloseEditKelas}
        openEditKelas={openEditKelas}
        
      />
    </div>
  );
}
