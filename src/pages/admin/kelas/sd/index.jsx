import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {} from "@mui/icons-material";
import ListKelas from "./component/ListKelas";
import TambahKelasSd from "./component/TambahKelas";
import EditKelasSd from "./component/EditKelas";
import {
  CreateKelas,
  GetKelasPaginated,
  GetOneKelas,
  UpdateKelas,
} from "@/api/kelas.api";
import { GetAllPegawai } from "@/api/pegawai.api";
import { toast } from "react-toastify";

export default function KelasSd() {
  const [pilihKelas, setPilihKelas] = useState("1");
  const [openTambahKelas, setOpenTambahKelas] = useState(false);
  const [openEditKelas, setOpenEditKelas] = useState(false);
  const [formDataKelas, setFormDataKelas] = useState({
    namaKelas: "",
    tingkat: "",
    deskripsi: "",
    waliKelas: "",
    isActive: true,
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [getId, setGetId] = useState("");
  const [dataGuru, setDataGuru] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getDataPaginated = async () => {
    try {
      const response = await GetKelasPaginated(page + 1, rowsPerPage, search);
      setData(response.data);
      setTotalItems(response.meta.total);
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  const getOneData = async (id) => {
    try {
      const response = await GetOneKelas(id);
      setFormDataKelas({
        namaKelas: response.data.namaKelas,
        tingkat: response.data.tingkat,
        deskripsi: response.data.deskripsi,
        waliKelas: response.data.waliKelas.id,
        isActive: response.data.isActive,
      });
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  const getAllDataPegawai = async () => {
    try {
      const response = await GetAllPegawai();
      setDataGuru(response.data);
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    const { namaKelas, tingkat, deskripsi, waliKelas, isActive } =
      formDataKelas;

    if (
      !namaKelas ||
      !tingkat ||
      !deskripsi ||
      !waliKelas ||
      isActive === undefined
    ) {
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
      const resp = await CreateKelas(
        namaKelas,
        tingkat,
        deskripsi,
        waliKelas,
        isActive
      );

      if (resp.status === 201 || resp.status === 200) {
        toast.success("Kelas berhasil dibuat", {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        ClickCloseTambahKelas();
        getDataPaginated();
        setFormDataKelas({
          namaKelas: "",
          tingkat: "",
          deskripsi: "",
          waliKelas: "",
          isActive: true,
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
    const { namaKelas, tingkat, deskripsi, waliKelas, isActive } =
      formDataKelas;
    if (
      !namaKelas ||
      !tingkat ||
      !deskripsi ||
      !waliKelas ||
      isActive === undefined
    ) {
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
      const resp = await UpdateKelas(
        getId,
        namaKelas,
        tingkat,
        deskripsi,
        waliKelas,
        isActive
      );

      if (resp.status === 201 || resp.status === 200) {
        toast.success("Kelas berhasil diubah", {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        ClickCloseEditKelas();
        getDataPaginated();
        setFormDataKelas({
          namaKelas: "",
          tingkat: "",
          deskripsi: "",
          waliKelas: "",
          isActive: true,
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
    const { name, value, type, checked } = e.target;
    setFormDataKelas((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const ClickOpenTambahKelas = () => {
    setOpenTambahKelas(true);
  };

  const ClickCloseTambahKelas = () => {
    setOpenTambahKelas(false);
  };

  const ClickOpenEditKelas = (id) => {
    getOneData(id);
    setGetId(id);
    setOpenEditKelas(true);
  };

  const ClickCloseEditKelas = () => {
    setOpenEditKelas(false);
    setFormDataKelas({
      namaKelas: "",
      tingkat: "",
      deskripsi: "",
      waliKelas: "",
      isActive: true,
    });
  };

  useEffect(() => {
    getDataPaginated();
    getAllDataPegawai();
  }, [page, rowsPerPage, search]);
  return (
    <div>
      <Typography sx={{ fontSize: "1.5rem" }}>Master Kelas SD</Typography>
      <ListKelas
        pilihKelas={pilihKelas}
        setPilihKelas={setPilihKelas}
        ClickOpenTambahKelas={ClickOpenTambahKelas}
        ClickOpenEditKelas={ClickOpenEditKelas}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        totalItems={totalItems}
        rowsPerPage={rowsPerPage}
        page={page}
        data={data}
        setSearch={setSearch}
      />
      <TambahKelasSd
        formDataKelas={formDataKelas}
        handleChange={handleChange}
        ClickCloseTambahKelas={ClickCloseTambahKelas}
        openTambahKelas={openTambahKelas}
        dataGuru={dataGuru}
        handleSubmitCreate={handleSubmitCreate}
      />

      <EditKelasSd
        formDataKelas={formDataKelas}
        handleChange={handleChange}
        ClickCloseEditKelas={ClickCloseEditKelas}
        openEditKelas={openEditKelas}
        dataGuru={dataGuru}
        handleSubmitEdit={handleSubmitEdit}
      />
    </div>
  );
}
