import * as React from "react";
import {
  Home,
  Dashboard,
  SupervisedUserCircle,
  Groups,
  ManageAccounts,
  RoomPreferences,
  School,
  MenuBook,
  Receipt,
} from "@mui/icons-material";

export const listMenu = [
  {
    label: "Dashboard",
    path: "/admin/dashboard",
    menuName: "DashboardActive",
    icon: <Dashboard sx={{ fontSize: "1.6em" }} />,
  },
  {
    label: "Pengajar",
    path: "/admin/pengajar",
    menuName: "PengajarActive",
    icon: <SupervisedUserCircle sx={{ fontSize: "1.6em" }} />,
  },
  {
    label: "Siswa",
    path: "/admin/siswa",
    menuName: "SiswaActive",
    icon: <Groups sx={{ fontSize: "1.6em" }} />,
  },
  {
    label: "Pegawai",
    path: "/admin/pegawai",
    menuName: "PegawaiActive",
    icon: <ManageAccounts sx={{ fontSize: "1.6em" }} />,
  },
  {
    label: "Kelas",
    path: "/admin/kelas",
    menuName: "KelasActive",
    icon: <RoomPreferences sx={{ fontSize: "1.6em" }} />,
  },
  {
    label: "Mata Pelajaran",
    path: "/admin/mata-pelajaran",
    menuName: "MataPelajaranActive",
    icon: <MenuBook sx={{ fontSize: "1.6em" }} />,
  },
  {
    label: "Tahun Ajaran",
    path: "/admin/tahun-ajaran",
    menuName: "TahunAjaranActive",
    icon: <School sx={{ fontSize: "1.6em" }} />,
  },
  {
    label: "Transaksi",
    path: "/admin/transaksi",
    menuName: "TransaksiActive",
    icon: <Receipt sx={{ fontSize: "1.6em" }} />,
  },
];
