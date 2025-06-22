import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import {} from "@mui/icons-material";
import {} from "react-router-dom";
import {
  getPenambahanWaktuGuru,
  RequestPenambahanWaktuGuru,
} from "../../../../api/penambahan-waktu.api";
import { FormatTanggal } from "../../../../component-global/format-tanggal";
import BuatPengajuan from "./BuatPengajuan";
import { GetJapelGuru } from "../../../../api/rapot.api";
import { toast } from "react-toastify";

export default function PenambahanWaktu() {
  const [data, setData] = useState([]);
  const [mataPelajaran, setMataPelajaran] = useState([]);
  const [openPenambahanWaktu, setOpenPenambahanWaktu] = useState(false);
  const [formData, setFormData] = useState({
    jadwalPelajaranId: "",
    assessmentType: "",
    requestedEndDate: "",
    alasan: "",
  });

  const fetchData = async () => {
    try {
      const response = await getPenambahanWaktuGuru();
      setData(response);
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fetchDataMapel = async () => {
    try {
      const response = await GetJapelGuru();
      setMataPelajaran(response.data);
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  const hadleSubmitPenambahanWaktu = async (e) => {
    e.preventDefault();
    const { jadwalPelajaranId, assessmentType, requestedEndDate, alasan } =
      formData;

    if (
      jadwalPelajaranId.trim() === "" ||
      assessmentType.trim() === "" ||
      requestedEndDate.trim() === "" ||
      alasan.trim() === ""
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
      const resp = await RequestPenambahanWaktuGuru(
        jadwalPelajaranId,
        assessmentType,
        requestedEndDate,
        alasan
      );

      if (resp.status === 201 || resp.status === 200) {
        toast.success("Penambahan Waktu berhasil dibuat", {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        ClickClosePenambahanWaktu();
        fetchData();
        setFormData({
          jadwalPelajaranId: "",
          assessmentType: "",
          requestedEndDate: "",
          alasan: "",
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

  const ClickOpenPenambahanWaktu = async () => {
    await fetchDataMapel();
    setOpenPenambahanWaktu(true);
  };

  const ClickClosePenambahanWaktu = () => {
    setOpenPenambahanWaktu(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Riwayat Permintaan Penambahan Waktu
      </h1>

      <Button
        onClick={ClickOpenPenambahanWaktu}
        variant="contained"
        sx={{ mb: 2, backgroundColor: "#85193C" }}
      >
        Buat Pengajuan
      </Button>

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
            </div>
          ))}
        </div>
      )}
      <BuatPengajuan
        handleChange={handleChange}
        ClickClosePenambahanWaktu={ClickClosePenambahanWaktu}
        openPenambahanWaktu={openPenambahanWaktu}
        formData={formData}
        mataPelajaran={mataPelajaran}
        hadleSubmitPenambahanWaktu={hadleSubmitPenambahanWaktu}
      />
    </div>
  );
}
