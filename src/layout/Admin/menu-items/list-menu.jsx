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
  Person,
} from "@mui/icons-material";

export const listMenu = [
  {
    label: "Dashboard",
    icon: <Dashboard sx={{ fontSize: "1.6em" }} />,
    children: [
      {
        label: "Dashboard SD",
        path: "/admin/dashboard/sd",
        menuName: "DashboardSDActive",
      },
      {
        label: "Dashboard TK",
        path: "/admin/dashboard/tk",
        menuName: "DashboardTKActive",
      },
    ],
  },
  {
    label: "Siswa",
    menuName: "SiswaActive",
    icon: <Groups />,
    children: [
      {
        label: "Siswa SD",
        path: "/admin/siswa/sd",
        menuName: "SiswaSDActive",
      },
      {
        label: "Siswa TK",
        path: "/admin/siswa/tk",
        menuName: "SiswaTKActive",
      },
    ],
  },
  {
    label: "Pegawai",
    menuName: "PegawaiActive",
    icon: <ManageAccounts sx={{ fontSize: "1.6em" }} />,
    children: [
      {
        label: "Pegawai SD",
        path: "/admin/pegawai/sd",
        menuName: "PegawaiSDActive",
      },
      {
        label: "Pegawai TK",
        path: "/admin/pegawai/tk",
        menuName: "PegawaiTKActive",
      },
    ],
  },
  {
    label: "Kelas",
    menuName: "KelasActive",
    icon: <RoomPreferences sx={{ fontSize: "1.6em" }} />,
    children: [
      {
        label: "Kelas SD",
        path: "/admin/kelas/sd",
        menuName: "KelasSDActive",
      },
      {
        label: "Kelas TK",
        path: "/admin/kelas/tk",
        menuName: "KelasTKActive",
      },
    ],
  },
  {
    label: "Mata Pelajaran",
    path: "/admin/mata-pelajaran",
    menuName: "MataPelajaranActive",
    icon: <MenuBook sx={{ fontSize: "1.6em" }} />,
    children: [
      {
        label: "Mata Pelajaran SD",
        path: "/admin/mata-pelajaran/sd",
        menuName: "MataPelajaranSDActive",
      },
      {
        label: "Mata Pelajaran TK",
        path: "/admin/mata-pelajaran/tk",
        menuName: "MataPelajaranTKActive",
      },
    ],
  },
  {
    label: "Tahun Ajaran",
    path: "/admin/tahun-ajaran",
    menuName: "TahunAjaranActive",
    icon: <School sx={{ fontSize: "1.6em" }} />,
    children: [
      {
        label: "Tahun Ajaran SD",
        path: "/admin/tahun-ajaran/sd",
        menuName: "TahunAjaranSDActive",
      },
      {
        label: "Tahun Ajaran TK",
        path: "/admin/tahun-ajaran/tk",
        menuName: "TahunAjaranTKActive",
      },
    ],
  },
  {
    label: "Transaksi",
    path: "/admin/transaksi",
    menuName: "TransaksiActive",
    icon: <Receipt sx={{ fontSize: "1.6em" }} />,
    children: [
      {
        label: "Transaksi SD",
        path: "/admin/transaksi/sd",
        menuName: "TransaksiSDActive",
      },
      {
        label: "Transaksi TK",
        path: "/admin/transaksi/tk",
        menuName: "TransaksiTKActive",
      },
    ],
  },
];
