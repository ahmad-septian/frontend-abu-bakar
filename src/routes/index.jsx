import { createBrowserRouter, redirect } from "react-router-dom";
import DefaultLayout from "../layout/Admin/sidebar";
import AuthLayoutAdmin from "../layout/Admin/auth-admin";
import LoginForm from "../pages/admin/login-admin";
import AuthLayoutGuru from "../layout/Guru/auth-guru";
import LoginFormSiswa from "../pages/siswa/login-siswa";
import LoginFormGuru from "../pages/guru/login-guru";
import ContentSiswa from "../layout/Siswa/content-siswa";
import HomeSiswa from "../pages/siswa/home-siswa";
import { Navigate } from "react-router-dom";
import AbsenSiswa from "../pages/siswa/absen-siswa";
import RapotSiswa from "../pages/siswa/rapot";
import PembayaranSiswa from "../pages/siswa/pembayaran";
import MataPelajaran from "../pages/siswa/mata-pelajaran";
import InformasiTerkini from "../pages/siswa/kelas";
import ContentGuru from "../layout/Guru/content-guru";
import HomeGuru from "../pages/guru/home-guru";
import AbsenSiswaGuru from "../pages/guru/absen-siswa";
import ERapot from "../pages/guru/e-rapot";
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
import { CekLoginGuru, CekLoginPegawai } from "../api/loginPegawai.api";
import TambahSiswa from "../pages/admin/siswa/sd/component/tambah-siswa";
import PegawaiSd from "../pages/admin/pegawai/sd";
import TambahPegawai from "../pages/admin/pegawai/sd/component/TambahPegawai";
import DetailPegawai from "../pages/admin/pegawai/sd/component/DetailPegawai";
import { CekLoginSiswa } from "../api/loginSiswa.api";
import InvoiceTagihan from "../pages/siswa/pembayaran/component/InvoiceTagihan";
import DetailTagihan from "../pages/siswa/pembayaran/component/DetailTagihan";
import ProfileSiswa from "../pages/siswa/profile-siswa";
import ProfileGuru from "../pages/guru/profile-guru";
import InputNilai from "../pages/guru/e-rapot/component/InputNilai";
import DetailKuis from "../pages/siswa/rapot/component/DetailKuis";
import DetailTugas from "../pages/siswa/rapot/component/DetailTugas";
import DetailUTS from "../pages/siswa/rapot/component/RapotUTS";
import DetailUAS from "../pages/siswa/rapot/component/RapotUAS";
import AssessmentPeriod from "../pages/admin/assessment-period";
import Rapot from "../pages/admin/pegawai/sd/component/Rapot";
import PenambahanWaktu from "../pages/guru/e-rapot/component/PenambahanWaktu";
import RequestPenambahanWaktu from "../pages/admin/request-penambahan-waktu";
import PresensiAdmin from "../pages/admin/presensi";
export async function checkAdminAuth() {
  try {
    const isLoggedIn = await CekLoginPegawai();

    if (!isLoggedIn?.isLoggedIn) {
      return redirect("/auth/admin/login");
    }

    return null; // lanjutkan ke halaman admin
  } catch (error) {
    console.error("Cek login admin gagal:", error);
    return redirect("/auth/admin/login");
  }
}

export async function cekLoginSiswa() {
  try {
    const isLoggedIn = await CekLoginSiswa();

    if (!isLoggedIn?.isLoggedIn) {
      return redirect("/auth/siswa/login");
    }

    return null; // lanjutkan ke halaman admin
  } catch (error) {
    console.error("Cek login admin gagal:", error);
    return redirect("/auth/siswa/login");
  }
}

