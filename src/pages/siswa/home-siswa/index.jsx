import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {} from "@mui/icons-material";
import {} from "react-router-dom";
import HeroSection from "./component/hero-siswa";
import CardMenu from "./component/card-menu";

export default function HomeSiswa() {
  return (
    <div>
      <HeroSection />

      <div>
        <Typography
          variant="h5"
          className="text-[#85193C] font-semibold mt-5 mb-3"
          sx={{
            fontSize: { xs: "1.2rem", sm: "2rem" },
            textAlign: "center",
            mt: 2,
            mb: 2,
          }}
        >
          Rekomendasi Menu
        </Typography>
        <CardMenu />
      </div>
    </div>
  );
}
