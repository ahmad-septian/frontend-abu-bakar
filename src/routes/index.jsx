import { createBrowserRouter, redirect } from "react-router-dom";
// ADMIN
import DefaultLayout from "../layout/Admin/sidebar";
import AuthLayoutAdmin from "../layout/Admin/auth-admin";
import LoginForm from "../pages/admin/login-admin";
import TambahGuru from "../pages/admin/pegawai/component/tambah-guru";
import DetailGuru from "../pages/admin/pegawai/component/detail-guru";
// SISWA
import Guru from "../pages/admin/pegawai";
// GURU
import AuthLayoutGuru from "../layout/Guru/auth-guru";
import LoginFormSiswa from "../pages/siswa/login-siswa";
import LoginFormGuru from "../pages/guru/login-guru";
import ContentSiswa from "../layout/Siswa/content-siswa";
import HomeSiswa from "../pages/siswa/home-siswa";
import { Navigate } from "react-router-dom";
import AbsenSiswa from "../pages/siswa/absen-siswa";
import RapotSiswa from "../pages/siswa/rapot";
import PembayaranSiswa from "../pages/siswa/pembayaran";
import DetailTransaksiKelas from "../pages/admin/transaksi/detail-kelas";
import DaftarTransaksiKelas from "../pages/admin/transaksi/daftar-kelas";
import Transaksi from "../pages/admin/transaksi";
import DetailTransaksi from "../pages/admin/transaksi/detail-transaksi";
import MataPelajaran from "../pages/siswa/mata-pelajaran";
import InformasiTerkini from "../pages/siswa/kelas";
import ContentGuru from "../layout/Guru/content-guru";
import HomeGuru from "../pages/guru/home-guru";
import AbsenSiswaGuru from "../pages/guru/absen-siswa";
import InputRapot from "../pages/guru/input-rapot";
import JadwalGuru from "../pages/guru/jadwal-guru";
import InfoKelasGuru from "../pages/guru/info-kelas";
import AbsenGuru from "../pages/guru/absen-guru";
import DashboardTK from "../pages/admin/dashboard/tk";
import DashboardSD from "../pages/admin/dashboard/sd";
import SiswaTK from "../pages/admin/siswa/tk";
import SiswaSD from "../pages/admin/siswa/sd";
import DetailSiswaSd from "../pages/admin/siswa/sd/component/DetailSiswa";
import KelasTk from "../pages/admin/kelas/tk";
import KelasSd from "../pages/admin/kelas/sd";
import MataPelajaranSd from "../pages/admin/mata-pelajaran/sd";
import TahunAjaranSd from "../pages/admin/tahun-ajaran/sd";
import MataPelajaranTk from "../pages/admin/mata-pelajaran/tk";
import PembayaranSd from "../pages/admin/pembayaran/sd";
import JadwalPelajaranSd from "../pages/admin/jadwal-pelajaran/sd";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <DefaultLayout />,
    errorElement: "",
    children: [
      {
        index: true, // ini untuk path "/admin"
        loader: () => redirect("/admin/dashboard/sd"),
      },
      {
        path: "dashboard",
        loader: () => redirect("/admin/dashboard/sd"),
      },
      {
        path: "dashboard/tk",
        element: <DashboardTK />,
      },
      {
        path: "dashboard/sd",
        element: <DashboardSD />,
      },
      {
        path: "siswa",
        children: [
          {
            path: "tk",
            element: <SiswaTK />,
          },
          {
            path: "sd",
            children: [
              {
                path: "",
                element: <SiswaSD />,
              },
              {
                path: "detail-siswa-sd",
                element: <DetailSiswaSd />,
              },
            ],
          },
        ],
      },
      {
        path: "pengajar",
        children: [
          { path: "", element: <Guru /> },
          {
            path: "tambah-pengajar",
            element: <TambahGuru />,
          },
          {
            path: "detail-pengajar",
            element: <DetailGuru />,
          },
        ],
      },
      {
        path: "kelas",
        children: [
          {
            path: "tk",
            element: <KelasTk />,
          },
          {
            path: "sd",
            element: <KelasSd />,
          },
        ],
      },
      {
        path: "mata-pelajaran",
        children: [
          {
            path: "tk",
            element: <MataPelajaranTk />,
          },
          {
            path: "sd",
            element: <MataPelajaranSd />,
          },
        ],
      },
      {
        path: "jadwal-pelajaran",
        children: [
          {
            path: "tk",
            element: "",
          },
          {
            path: "sd",
            element: <JadwalPelajaranSd />,
          },
        ],
      },
      {
        path: "tahun-ajaran",
        children: [
          {
            path: "tk",
            element: "",
          },
          {
            path: "sd",
            element: <TahunAjaranSd />,
          },
        ],
      },
      {
        path: "pembayaran",
        children: [
          {
            path: "tk",
            element: "",
          },
          {
            path: "sd",
            element: <PembayaranSd />,
          },
        ],
      },

      // {
      //   path: "transaksi",
      //   children: [
      //     { path: "", element: <Transaksi /> },
      //     {
      //       path: "daftar-transaksi-kelas",
      //       element: <DaftarTransaksiKelas />,
      //     },
      //     {
      //       path: "detail-transaksi-kelas",
      //       element: <DetailTransaksiKelas />,
      //     },
      //     {
      //       path: "detail-transaksi",
      //       element: <DetailTransaksi />,
      //     },
      //   ],
      // },
    ],
  },
  // LOGIN UNTUK ADMIN
  {
    path: "/auth/admin",
    element: <AuthLayoutAdmin />,
    errorElement: "",
    children: [
      {
        path: "",
        loader: () => {
          return redirect("login");
        },
      },
      {
        path: "login",
        // loader: async () => {
        //   try {
        //     const isLoggedIn = await cekLogin();
        //     if (isLoggedIn.status === 200) {
        //       return redirect("/lapang");
        //     }

        //     return null;
        //   } catch (error) {
        //     console.error(error);
        //     return null;
        //   }
        // },
        element: <LoginForm />,
      },
    ],
  },
  // LOGIN UNTUK GURU
  {
    path: "/auth/guru",
    element: <AuthLayoutGuru />,
    errorElement: "",
    children: [
      {
        path: "",
        loader: () => {
          return redirect("login");
        },
      },
      {
        path: "login",
        // loader: async () => {
        //   try {
        //     const isLoggedIn = await cekLogin();
        //     if (isLoggedIn.status === 200) {
        //       return redirect("/lapang");
        //     }

        //     return null;
        //   } catch (error) {
        //     console.error(error);
        //     return null;
        //   }
        // },
        element: <LoginFormGuru />,
      },
    ],
  },
  // LOGIN UNTUK SISWA
  {
    path: "/auth/siswa",
    element: <AuthLayoutGuru />,
    errorElement: "",
    children: [
      {
        path: "",
        loader: () => {
          return redirect("login");
        },
      },
      {
        path: "login",
        // loader: async () => {
        //   try {
        //     const isLoggedIn = await cekLogin();
        //     if (isLoggedIn.status === 200) {
        //       return redirect("/lapang");
        //     }

        //     return null;
        //   } catch (error) {
        //     console.error(error);
        //     return null;
        //   }
        // },
        element: <LoginFormSiswa />,
      },
    ],
  },

  // KONTEN SISWA
  {
    path: "/siswa",
    element: <ContentSiswa />,
    errorElement: "",
    children: [
      {
        path: "",
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        element: <HomeSiswa />,
      },
      {
        path: "absen",
        element: <AbsenSiswa />,
      },
      {
        path: "rapot",
        element: <RapotSiswa />,
      },
      {
        path: "mata-pelajaran",
        element: <MataPelajaran />,
      },
      {
        path: "pembayaran",
        element: <PembayaranSiswa />,
      },
      {
        path: "informasi-kelas",
        element: <InformasiTerkini />,
      },
    ],
  },

  // KONTEN GURU
  {
    path: "/guru",
    element: <ContentGuru />,
    errorElement: "",
    children: [
      {
        path: "",
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        element: <HomeGuru />,
      },
      {
        path: "absen-siswa",
        element: <AbsenSiswaGuru />,
      },
      {
        path: "absen-guru",
        element: <AbsenGuru />,
      },
      {
        path: "input-rapot",
        element: <InputRapot />,
      },
      {
        path: "jadwal-guru",
        element: <JadwalGuru />,
      },
      {
        path: "informasi-kelas",
        element: <InfoKelasGuru />,
      },
    ],
  },
]);

export default router;
