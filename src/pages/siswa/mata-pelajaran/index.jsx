// import React, { useState, useEffect } from "react";
// import {} from "@mui/material";
// import {} from "@mui/icons-material";
// import {} from "react-router-dom";

// export default function MataPelajaran() {
//   return (
//     <div>
//       <h1>Mata Pelajaran</h1>
//     </div>
//   );
// }
import React, { useState } from "react";
import { Typography, Box } from "@mui/material";

export default function MataPelajaran() {
  const [selectedDay, setSelectedDay] = useState("Senin");

  const jadwal = {
    Senin: [
      { waktu: "07.30 - 08.15", pelajaran: "Apel" },
      { waktu: "08.15 - 09.00", pelajaran: "PAI" },
      { waktu: "09.00 - 09.45", pelajaran: "Matematika" },
      { waktu: "09.45 - 10.30", pelajaran: "PKN" },
      { waktu: "10.30 - 11.15", pelajaran: "Akidah dan Tauhid" },
      { waktu: "11.15 - 12.00", pelajaran: "Bahasa Arab" },
      { waktu: "12.00 - 12.45", pelajaran: "Tahfidz" },
    ],
    Selasa: [
      { waktu: "07.30 - 08.15", pelajaran: "Bahasa Indonesia" },
      { waktu: "08.15 - 09.00", pelajaran: "Matematika" },
      { waktu: "09.00 - 09.45", pelajaran: "IPA" },
      { waktu: "10.45 - 11.30", pelajaran: "Bahasa Arab" },
      { waktu: "11.30 - 12.45", pelajaran: "Tahfidz" },
    ],
    Rabu: [
      { waktu: "07.30 - 08.15", pelajaran: "Tematik" },
      { waktu: "08.15 - 09.00", pelajaran: "PAI" },
    ],
    Kamis: [
      { waktu: "07.30 - 08.15", pelajaran: "Bahasa Inggris" },
      { waktu: "08.15 - 09.00", pelajaran: "Tahfidz" },
    ],
    Jumat: [
      { waktu: "07.30 - 08.15", pelajaran: "Akhlak" },
      { waktu: "08.15 - 09.00", pelajaran: "Olahraga" },
    ],
  };

  const hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];

  return (
    <div className="p-4">
      <Box className="bg-white rounded-lg shadow p-4 mb-4 text-center border-b border-gray-200">
        <Typography variant="h5" className="font-bold mb-1">
          Jadwal Pelajaran
        </Typography>
        <Typography variant="subtitle1" className="text-gray-700 font-semibold">
          Bambang Maulana SPd
        </Typography>
        <Typography variant="subtitle2" className="text-gray-600 font-semibold">
          Kelas 1
        </Typography>
      </Box>

      {/* Tabs Hari */}
      <div className="flex justify-center gap-2 mb-4">
        {hari.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-1 rounded-full border ${
              selectedDay === day ? "bg-[#85193C] text-white" : "bg-gray-200"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Isi Jadwal */}
      <div className="space-y-3">
        {(jadwal[selectedDay] || []).map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl px-4 py-3 shadow-sm border border-[#D3D3D3]"
          >
            <Typography variant="body1" className="font-semibold text-gray-800">
              {item.waktu} → {item.pelajaran}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

