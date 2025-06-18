import React, { useState, useEffect } from "react";
import { Typography, Button, Paper } from "@mui/material";
import { ExpandMore, ArrowBack, ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function RapotSiswa() {
  const navigate = useNavigate();
  const penilaianList = [
    {
      id: "kuis",
      label: "Nilai Kuis",
      to: "/siswa/e-rapot/detail/kuis",
    },
    {
      id: "tugas",
      label: "Nilai Tugas",
      to: "/siswa/e-rapot/detail/tugas",
    },
    {
      id: "uts",
      label: "Rapot UTS",
      to: "/siswa/e-rapot/detail/uts",
    },
    {
      id: "uas",
      label: "Rapot UAS",
      to: "/siswa/e-rapot/detail/uas",
    },
  ];

  return (
    <div className="p-3">
      <Button
        onClick={() => navigate(-1)}
        startIcon={<ArrowBack />}
        sx={{ color: "#85193C" }}
      >
        Kembali
      </Button>
      <Typography
        sx={{
          fontSize: "1.3rem",
          color: "#85193C",
          textAlign: "center",
          my: 1,
        }}
      >
        Lihat Rapot Dan Penilaian
      </Typography>
      <div className="max-w-4xl mx-auto space-y-4">
        {penilaianList.map((item) => (
          <Paper
            key={item.id}
            className="p-4 cursor-pointer hover:shadow-md transition-shadow"
            variant="outlined"
            onClick={() => navigate(item.to)}
          >
            <div className="flex justify-between items-center">
              <Typography fontWeight="bold" fontSize="1rem">
                {item.label}
              </Typography>
              <ArrowForward />
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
}
