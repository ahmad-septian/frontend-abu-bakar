import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { ArrowBack, Call } from "@mui/icons-material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import {
  getRekapAbsensiForSiswa,
  getRekapAbsensiSummaryForSiswa,
} from "../../../api/absensi-siswa.api";
import { useNavigate } from "react-router-dom";
import { FormatTanggal } from "../../../component-global/format-tanggal";
import { GetProfile } from "../../../api/profile-siswa.api";

export default function AbsensiSiswa() {
  const navigate = useNavigate();
  const [rekapData, setRekapData] = useState([]);
  const [summary, setSummary] = useState("");
  const [waliKelas, setWaliKelas] = useState("");

  const fetchWaliKelas = async () => {
    try {
      const response = await GetProfile();
      setWaliKelas(response.data?.kelas?.waliKelas);
    } catch (error) {
      console.error("Error fetching wali kelas:", error);
    }
  };

  const fetchRekapAbsenSiswa = async () => {
    try {
      const response = await getRekapAbsensiForSiswa();
      setRekapData(response.data);
    } catch (error) {
      console.error("Error fetching rekap absensi siswa:", error);
    }
  };

  const fetchSummaryAbsenSiswa = async () => {
    try {
      const response = await getRekapAbsensiSummaryForSiswa();
      setSummary(response.data);
    } catch (error) {
      console.error("Error fetching summary absensi siswa:", error);
    }
  };

  useEffect(() => {
    fetchWaliKelas();
    fetchRekapAbsenSiswa();
    fetchSummaryAbsenSiswa();
  }, []);

  const statusList = [
    { key: "MASUK", label: "Masuk", color: "green" },
    { key: "SAKIT", label: "Sakit", color: "orange" },
    { key: "IZIN", label: "Izin", color: "blue" },
    { key: "ALFA", label: "Alfa", color: "red" },
  ];

  const events = rekapData.map((item) => {
    const status = statusList.find((s) => s.key === item.status);
    return {
      date: item.tanggal,
      color: status ? status.color : "gray",
      allDay: true,
    };
  });

  const statusMap = {
    MASUK: { color: "#4CAF50", label: "MASUK" }, // green
    SAKIT: { color: "#FF9800", label: "SAKIT" }, // orange
    IZIN: { color: "#2196F3", label: "IZIN" }, // blue
    ALFA: { color: "#F44336", label: "ALFA" }, // red
  };

  const noHpWaliKelas = "6285155123714";
  const namaWali = waliKelas?.namaLengkap;

  const message = `Assalamualaikum Bpk/Ibu ${namaWali}`;
  const encodedMessage = encodeURIComponent(message); // encode supaya URL valid
  const whatsappUrl = `https://wa.me/${noHpWaliKelas}?text=${encodedMessage}`;

  return (
    <div className="mt-3 px-3">
      <Button
        onClick={() => navigate(-1)}
        startIcon={<ArrowBack />}
        sx={{ color: "#85193C" }}
      >
        Kembali
      </Button>

      <div className="w-full max-w-full overflow-x-auto">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          height="auto"
        />
      </div>
      <div className="flex flex-wrap gap-3 items-center mt-3 mb-2">
        {statusList.map((status) => (
          <div key={status.key} className="flex items-center gap-2">
            <span
              className="inline-block w-4 h-4 rounded"
              style={{ backgroundColor: status.color }}
            />
            <span className="text-sm text-gray-700">{status.key}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-4">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "100%" }}
        >
          <Button
            sx={{ backgroundColor: "#85193C", py: 1.5, borderRadius: "50px" }}
            startIcon={<Call />}
            fullWidth
            variant="contained"
          >
            Hubungi Wali Kelas
          </Button>
        </a>
      </div>

      {/* Card List */}
      <div className="px-1 mt-4 h-[calc(100vh-200px)] flex flex-col">
        {/* Judul Bulan */}
        <h2 className="text-xl font-semibold text-center mb-4">
          Riwayat Absen
        </h2>

        {/* Scrollable Riwayat */}
        <div className="overflow-y-auto flex-1 pr-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {rekapData.map((item) => {
              const status = statusMap[item.status];
              return (
                <div
                  key={item.tanggal}
                  className="rounded-lg shadow-md p-4 text-white"
                  style={{ backgroundColor: status?.color || "#9E9E9E" }}
                >
                  <p className="text-sm font-medium">
                    {FormatTanggal(item.tanggal)}
                  </p>
                  <p className="text-lg font-bold">
                    {status?.label || item.status}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Rekap (tidak ikut scroll) */}
        <div className="mt-2 flex justify-center items-center bg-[#85193C] text-white sticky bottom-0 z-10 py-2 shadow-md rounded-md">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} textAlign={"center"}>
              <Typography fontWeight="bold">{summary.MASUK}</Typography>
              <Typography variant="body2">Masuk</Typography>
            </Grid>
            <Grid item xs={12} sm={6} textAlign={"center"}>
              <Typography fontWeight="bold">{summary.ALFA}</Typography>
              <Typography variant="body2">Tidak Masuk</Typography>
            </Grid>
            <Grid item xs={12} sm={6} textAlign={"center"}>
              <Typography fontWeight="bold">{summary.IZIN}</Typography>
              <Typography variant="body2">Izin</Typography>
            </Grid>
            <Grid item xs={12} sm={6} textAlign={"center"}>
              <Typography fontWeight="bold">{summary.SAKIT}</Typography>
              <Typography variant="body2">Sakit</Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
