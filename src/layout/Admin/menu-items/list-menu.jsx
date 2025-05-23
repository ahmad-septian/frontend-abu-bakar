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
  EditCalendar,
} from "@mui/icons-material";

export const listMenu = [
  {
    label: "Dashboard",
    icon: <Dashboard sx={{ fontSize: "1.6em" }} />,
    path: "/admin/dashboard",
    menuName: "DashboardActive",
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
    path: "/admin/siswa",
    icon: <Groups sx={{ fontSize: "1.6em" }} />,
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
    path: "/admin/pegawai",
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
    path: "/admin/kelas",
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
    label: "Jadwal Pelajaran",
    path: "/admin/jadwal-pelajaran",
    menuName: "JadwalPelajaranActive",
    icon: <EditCalendar sx={{ fontSize: "1.6em" }} />,
    children: [
      {
        label: "Jadwal Pelajaran SD",
        path: "/admin/jadwal-pelajaran/sd",
        menuName: "JadwalPelajaranSDActive",
      },
      {
        label: "Jadwal Pelajaran TK",
        path: "/admin/jadwal-pelajaran/tk",
        menuName: "JadwalPelajaranTKActive",
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
    label: "Pembayaran",
    path: "/admin/pembayaran",
    menuName: "TransaksiActive",
    icon: <Receipt sx={{ fontSize: "1.6em" }} />,
    children: [
      {
        label: "Pembayaran SD",
        path: "/admin/pembayaran/sd",
        menuName: "TransaksiSDActive",
      },
      {
        label: "Pembayaran TK",
        path: "/admin/pembayaran/tk",
        menuName: "TransaksiTKActive",
      },
    ],
  },
];
