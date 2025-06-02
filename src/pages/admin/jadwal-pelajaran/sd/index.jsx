import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {} from "@mui/icons-material";
import ListJadwalPelajaranSd from "./component/ListJadwalPelajaran";
import TambahJadwalPelajaranSd from "./component/TambahJadwalPelajaran";
import EditJadwalPelajaranSd from "./component/EditJadwalPelajaran";
import {
  CreateJadwalPelajaran,
  GetJadwalPelajaranPaginated,
  GetOneJadwalPelajaran,
  UpdateJadwalPelajaran,
} from "@/api/japel.api";
import { GetAllPegawai } from "@/api/pegawai.api";
import { toast } from "react-toastify";
import { GetAllKelas } from "@/api/kelas.api";
import { GetAllMataPelajaran } from "@/api/mapel.api";

export default function JadwalPelajaranSd() {
  const [pilihKelas, setPilihKelas] = useState("1");
  const [openTambahJadwalPelajaran, setOpenTambahJadwalPelajaran] =
    useState(false);
  const [openEditJadwalPelajaran, setOpenEditJadwalPelajaran] = useState(false);
  const [formDataJadwalPelajaran, setFormDataJadwalPelajaran] = useState({
    kelas: "",
    mataPelajaran: "",
    hari: "",
    jamMulai: "",
    jamSelesai: "",
    isActive: true,
    pengajar: "",
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [getId, setGetId] = useState("");
  const [dataGuru, setDataGuru] = useState([]);
  const [dataKelas, setDataKelas] = useState([]);
  const [dataMapel, setDataMapel] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getDataPaginated = async () => {
    try {
      const response = await GetJadwalPelajaranPaginated(
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

  const getAllDataPegawai = async () => {
    try {
      const response = await GetAllPegawai();
      setDataGuru(response.data);
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  const getAllDataKelas = async () => {
    try {
      const response = await GetAllKelas();
      setDataKelas(response.data);
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  const getAllDataMapel = async () => {
    try {
      const response = await GetAllMataPelajaran();
      setDataMapel(response.data);
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  const getOneData = async (id) => {
    try {
      const response = await GetOneJadwalPelajaran(id);
      setFormDataJadwalPelajaran({
        kelas: response.data.kelas.id,
        mataPelajaran: response.data.mataPelajaran.id,
        hari: response.data.hari,
        jamMulai: response.data.jamMulai,
        jamSelesai: response.data.jamSelesai,
        isActive: response.data.isActive,
        pengajar: response.data.pengajar.id,
      });
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormDataJadwalPelajaran((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    const {
      kelas,
      mataPelajaran,
      hari,
      jamMulai,
      jamSelesai,
      isActive,
      pengajar,
    } = formDataJadwalPelajaran;

    if (
      kelas.trim() === "" ||
      mataPelajaran.trim() === "" ||
      hari.trim() === "" ||
      jamMulai.trim() === "" ||
      jamSelesai.trim() === "" ||
      pengajar.trim() === ""
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
      const resp = await CreateJadwalPelajaran(
        kelas,
        mataPelajaran,
        hari,
        jamMulai,
        jamSelesai,
        isActive,
        pengajar
      );

      if (resp.status === 201 || resp.status === 200) {
        toast.success("Jadwal Pelajaran berhasil dibuat", {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        ClickCloseTambahJadwalPelajaran();
        getDataPaginated();
        setFormDataJadwalPelajaran({
          kelas: "",
          mataPelajaran: "",
          hari: "",
          jamMulai: "",
          jamSelesai: "",
          isActive: true,
          pengajar: "",
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
      kelas,
      mataPelajaran,
      hari,
      jamMulai,
      jamSelesai,
      isActive,
      pengajar,
    } = formDataJadwalPelajaran;
    if (
      kelas.trim() === "" ||
      mataPelajaran.trim() === "" ||
      hari.trim() === "" ||
      jamMulai.trim() === "" ||
      jamSelesai.trim() === "" ||
      pengajar.trim() === ""
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
      const resp = await UpdateJadwalPelajaran(
        getId,
        kelas,
        mataPelajaran,
        hari,
        jamMulai,
        jamSelesai,
        isActive,
        pengajar
      );

      if (resp.status === 201 || resp.status === 200) {
        toast.success("Jadwal Pelajaran berhasil diubah", {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        ClickCloseEditJadwalPelajaran();
        getDataPaginated();
        setFormDataJadwalPelajaran({
          kelas: "",
          mataPelajaran: "",
          hari: "",
          jamMulai: "",
          jamSelesai: "",
          isActive: true,
          pengajar: "",
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

  const ClickOpenTambahJadwalPelajaran = () => {
    setOpenTambahJadwalPelajaran(true);
  };

  const ClickCloseTambahJadwalPelajaran = () => {
    setOpenTambahJadwalPelajaran(false);
  };

  const ClickOpenEditJadwalPelajaran = (id) => {
    getOneData(id);
    setGetId(id);
    setOpenEditJadwalPelajaran(true);
  };

  const ClickCloseEditJadwalPelajaran = () => {
    setOpenEditJadwalPelajaran(false);
    setFormDataJadwalPelajaran({
      kelas: "",
      mataPelajaran: "",
      hari: "",
      jamMulai: "",
      jamSelesai: "",
      isActive: true,
      pengajar: "",
    });
  };

  useEffect(() => {
    getAllDataMapel();
    getAllDataKelas();
    getAllDataPegawai();
    getDataPaginated();
  }, [page, rowsPerPage, search]);
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
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        totalItems={totalItems}
        rowsPerPage={rowsPerPage}
        page={page}
        data={data}
        search={search}
        setSearch={setSearch}
      />

      <TambahJadwalPelajaranSd
        formDataJadwalPelajaran={formDataJadwalPelajaran}
        handleChange={handleChange}
        ClickCloseTambahJadwalPelajaran={ClickCloseTambahJadwalPelajaran}
        openTambahJadwalPelajaran={openTambahJadwalPelajaran}
        handleSubmitCreate={handleSubmitCreate}
        dataGuru={dataGuru}
        dataKelas={dataKelas}
        dataMapel={dataMapel}
      />

      <EditJadwalPelajaranSd
        formDataJadwalPelajaran={formDataJadwalPelajaran}
        handleChange={handleChange}
        ClickCloseEditJadwalPelajaran={ClickCloseEditJadwalPelajaran}
        openEditJadwalPelajaran={openEditJadwalPelajaran}
        handleSubmitEdit={handleSubmitEdit}
        dataGuru={dataGuru}
        dataKelas={dataKelas}
        dataMapel={dataMapel}
      />
    </div>
  );
}