export async function cekLoginGuru() {
  try {
    const isLoggedIn = await CekLoginGuru();

    if (!isLoggedIn?.isLoggedIn) {
      return redirect("/auth/guru/login");
    }

    return null; // lanjutkan ke halaman admin
  } catch (error) {
    console.error("Cek login admin gagal:", error);
    return redirect("/auth/guru/login");
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/admin"),
  },
  {
    path: "/admin",
    element: <DefaultLayout />,
    errorElement: "",
    loader: checkAdminAuth,
    children: [
      {
        index: true,
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
                path: "tambah-siswa-sd",
                element: <TambahSiswa />,
              },
              {
                path: "detail-siswa-sd/:id",
                element: <DetailSiswaSd />,
              },
            ],
          },
        ],
      },
      {
        path: "pegawai",
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
                element: <PegawaiSd />,
              },
              {
                path: "tambah-pegawai-sd",
                element: <TambahPegawai />,
              },
              {
                path: "detail-pegawai-sd/:id",
                element: <DetailPegawai />,
              },
              {
                path: "e-rapot/:id/:japelId",
                element: <Rapot />,
              },
            ],
          },

          {
            path: "assessment-period",
            element: <AssessmentPeriod />,
          },
          {
            path: "request-penambahan-waktu",
            element: <RequestPenambahanWaktu />,
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
      {
        path: "presensi",
        children: [
          {
            path: "sd",
            element: <PresensiAdmin />,
          },
        ],
      },
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
        loader: async () => {
          const isLoggedIn = await CekLoginPegawai();

          if (isLoggedIn?.isLoggedIn) {
            return redirect("/admin/dashboard/sd");
          }

          return null;
        },
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
        loader: async () => {
          const isLoggedIn = await CekLoginGuru();
          if (isLoggedIn?.isLoggedIn) {
            return redirect("/guru/home");
          }

          return null;
        },
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
        loader: async () => {
          const isLoggedIn = await CekLoginSiswa();
          if (isLoggedIn?.isLoggedIn) {
            return redirect("/siswa/home");
          }

          return null;
        },
        element: <LoginFormSiswa />,
      },
    ],
  },

  {
    path: "/siswa",
    element: <ContentSiswa />,
    errorElement: "",
    loader: cekLoginSiswa,
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
        path: "presensi",
        element: <AbsenSiswa />,
      },
      {
        path: "e-rapot",
        children: [
          {
            path: "",
            element: <RapotSiswa />,
          },
          {
            path: "detail/kuis",
            element: <DetailKuis />,
          },
          {
            path: "detail/tugas",
            element: <DetailTugas />,
          },
          {
            path: "detail/uts",
            element: <DetailUTS />,
          },
          {
            path: "detail/uas",
            element: <DetailUAS />,
          },
        ],
      },
      {
        path: "mata-pelajaran",
        element: <MataPelajaran />,
      },
      {
        path: "profile",
        element: <ProfileSiswa />,
      },
      {
        path: "pembayaran",
        children: [
          {
            path: "",
            element: <PembayaranSiswa />,
          },
          {
            path: "invoice/:codePembayaran",
            element: <InvoiceTagihan />,
          },
          {
            path: "detail/:codePembayaran",
            element: <DetailTagihan />,
          },
        ],
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
    loader: cekLoginGuru,
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
        path: "presensi-siswa",
        element: <AbsenSiswaGuru />,
      },
      {
        path: "absen-guru",
        element: <AbsenGuru />,
      },
      {
        path: "e-rapot",
        children: [
          {
            path: "",
            element: <ERapot />,
          },
          {
            path: "penambahan-waktu",
            element: <PenambahanWaktu />,
          },
          {
            path: "input-nilai/:japelId",
            element: <InputNilai />,
          },
          // {
          //   path: "kuis",
          //   element: <KuisInput />,
          // },
          // {
          //   path: "tugas",
          //   element: <TugasInput />,
          // },
          // {
          //   path: "uts",
          //   element: <UtsInput />,
          // },
          // {
          //   path: "uas",
          //   element: <UasInput />,
          // },
        ],
      },
      {
        path: "jadwal-guru",
        element: <JadwalGuru />,
      },
      {
        path: "informasi-kelas",
        element: <InfoKelasGuru />,
      },
      {
        path: "profile",
        element: <ProfileGuru />,
      },
    ],
  },
]);

export default router;
