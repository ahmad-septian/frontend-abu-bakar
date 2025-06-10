import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ListSiswa from "./component/ListSiswa";
import { GetListSiswaPerWalikelas } from "../../../api/pegawai.api";
import {
  AbsensiSiswa,
  getAbsensiByTanggal,
} from "../../../api/absensi-siswa.api";

const statusIcons = {
  masuk: { icon: <CheckCircleIcon sx={{ color: "green" }} />, label: "Masuk" },
  alfa: { icon: <CancelIcon sx={{ color: "red" }} />, label: "Tidak Masuk" },
  izin: { icon: <DescriptionIcon sx={{ color: "blue" }} />, label: "Izin" },
  sakit: { icon: <LocalHospitalIcon sx={{ color: "teal" }} />, label: "Sakit" },
};

const AbsenSiswaGuru = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [siswaData, setSiswaData] = useState([]);
  const [summartData, setSummartData] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogStatus, setDialogStatus] = useState("");
  const [formKeterangan, setFormKeterangan] = useState("");
  const [formUcapan, setFormUcapan] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [search, setSearch] = useState("");

  const fetchDataSiswa = async () => {
    try {
      // Ambil data siswa
      const siswaResponse = await GetListSiswaPerWalikelas(search);
      const siswaList = siswaResponse.data.data;

      // Ambil data absensi sekaligus summary dari API
      const tanggalFormatted = selectedDate.toISOString().split("T")[0];
      const absensiResponse = await getAbsensiByTanggal(tanggalFormatted);

      // Data absensi siswa
      const dataAbsensi = absensiResponse.data.data || [];
      // Summary absensi
      const summaryAbsensi = absensiResponse.data.summary || {
        MASUK: 0,
        ALFA: 0,
        IZIN: 0,
        SAKIT: 0,
      };

      // Mapping status dari API ke kode internal
      const mapStatus = {
        MASUK: "masuk",
        ALFA: "alfa",
        IZIN: "izin",
        SAKIT: "sakit",
      };

      // Gabungkan data siswa dengan absensinya
      const siswaGabungan = siswaList.map((siswa) => {
        const absensi = dataAbsensi.find(
          (a) => String(a.siswa.id) === String(siswa.id)
        );

        const statusAPI = absensi?.status || null;
        const status = statusAPI ? mapStatus[statusAPI.toUpperCase()] : null;

        return {
          ...siswa,
          status,
          keterangan: absensi?.keterangan || "",
          ucapan: absensi?.ucapan || "",
        };
      });

      // Set state siswa dan summary
      setSiswaData(siswaGabungan);
      setSummartData(summaryAbsensi);
    } catch (error) {
      console.error("Gagal mengambil data siswa/absensi:", error);
    }
  };

  const handleOpenMenu = (event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedIndex(null);
  };

  const handleStatusChange = (status) => {
    if (selectedIndex !== null) {
      if (status === "izin" || status === "sakit") {
        setDialogOpen(true);
        setDialogStatus(status);
        return;
      }
      setSiswaData((prev) =>
        prev.map((s, idx) =>
          idx === selectedIndex
            ? { ...s, status, keterangan: "", ucapan: "" }
            : s
        )
      );
    }
    handleCloseMenu();
  };

  const handleDialogSubmit = () => {
    if (selectedIndex !== null) {
      setSiswaData((prev) =>
        prev.map((s, idx) =>
          idx === selectedIndex
            ? {
                ...s,
                status: dialogStatus,
                keterangan: formKeterangan,
                ucapan: dialogStatus === "sakit" ? formUcapan : "",
              }
            : s
        )
      );
    }
    setDialogOpen(false);
    setFormKeterangan("");
    setFormUcapan("");
    handleCloseMenu();
  };

  const handleAbsensiSiswa = async () => {
    const dataAbsen = siswaData
      .filter((s) => s.status)
      .map((s) => ({
        idSiswa: s.id,
        status: s.status.toUpperCase(),
        keterangan: s.keterangan || "",
        ucapan: s.ucapan || "",
      }));

    if (dataAbsen.length === 0)
      return toast.warning("Belum ada siswa yang diabsen");

    try {
      const response = await AbsensiSiswa({
        tanggal: selectedDate.toISOString().split("T")[0], // Kirim tanggal ke backend
        absen: dataAbsen,
      });
      setSummartData(response.data.summary);
      toast.success("Siswa berhasil di-absen");
      fetchDataSiswa();
    } catch (error) {
      console.error("Error submitting absensi siswa:", error);
      toast.error("Terjadi kesalahan saat meng-absen siswa");
    }
  };

  useEffect(() => {
    fetchDataSiswa();
  }, [selectedDate, search]);

  const statusList = [
    { key: "hadir", label: "Masuk", color: "green" },
    { key: "izin", label: "Izin", color: "blue" },
    { key: "sakit", label: "Sakit", color: "orange" },
    { key: "absen", label: "Tidak Masuk", color: "red" },
  ];

  const rekapTanggal = [
    { tanggal: "2025-06-30", hadir: 20, izin: 1, sakit: 0, absen: 2 },
    { tanggal: "2025-07-01", hadir: 25, izin: 0, sakit: 1, absen: 3 },
  ];

  const events = rekapTanggal.flatMap((item) =>
    statusList.map((status) => ({
      title: `${status.label}: ${item[status.key]} Siswa`,
      date: item.tanggal,
      color: status.color,
      allDay: true,
    }))
  );

  return (
    <Box>
      <Button
        onClick={() => navigate(-1)}
        startIcon={<ArrowBack />}
        sx={{ color: "#85193C" }}
      >
        Kembali
      </Button>

      <ListSiswa
        siswaData={siswaData}
        events={events}
        statusIcons={statusIcons}
        anchorEl={anchorEl}
        handleCloseMenu={handleCloseMenu}
        handleStatusChange={handleStatusChange}
        handleOpenMenu={handleOpenMenu}
        handleAbsensiSiswa={handleAbsensiSiswa}
        summartData={summartData}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        setSearch={setSearch}
        search={search}
      />

      {/* Dialog Keterangan */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>
          {dialogStatus === "izin"
            ? "Isi Keterangan Izin"
            : "Isi Keterangan dan Ucapan Sakit"}
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Keterangan"
            value={formKeterangan}
            onChange={(e) => setFormKeterangan(e.target.value)}
            margin="normal"
          />
          {dialogStatus === "sakit" && (
            <TextField
              fullWidth
              label="Ucapan"
              value={formUcapan}
              onChange={(e) => setFormUcapan(e.target.value)}
              margin="normal"
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Batal</Button>
          <Button onClick={handleDialogSubmit} variant="contained">
            Simpan
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AbsenSiswaGuru;
