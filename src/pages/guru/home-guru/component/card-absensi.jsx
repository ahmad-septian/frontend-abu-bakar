import React, { useState } from "react";
import { Button } from "@mui/material";
import { Login, Logout } from "@mui/icons-material";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(weekday);
dayjs.extend(localizedFormat);
dayjs.locale("id");

const AbsensiGuru = () => {
  const [absenMasuk, setAbsenMasuk] = useState(null);
  const [absenKeluar, setAbsenKeluar] = useState(null);
  const [terlambat, setTerlambat] = useState(false);

  const now = dayjs();
  const jamSekarang = now.format("HH:mm:ss");
  const jamTerlambat = dayjs().hour(7).minute(0).second(0);
  const jamPulang = dayjs().hour(17).minute(0).second(0);

  const bisaClockOut = now.isAfter(jamPulang);

  const handleClockIn = () => {
    if (!absenMasuk) {
      setAbsenMasuk(jamSekarang);
      setTerlambat(dayjs().isAfter(jamTerlambat)); // Cek keterlambatan saat klik
    }
  };

  const handleClockOut = () => {
    if (!absenKeluar && bisaClockOut) {
      setAbsenKeluar(jamSekarang);
    }
  };

  return (
    <div className="bg-white text-black shadow-md p-4 mt-6 w-full rounded-lg">
      <div className="flex justify-between items-center text-xs sm:text-sm mb-4">
        <span>Absensi Guru</span>
        <span className="text-gray-500">
          {dayjs().format("ddd, DD MMM YYYY")}
        </span>
      </div>

      {terlambat && (
        <div className="text-red-600 text-lg font-semibold mb-2 text-center">
          Maaf Anda Sudah Terlambat !
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {/* Absen Masuk */}
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <p className="text-sm font-semibold mb-1">Absen Masuk</p>
          <p className="text-lg font-bold">{absenMasuk ?? "--:--:--"}</p>
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 1,
              bgcolor: "#85193C",
              borderRadius: 8,
              textTransform: "none",
            }}
            startIcon={<Login />}
            onClick={handleClockIn}
            disabled={!!absenMasuk}
          >
            Clock In
          </Button>
        </div>

        {/* Absen Keluar */}
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <p className="text-sm font-semibold mb-1">Absen Keluar</p>
          <p className="text-lg font-bold">{absenKeluar ?? "--:--:--"}</p>
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 1,
              bgcolor: "#85193C",
              borderRadius: 8,
              textTransform: "none",
            }}
            endIcon={<Logout />}
            onClick={handleClockOut}
            disabled={!bisaClockOut || !!absenKeluar}
          >
            Clock Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AbsensiGuru;
