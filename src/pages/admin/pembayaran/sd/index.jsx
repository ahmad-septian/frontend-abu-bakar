import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {} from "@mui/icons-material";
import ListPembayaranSd from "./component/ListPembayaran";
import TambahPembayaranSd from "./component/TambahPembayaran";
import EditPembayaranSd from "./component/EditPembayaran";
import { CreatePembayaran, GetPembayaranPaginated } from "@/api/pembayaran.api";
import { toast } from "react-toastify";
import { GetOnePembayaran, UpdatePembayaran } from "@/api/pembayaran.api";

export default function PembayaranSd() {
  const [openTambahPembayaran, setOpenTambahPembayaran] = useState(false);
  const [openEditPembayaran, setOpenEditPembayaran] = useState(false);
  const [formDataPembayaran, setFormDataPembayaran] = useState({
    namaPembayaran: "",
    hargaPembayaran: "",
    modelPembayaran: "",
    isInstallment: false,
    aktif: true,
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [checked, setChecked] = useState(true);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [getId, setGetId] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getDataPaginated = async () => {
    try {
      const response = await GetPembayaranPaginated(
        page + 1,
        rowsPerPage,
        search
      );
      setData(response.data);
      setTotalItems(response.meta.total);
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  const getOneData = async (id) => {
    try {
      const response = await GetOnePembayaran(id);
      setFormDataPembayaran({
        namaPembayaran: response.data.namaPembayaran,
        hargaPembayaran: response.data.hargaPembayaran,
        modelPembayaran: response.data.modelPembayaran,
        isInstallment: response.data.isInstallment,
        aktif: response.data.aktif,
      });
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    const {
      namaPembayaran,
      hargaPembayaran,
      modelPembayaran,
      isInstallment,
      aktif,
    } = formDataPembayaran;

    if (namaPembayaran.trim() === "" || modelPembayaran.trim() === "") {
      toast.error("Tolong Isi Semua Field", {
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    try {
      const resp = await CreatePembayaran(
        namaPembayaran,
        hargaPembayaran,
        modelPembayaran,
        isInstallment,
        aktif
      );

      if (resp.status === 201) {
        toast.success("Pembayaran berhasil dibuat", {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        ClickCloseTambahPembayaran();
        getDataPaginated();
        setFormDataPembayaran({
          namaPembayaran: "",
          hargaPembayaran: "",
          modelPembayaran: "",
          isInstallment: false,
          aktif: true,
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data.message || "Failed to connect to the server.",
        {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    const {
      namaPembayaran,
      hargaPembayaran,
      modelPembayaran,
      isInstallment,
      aktif,
    } = formDataPembayaran;
    if (namaPembayaran.trim() === "" || modelPembayaran.trim() === "") {
      toast.error("Tolong Isi Semua Field", {
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    try {
      const resp = await UpdatePembayaran(
        getId,
        namaPembayaran,
        hargaPembayaran,
        modelPembayaran,
        isInstallment,
        aktif
      );

      if (resp.status === 201 || resp.status === 200) {
        toast.success("Pembayaran berhasil diubah", {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        ClickCloseEditPembayaran();
        getDataPaginated();
        setFormDataPembayaran({
          namaPembayaran: "",
          hargaPembayaran: "",
          modelPembayaran: "",
          isInstallment: false,
          aktif: true,
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data.message || "Failed to connect to the server.",
        {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormDataPembayaran((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInstallment = (e) => {
    const isChecked = e.target.checked;
    setFormDataPembayaran((prev) => ({
      ...prev,
      isInstallment: isChecked,
    }));
  };

  const ClickOpenTambahPembayaran = () => {
    setOpenTambahPembayaran(true);
  };

  const ClickCloseTambahPembayaran = () => {
    setOpenTambahPembayaran(false);
  };

  const ClickOpenEditPembayaran = (id) => {
    getOneData(id);
    setGetId(id);
    setOpenEditPembayaran(true);
  };

  const ClickCloseEditPembayaran = () => {
    setOpenEditPembayaran(false);
  };

  const ChangeInputNumber = (event) => {
    const value = event.target.value;
    const replaceValue = value.replace(/,/g, "");
    const convertValue = Number(replaceValue);
    setFormDataPembayaran((prev) => ({
      ...prev,
      hargaPembayaran: convertValue,
    }));
  };

  useEffect(() => {
    getDataPaginated();
  }, [page, rowsPerPage, search]);
  return (
    <div>
      <Typography sx={{ fontSize: "1.5rem" }}>Master Pembayaran SD</Typography>

      <ListPembayaranSd
        ClickOpenTambahPembayaran={ClickOpenTambahPembayaran}
        ClickOpenEditPembayaran={ClickOpenEditPembayaran}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        totalItems={totalItems}
        rowsPerPage={rowsPerPage}
        page={page}
        data={data}
        setSearch={setSearch}
        getOneData={getOneData}
      />

      <TambahPembayaranSd
        formDataPembayaran={formDataPembayaran}
        handleChange={handleChange}
        ClickCloseTambahPembayaran={ClickCloseTambahPembayaran}
        openTambahPembayaran={openTambahPembayaran}
        checked={checked}
        handleInstallment={handleInstallment}
        handleSubmitCreate={handleSubmitCreate}
        setFormDataPembayaran={setFormDataPembayaran}
        ChangeInputNumber={ChangeInputNumber}
      />

      <EditPembayaranSd
        formDataPembayaran={formDataPembayaran}
        handleChange={handleChange}
        ClickCloseEditPembayaran={ClickCloseEditPembayaran}
        openEditPembayaran={openEditPembayaran}
        checked={checked}
        handleInstallment={handleInstallment}
        handleSubmitEdit={handleSubmitEdit}
        ChangeInputNumber={ChangeInputNumber}
        setFormDataPembayaran={setFormDataPembayaran}
      />
    </div>
  );
}
