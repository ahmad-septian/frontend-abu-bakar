import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ListTahunAjaran from "./component/ListTahunAjaran";
import TambahTahuAjaran from "./component/TambahTahunAjaran";
import EditTahunAjaran from "./component/EditTahunAjaran";
import {
  CreateTahunAjaran,
  GetTahunAjaranPaginated,
  GetOneTahunAjaran,
  UpdateTahunAjaran,
} from "@/api/tahunAjaran.api";
import { toast } from "react-toastify";

export default function TahunAjaranSd() {
  const [openTambahTahunAjaran, setOpenTambahTahunAjaran] = useState(false);
  const [openEditTahunAjaran, setOpenEditTahunAjaran] = useState(false);
  const [formDataTahunAjaran, setFormDataTahunAjaran] = useState({
    tahunAjaran: "",
    code: "",
    semester: "",
    tanggalMulai: "",
    tanggalSelesai: "",
    aktif: true,
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
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
      const response = await GetTahunAjaranPaginated(
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormDataTahunAjaran((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const getOneData = async (id) => {
    try {
      const response = await GetOneTahunAjaran(id);
      setFormDataTahunAjaran({
        tahunAjaran: response.data.tahunAjaran,
        code: response.data.code,
        semester: response.data.semester,
        tanggalMulai: response.data.tanggalMulai,
        tanggalSelesai: response.data.tanggalSelesai,
        aktif: response.data.aktif,
      });
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    const { tahunAjaran, code, semester, tanggalMulai, tanggalSelesai, aktif } =
      formDataTahunAjaran;

    if (
      tahunAjaran.trim() === "" ||
      code.trim() === "" ||
      semester.trim() === "" ||
      tanggalMulai.trim() === "" ||
      tanggalSelesai.trim() === ""
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
      const resp = await CreateTahunAjaran(
        tahunAjaran,
        code,
        semester,
        tanggalMulai,
        tanggalSelesai,
        aktif
      );

      if (resp.status === 201 || resp.status === 200) {
        toast.success("Tahun Ajaran berhasil dibuat", {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        ClickCloseTambahTahunAjaran();
        getDataPaginated();
        setFormDataTahunAjaran({
          tahunAjaran: "",
          code: "",
          semester: "",
          tanggalMulai: "",
          tanggalSelesai: "",
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
    const { tahunAjaran, code, semester, tanggalMulai, tanggalSelesai, aktif } =
      formDataTahunAjaran;
    if (
      tahunAjaran.trim() === "" ||
      code.trim() === "" ||
      semester.trim() === "" ||
      tanggalMulai.trim() === "" ||
      tanggalSelesai.trim() === ""
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
      const resp = await UpdateTahunAjaran(
        getId,
        tahunAjaran,
        code,
        semester,
        tanggalMulai,
        tanggalSelesai,
        aktif
      );

      if (resp.status === 201 || resp.status === 200) {
        toast.success("Tahun Ajaran berhasil diubah", {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        ClickCloseEditTahunAjaran();
        getDataPaginated();
        setFormDataTahunAjaran({
          tahunAjaran: "",
          code: "",
          semester: "",
          tanggalMulai: "",
          tanggalSelesai: "",
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

  const ClickOpenTambahTahunAjaran = () => {
    setOpenTambahTahunAjaran(true);
  };

  const ClickCloseTambahTahunAjaran = () => {
    setOpenTambahTahunAjaran(false);
  };

  const ClickOpenEditTahunAjaran = (id) => {
    getOneData(id);
    setGetId(id);
    setOpenEditTahunAjaran(true);
  };

  const ClickCloseEditTahunAjaran = () => {
    setOpenEditTahunAjaran(false);
    setFormDataTahunAjaran({
      tahunAjaran: "",
      code: "",
      semester: "",
      tanggalMulai: "",
      tanggalSelesai: "",
      aktif: true,
    });
  };

  useEffect(() => {
    getDataPaginated();
  }, [page, rowsPerPage, search]);
  return (
    <div>
      <Typography sx={{ fontSize: "1.5rem" }}>
        Master Tahun Ajaran SD
      </Typography>

      <ListTahunAjaran
        ClickOpenTambahTahunAjaran={ClickOpenTambahTahunAjaran}
        ClickOpenEditTahunAjaran={ClickOpenEditTahunAjaran}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        totalItems={totalItems}
        rowsPerPage={rowsPerPage}
        page={page}
        data={data}
        search={search}
        setSearch={setSearch}
      />

      <TambahTahuAjaran
        formDataTahunAjaran={formDataTahunAjaran}
        handleChange={handleChange}
        ClickCloseTambahTahunAjaran={ClickCloseTambahTahunAjaran}
        openTambahTahunAjaran={openTambahTahunAjaran}
        handleSubmitCreate={handleSubmitCreate}
      />

      <EditTahunAjaran
        formDataTahunAjaran={formDataTahunAjaran}
        handleChange={handleChange}
        ClickCloseEditTahunAjaran={ClickCloseEditTahunAjaran}
        openEditTahunAjaran={openEditTahunAjaran}
        handleSubmitEdit={handleSubmitEdit}
      />
    </div>
  );
}
