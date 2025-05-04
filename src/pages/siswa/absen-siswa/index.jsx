import React, { useEffect, useState } from "react";
import { Typography, TextField } from "@mui/material";

export default function AbsensiSiswa() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = time.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = time.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div>
      {/* History Absen */}

      <div className="mt-3 px-3">
        <Typography
          variant="h6"
          sx={{ mb: 1, textAlign: "center" }}
          className="text-[#85193C] font-semibold"
        >
          Riwayat Absensi
        </Typography>

        <div className="space-y-2">
          {[
            { date: "Jumat, 03 Mei 2024", clockIn: "08:01", clockOut: "16:02" },
            { date: "Kamis, 02 Mei 2024", clockIn: "08:03", clockOut: "16:00" },
            { date: "Rabu, 01 Mei 2024", clockIn: "08:05", clockOut: "15:45" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#FDF8F5] rounded-xl px-4 py-3 shadow-sm border border-[#f1e3e3] my-4"
            >
              <Typography variant="body1" className="font-medium text-gray-800">
                {item.date}
              </Typography>
              <div className="flex justify-between text-sm text-gray-600">
                <span>
                  Masuk: <strong>{item.clockIn}</strong>
                </span>
                <span>
                  Pulang: <strong>{item.clockOut}</strong>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
