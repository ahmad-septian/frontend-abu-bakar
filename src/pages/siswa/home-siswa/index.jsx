import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {
  AssignmentTurnedIn,
  School,
  MenuBook,
  MonetizationOn,
  AssignmentLate,
} from "@mui/icons-material";
import {} from "react-router-dom";
import HeroSection from "./component/hero-siswa";
import CardMenu from "./component/card-menu";
import { GetProfile } from "../../../api/profile-siswa.api";
import { getUcapanSiswa } from "../../../api/absensi-siswa.api";
import UcapanSiswaSakit from "./component/ucapan";

const allMenus = [
  { title: "Presensi", icon: <AssignmentTurnedIn />, url: "/siswa/presensi" },
  { title: "E-Rapot", icon: <School />, url: "/siswa/e-rapot" },
  { title: "Mata Pelajaran", icon: <MenuBook />, url: "/siswa/mata-pelajaran" },
  // {
  //   title: "Informasi Kelas",
  //   icon: <AssignmentLate />,
  //   url: "/siswa/informasi-kelas",
  // },
  { title: "Pembayaran", icon: <MonetizationOn />, url: "/siswa/pembayaran" },
  // { title: "Koperasi", icon: <Store />, url: "/koperasi" },
];

const getMenusByGroup = (kelompok) => {
  switch (kelompok) {
    case 1:
    case "KELOMPOK1":
      return allMenus.filter((menu) =>
        ["E-Rapot", "Koperasi", "Mata Pelajaran"].includes(menu.title)
      );
    case 2:
    case "KELOMPOK2":
      return allMenus.filter((menu) =>
        ["Presensi", "Koperasi", "Mata Pelajaran"].includes(menu.title)
      );
    case 3:
    case "KELOMPOK3":
      return allMenus.filter((menu) =>
        ["Pembayaran", "Koperasi", "Mata Pelajaran"].includes(menu.title)
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
      setUcapan(null);
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
        <UcapanSiswaSakit ucapan={ucapan} profile={profile} />
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
        <CardMenu filteredMenus={filteredMenus} profile={profile} />
      </div>
    </div>
  );
}
