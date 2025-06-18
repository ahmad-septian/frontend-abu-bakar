import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {} from "@mui/icons-material";
import { toast } from "react-toastify";
import TambahAssessmentPeriod from "./component/Tambah";
import ListAssessmentPeriod from "./component/List";
import EditAssessmentPeriod from "./component/Edit";
import {
  CreateAssessmentPeriod,
  DeleteAssessmentPeriod,
  GetAssessmentPeriodPaginated,
  GetOneAssessmentPeriod,
  UpdateAssessmentPeriod,
} from "../../../api/master-input-nilai.api";
import { GetAllTahunAjaran } from "../../../api/tahunAjaran.api";

export default function AssessmentPeriod() {
  const [openTambah, setOpenTambah] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [formDataCreate, setFormDataCreate] = useState({
    assessmentTypes: [],
    tahunAjaranId: "",
    startDate: "",
    endDate: "",
    isLocked: false,
  });

  const [formDataUpdate, setFormDataUpdate] = useState({
    assessmentTypes: "",
    tahunAjaranId: "",
    startDate: "",
    endDate: "",
    isLocked: false,
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [getId, setGetId] = useState("");
  const [dataTahunAjaran, setDataTahunAjaran] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getDataPaginated = async () => {
    try {
      const response = await GetAssessmentPeriodPaginated(
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
      const response = await GetOneAssessmentPeriod(id);
      setFormDataUpdate({
        assessmentTypes: response.data.assessmentType,
        tahunAjaranId: response.data?.tahunAjaran?.id,
        startDate: response.data.start_date,
        endDate: response.data.end_date,
        isLocked: response.data.is_locked,
      });
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  const ClickDelete = async (id) => {
    try {
      await DeleteAssessmentPeriod(id);
      getDataPaginated();
      toast.success("Assessment period berhasil dihapus", {
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Error deleting assessment period", error);
    }
  };

  const getAllTahunAjaran = async () => {
    try {
      const response = await GetAllTahunAjaran();
      setDataTahunAjaran(response.data);
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    const { assessmentTypes, tahunAjaranId, startDate, endDate, isLocked } =
      formDataCreate;

    if (!assessmentTypes || !tahunAjaranId || !startDate || !endDate) {
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
      const resp = await CreateAssessmentPeriod(
        assessmentTypes,
        tahunAjaranId,
        startDate,
        endDate,
        isLocked
      );

      if (resp.status === 201 || resp.status === 200) {
        toast.success("Assessment period berhasil dibuat", {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        ClickCloseTambah();
        getDataPaginated();
        setFormDataCreate({
          assessmentTypes: [],
          tahunAjaranId: "",
          startDate: "",
          endDate: "",
          isLocked: false,
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
    const { assessmentTypes, tahunAjaranId, startDate, endDate, isLocked } =
      formDataUpdate;

    if (!assessmentTypes || !tahunAjaranId || !startDate || !endDate) {
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
      const resp = await UpdateAssessmentPeriod(
        getId,
        assessmentTypes,
        tahunAjaranId,
        startDate,
        endDate,
        isLocked
      );

      if (resp.status === 201 || resp.status === 200) {
        toast.success("Assessment period berhasil diubah", {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        ClickCloseEdit();
        getDataPaginated();
        setFormDataUpdate({
          assessmentTypes: "",
          tahunAjaranId: "",
          startDate: "",
          endDate: "",
          isLocked: false,
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

  const handleCreateChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormDataCreate((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : Array.isArray(value) ? value : value,
    }));
  };

  const handleUpdateChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormDataUpdate((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const ClickOpenTambah = () => {
    getAllTahunAjaran();
    setOpenTambah(true);
  };

  const ClickCloseTambah = () => {
    setOpenTambah(false);
    setFormDataCreate({
      assessmentTypes: [],
      tahunAjaranId: "",
      startDate: "",
      endDate: "",
      isLocked: false,
    });
  };

  const ClickOpenEdit = (id) => {
    getAllTahunAjaran();
    getOneData(id);
    setGetId(id);
    setOpenEdit(true);
  };

  const ClickCloseEdit = () => {
    setOpenEdit(false);
    setFormDataUpdate({
      assessmentTypes: "",
      tahunAjaranId: "",
      startDate: "",
      endDate: "",
      isLocked: false,
    });
  };

  useEffect(() => {
    getDataPaginated();
  }, [page, rowsPerPage, search]);
  return (
    <div>
      <Typography sx={{ fontSize: "1.5rem" }}>
        Master Assessment Period
      </Typography>
      <ListAssessmentPeriod
        ClickOpenTambah={ClickOpenTambah}
        ClickOpenEdit={ClickOpenEdit}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        totalItems={totalItems}
        rowsPerPage={rowsPerPage}
        page={page}
        data={data}
        setSearch={setSearch}
        ClickDelete={ClickDelete}
      />
      <TambahAssessmentPeriod
        openTambah={openTambah}
        formDataCreate={formDataCreate}
        ClickCloseTambah={ClickCloseTambah}
        handleCreateChange={handleCreateChange}
        handleSubmitCreate={handleSubmitCreate}
        dataTahunAjaran={dataTahunAjaran}
      />

      <EditAssessmentPeriod
        formDataUpdate={formDataUpdate}
        ClickCloseEdit={ClickCloseEdit}
        openEdit={openEdit}
        handleSubmitEdit={handleSubmitEdit}
        handleUpdateChange={handleUpdateChange}
        dataTahunAjaran={dataTahunAjaran}
      />
    </div>
  );
}
