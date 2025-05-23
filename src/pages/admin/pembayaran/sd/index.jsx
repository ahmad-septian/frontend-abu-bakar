import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ListPembayaranSd from "./component/ListPembayaran";
import TambahPembayaranSd from "./component/TambahPembayaran";
import EditPembayaranSd from "./component/EditPembayaran";

export default function PembayaranSd() {
  const navigate = useNavigate();
  const [openTambahPembayaran, setOpenTambahPembayaran] = useState(false);
  const [openEditPembayaran, setOpenEditPembayaran] = useState(false);
  const [formDataPembayaran, setFormDataPembayaran] = useState({
    namaPembayaran: "",
    hargaPembayaran: "",
    isInstallment: false,
    PaymentModel: "",
    isActive: true,
  });

  const [checked, setChecked] = useState(true);

  const handleInstallment = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked); // boleh dihapus kalau tidak dipakai lagi
    setFormDataPembayaran((prev) => ({
      ...prev,
      isInstallment: isChecked,
    }));
  };

  const handleChange = (e) => {
    setFormDataPembayaran({
      ...formDataPembayaran,
      [e.target.name]: e.target.value,
    });
  };

  const ClickOpenTambahPembayaran = () => {
    setOpenTambahPembayaran(true);
  };

  const ClickCloseTambahPembayaran = () => {
    setOpenTambahPembayaran(false);
  };

  const ClickOpenEditPembayaran = () => {
    setOpenEditPembayaran(true);
  };

  const ClickCloseEditPembayaran = () => {
    setOpenEditPembayaran(false);
  };
  return (
    <div>
      <Typography sx={{ fontSize: "1.5rem" }}>Master Pembayaran SD</Typography>

      <ListPembayaranSd
        ClickOpenTambahPembayaran={ClickOpenTambahPembayaran}
        ClickOpenEditPembayaran={ClickOpenEditPembayaran}
      />

      <TambahPembayaranSd
        formDataPembayaran={formDataPembayaran}
        handleChange={handleChange}
        ClickCloseTambahPembayaran={ClickCloseTambahPembayaran}
        openTambahPembayaran={openTambahPembayaran}
        checked={checked}
        handleInstallment={handleInstallment}
      />

      <EditPembayaranSd
        formDataPembayaran={formDataPembayaran}
        handleChange={handleChange}
        ClickCloseEditPembayaran={ClickCloseEditPembayaran}
        openEditPembayaran={openEditPembayaran}
        checked={checked}
        handleInstallment={handleInstallment}
      />
    </div>
  );
}
