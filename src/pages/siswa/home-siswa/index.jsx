import React, { useState, useEffect } from "react";
import { Typography, Card, CardContent, Box, Avatar } from "@mui/material";
import {
  AssignmentTurnedIn,
  School,
  MenuBook,
  MonetizationOn,
  Store,
  Class,
  AssignmentLate,
} from "@mui/icons-material";
import {} from "react-router-dom";
import HeroSection from "./component/hero-siswa";
import CardMenu from "./component/card-menu";
import { GetProfile } from "../../../api/profile-siswa.api";
import { getUcapanSiswa } from "../../../api/absensi-siswa.api";
import { Player } from "@lottiefiles/react-lottie-player";

const allMenus = [
  { title: "Absen", icon: <AssignmentTurnedIn />, url: "/siswa/absen" },
  { title: "E-Rapot", icon: <School />, url: "/siswa/rapot" },
  { title: "Mata Pelajaran", icon: <MenuBook />, url: "/siswa/mata-pelajaran" },
  {
    title: "Informasi Kelas",
    icon: <AssignmentLate />,
    url: "/siswa/informasi-kelas",
  },
  { title: "Pembayaran", icon: <MonetizationOn />, url: "/siswa/pembayaran" },
  // { title: "Koperasi", icon: <Store />, url: "/koperasi" },
];

const getMenusByGroup = (kelompok) => {
  switch (kelompok) {
    case 1:
    case "KELOMPOK1":
      return allMenus.filter((menu) =>
        ["E-Rapot", "Koperasi", "Informasi Kelas", "Mata Pelajaran"].includes(
          menu.title
        )
      );
    case 2:
    case "KELOMPOK2":
      return allMenus.filter((menu) =>
        ["Absen", "Koperasi", "Informasi Kelas", "Mata Pelajaran"].includes(
          menu.title
        )
      );
    case 3:
    case "KELOMPOK3":
      return allMenus.filter((menu) =>
        [
          "Pembayaran",
          "Koperasi",
          "Informasi Kelas",
          "Mata Pelajaran",
        ].includes(menu.title)
      );
    case null:
    case undefined:
      return allMenus;
    default:
      // Fallback untuk nilai lain: Semua menu
      return allMenus;
  }
};
export default function HomeSiswa() {
  const [profile, setProfile] = useState("");
  const [userGroup, setUserGroup] = useState("");
  const [filteredMenus, setFilteredMenus] = useState([]);
  const [ucapan, setUcapan] = useState("");

  const fetchProfile = async () => {
    const resp = await GetProfile();
    if (resp?.data) {
      setProfile(resp.data);
      const kelompokValue = resp.data.kelompok;
      setUserGroup(kelompokValue);

      const allowedMenus = getMenusByGroup(kelompokValue);
      setFilteredMenus(allowedMenus);
    } else {
      console.error("Gagal mendapatkan data profil");
    }
  };

  const fetchUcapan = async () => {
    const resp = await getUcapanSiswa();
    if (resp.data) {
      setUcapan(resp.data);
    } else {
      console.error("Gagal mendapatkan data Ucapan");
    }
  };

  useEffect(() => {
    fetchUcapan();
    fetchProfile();
  }, []);
  return (
    <div>
      <HeroSection profile={profile} />

      <div className="p-3">
        {ucapan?.ucapan && (
          <Card
            sx={{
              my: 3,
              px: 2,
              py: 2,
              bgcolor: "#FFEDED",
              border: "2px dashed #FF9AA2",
              borderRadius: "16px",
              maxWidth: 360,
              mx: "auto",
              boxShadow: "0 4px 8px rgba(255, 154, 162, 0.3)",
              position: "relative",
              overflow: "visible",
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#FFD1DC",
                width: 60,
                height: 60,
                fontSize: 32,
                position: "absolute",
                top: -30,
                left: "calc(50% - 30px)",
                border: "2px solid white",
              }}
            >
              <Player
                autoplay
                loop
                src="/assets/emote-sick.json"
                style={{ height: "50px", width: "50px" }}
              />
            </Avatar>

            <CardContent sx={{ paddingBottom: "10px !important" }}>
              <Typography
                sx={{
                  color: "#D7263D",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "1.2rem",
                  mt: 1,
                  mb: 1,
                  fontFamily: '"Comic Sans MS", cursive',
                }}
              >
                {profile.namaLengkap}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#444",
                  textAlign: "center",
                  fontSize: "1rem",
                  fontFamily: '"Comic Sans MS", cursive',
                }}
              >
                {ucapan.ucapan}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  textAlign: "center",
                  color: "#888",
                  fontSize: "0.75rem",
                  fontStyle: "italic",
                  mt: 1,
                  fontFamily: '"Comic Sans MS", cursive',
                }}
              >
                Pesan ini ditulis oleh wali kelasmu ❤️
              </Typography>
            </CardContent>
          </Card>
        )}
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
        <CardMenu filteredMenus={filteredMenus} />
      </div>
    </div>
  );
}
