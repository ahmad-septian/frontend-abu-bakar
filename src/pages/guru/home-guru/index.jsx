import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {} from "@mui/icons-material";
import {} from "react-router-dom";
import HeroSection from "./component/hero-guru";
import CardMenu from "./component/card-menu";
import { GetProfileGuru } from "../../../api/profile-guru.api";

export default function HomeGuru() {
  const [profile, setProfile] = useState("");

  const fetchProfile = async () => {
    const resp = await GetProfileGuru();
    if (resp?.data) {
      setProfile(resp.data);
    } else {
      console.error("Gagal mendapatkan data profil");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div>
      <HeroSection profile={profile} />

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
          Menu Untuk Guru
        </Typography>
        <CardMenu />
      </div>
    </div>
  );
}
