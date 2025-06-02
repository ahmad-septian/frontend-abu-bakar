import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {} from "@mui/icons-material";
import ListMataPelajaranSd from "./component/ListMataPelajaran";
import TambahMataPelajaranSd from "./component/TambahMataPelajaran";
import EditMataPelajaranSd from "./component/EditMataPelajaran";
import {
  CreateMataPelajaran,
  GetMataPelajaranPaginated,
  GetOneMataPelajaran,
  UpdateMataPelajaran,
} from "@/api/mapel.api";
import { toast } from "react-toastify";

export default function MataPelajaranSd() {
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [getId, setGetId] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormDataMataPelajaran((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormDataMataPelajaran((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getDataPaginated = async () => {
    try {
      const response = await GetMataPelajaranPaginated(
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
      const response = await GetOneMataPelajaran(id);
      setFormDataMataPelajaran({
        namaMataPelajaran: response.data.namaMataPelajaran,
        kodePelajaran: response.data.kodePelajaran,
        deskripsi: response.data.deskripsi,
        tipe: response.data.tipe,
        isActive: response.data.isActive,
      });
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    const { namaMataPelajaran, kodePelajaran, deskripsi, tipe, isActive } =
      formDataMataPelajaran;

    try {
      const resp = await CreateMataPelajaran(
        namaMataPelajaran,
        kodePelajaran,
        deskripsi,
        isActive,
        tipe
      );

      if (resp.status === 201 || resp.status === 200) {
        toast.success("Mata Pelajaran berhasil dibuat", {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        ClickCloseTambahMataPelajaran();
        getDataPaginated();
        setFormDataMataPelajaran({
          namaMataPelajaran: "",
          kodePelajaran: "",
          deskripsi: "",
          tipe: "",
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
    const { namaMataPelajaran, kodePelajaran, deskripsi, tipe, isActive } =
      formDataMataPelajaran;

    if (
      !namaMataPelajaran ||
      !kodePelajaran ||
      !deskripsi ||
      !tipe ||
      (tipe !== "WAJIB" && tipe !== "ESKUL")
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
      const resp = await UpdateMataPelajaran(
        getId,
        namaMataPelajaran,
        kodePelajaran,
        deskripsi,
        isActive,
        tipe
      );

      if (resp.status === 201 || resp.status === 200) {
        toast.success("Mata Pelajaran berhasil diubah", {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        ClickCloseEditMataPelajaran();
        getDataPaginated();
        setFormDataMataPelajaran({
          namaMataPelajaran: "",
          kodePelajaran: "",
          deskripsi: "",
          tipe: "",
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

  const ClickOpenTambahMataPelajaran = () => {
    setOpenTambahMataPelajaran(true);
  };

  const ClickCloseTambahMataPelajaran = () => {
    setOpenTambahMataPelajaran(false);
  };

  const ClickOpenEditMataPelajaran = (id) => {
    getOneData(id);
    setGetId(id);
    setOpenEditMataPelajaran(true);
  };

  const ClickCloseEditMataPelajaran = () => {
    setOpenEditMataPelajaran(false);
    setFormDataMataPelajaran({
      namaMataPelajaran: "",
      kodePelajaran: "",
      deskripsi: "",
      tipe: "",
      isActive: true,
    });
  };

  useEffect(() => {
    getDataPaginated();
  }, [page, rowsPerPage, search]);
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
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        totalItems={totalItems}
        rowsPerPage={rowsPerPage}
        page={page}
        data={data}
        search={search}
        setSearch={setSearch}
      />

      <TambahMataPelajaranSd
        formDataMataPelajaran={formDataMataPelajaran}
        handleChange={handleChange}
        ClickCloseTambahMataPelajaran={ClickCloseTambahMataPelajaran}
        openTambahMataPelajaran={openTambahMataPelajaran}
        handleSubmitCreate={handleSubmitCreate}
      />

      <EditMataPelajaranSd
        formDataMataPelajaran={formDataMataPelajaran}
        handleChange={handleChange}
        ClickCloseEditMataPelajaran={ClickCloseEditMataPelajaran}
        openEditMataPelajaran={openEditMataPelajaran}
        handleSubmitEdit={handleSubmitEdit}
      />
    </div>
  );
}
