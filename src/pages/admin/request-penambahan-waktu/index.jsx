import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import {} from "react-router-dom";
import {
  ApprovedPenambahanWaktu,
  getNotifPenambahanWaktuAdmin,
} from "../../../api/penambahan-waktu.api";
import { FormatTanggal } from "../../../component-global/format-tanggal";
import { toast } from "react-toastify";

export default function RequestPenambahanWaktu() {
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    status: "",
    requestedEndDate: "",
  });
  const [getId, setGetId] = useState("");

  const fetchData = async () => {
    try {
      const response = await getNotifPenambahanWaktuAdmin();
      setData(response);
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await ApprovedPenambahanWaktu(
        getId,
        formData.status,
        formData.requestedEndDate
      );

      if (resp.status === 201 || resp.status === 200) {
        toast.success("Permintaan Penambahan Waktu berhasil dibuat", {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        fetchData();
        setFormData({
          status: "",
          requestedEndDate: "",
        });
        setOpenDialog(false);
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

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Request Permintaan Penambahan Waktu
      </h1>

      {data.length === 0 ? (
        <div className="text-gray-500">Belum ada permintaan.</div>
      ) : (
        <div className="space-y-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-xl p-4 border border-gray-200"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                <span
                  className={`text-sm font-semibold px-3 py-1 rounded-full w-fit ${
                    item.status === "APPROVED"
                      ? "bg-green-100 text-green-700"
                      : item.status === "REJECTED"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="mb-2">
                <p className="text-sm text-gray-500">Mata Pelajaran</p>
                <p className="text-gray-800 capitalize">
                  {item.jadwalPelajaran?.mataPelajaran?.namaMataPelajaran}
                </p>
              </div>
              <div className="mb-2">
                <p className="text-sm text-gray-500">Nama Pengajar</p>
                <p className="text-gray-800 capitalize">
                  {item.requestedBy?.namaLengkap}
                </p>
              </div>
              <div className="mb-2">
                <p className="text-sm text-gray-500">Tipe Penilaian</p>
                <p className="text-gray-800 capitalize">
                  {item.assessmentType}
                </p>
              </div>

              <div className="mb-2">
                <p className="text-sm text-gray-500">Tanggal Diminta</p>
                <p className="text-gray-800">
                  {FormatTanggal(item.requestedEndDate)}
                </p>
              </div>

              <div className="mb-2">
                <p className="text-sm text-gray-500">Alasan</p>
                <p className="text-gray-800">{item.alasan || "-"}</p>
              </div>

              {item.status === "APPROVED" && (
                <div>
                  <p className="text-sm text-gray-500">Disetujui Pada</p>
                  <p className="text-gray-800">
                    {FormatTanggal(item.approved_at)}
                  </p>
                </div>
              )}

              {item.status === "PENDING" && (
                <Button
                  sx={{
                    backgroundColor: "#85193C",
                  }}
                  variant="contained"
                  size="small"
                  onClick={() => {
                    handleOpenDialog();
                    setGetId(item.id);
                  }}
                >
                  Tindakan
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Setujui / Tolak Permintaan</DialogTitle>
        <DialogContent className="space-y-4 py-2">
          <FormControl fullWidth margin="dense" size="small">
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <MenuItem value="APPROVED">APPROVED</MenuItem>
              <MenuItem value="REJECTED">REJECTED</MenuItem>
            </Select>
          </FormControl>

          <TextField
            margin="dense"
            size="small"
            fullWidth
            type="date"
            value={formData.date}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Batal</Button>
          <Button onClick={handleSubmit} variant="contained">
            Kirim
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
