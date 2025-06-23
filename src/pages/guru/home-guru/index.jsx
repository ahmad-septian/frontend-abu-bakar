import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {
  AssignmentTurnedIn,
  School,
  MenuBook,
  AssignmentLate,
} from "@mui/icons-material";
import {} from "react-router-dom";
import HeroSection from "./component/hero-guru";
import CardMenu from "./component/card-menu";
import { GetProfileGuru } from "../../../api/profile-guru.api";
import AbsensiGuru from "./component/card-absensi";

const allMenus = [
  // {
  //   title: "Absensi Guru",
  //   icon: <EventAvailable />,
  //   url: "/guru/absen-guru",
  // },
  {
    title: "Presensi Siswa",
    icon: <AssignmentTurnedIn />,
    url: "/guru/presensi-siswa",
  },
  {
    title: "Input E-Rapot",
    icon: <School />,
    url: "/guru/e-rapot",
  },
  {
    title: "Jadwal Hari Ini",
    icon: <MenuBook />,
    url: "/guru/jadwal-guru",
  },
  {
    title: "Info Kelas",
    icon: <AssignmentLate />,
    url: "/guru/informasi-kelas",
  },
];

const getMenusByGroup = (kelompok) => {
  switch (kelompok) {
    case 1:
    case "KELOMPOK1":
      return allMenus.filter((menu) =>
        ["Input E-Rapot", "Jadwal Hari Ini"].includes(menu.title)
      );
    case 2:
    case "KELOMPOK2":
      return allMenus.filter((menu) =>
        ["Presensi Siswa", "Absensi Guru", "Jadwal Hari Ini"].includes(
          menu.title
        )
      );
    case 3:
    case "KELOMPOK3":
    case null:
    case undefined:
      return allMenus;
    default:
      // Fallback untuk nilai lain: Semua menu
      return allMenus;
  }
};

export default function HomeGuru() {
  const [profile, setProfile] = useState("");
  const [userGroup, setUserGroup] = useState("");
  const [filteredMenus, setFilteredMenus] = useState([]);

  const fetchProfile = async () => {
    const resp = await GetProfileGuru();
    if (resp?.data) {
      setProfile(resp.data);
      const kelompokValue = resp.data.kelompok; // Ambil nilai dari response
      setUserGroup(kelompokValue);

      // Gunakan kelompokValue langsung, bukan userGroup state
      const allowedMenus = getMenusByGroup(kelompokValue);
      setFilteredMenus(allowedMenus);
    } else {
      console.error("Gagal mendapatkan data profil");
      setFilteredMenus([]);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div>
      <HeroSection profile={profile} />
      {/* <AbsensiGuru /> */}

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
        <CardMenu filteredMenus={filteredMenus} />
      </div>
    </div>
  );
}
