import { createBrowserRouter, redirect } from "react-router-dom";
import DefaultLayout from "../layout/sidebar";
import Dashboard from "../pages/admin/dashboard";
import Guru from "../pages/admin/guru";
import TambahGuru from "../pages/admin/guru/component/tambah-guru";
import DetailGuru from "../pages/admin/guru/component/detail-guru";
import Siswa from "../pages/admin/siswa";
import TambahSiswa from "../pages/admin/siswa/component/tambah-siswa";
import DetailSiswa from "../pages/admin/siswa/component/detail-siswa";
import AuthLayoutAdmin from "../layout/auth-admin";
import LoginForm from "../pages/admin/login-admin";
import AuthLayoutGuru from "../layout/auth-guru";
import LoginFormSiswa from "../pages/siswa/login-siswa";
import LoginFormGuru from "../pages/guru/login-guru";
import ContentSiswa from "../layout/content-siswa";
import HomeSiswa from "../pages/siswa/home-siswa";
import { Navigate } from "react-router-dom";
import AbsenSiswa from "../pages/siswa/absen-siswa";
import RapotSiswa from "../pages/siswa/rapot";
import PembayaranSiswa from "../pages/siswa/pembayaran";
import KelasSiswa from "../pages/siswa/kelas";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <DefaultLayout />,
    errorElement: "",
    children: [
      {
        path: "",
        // loader: checkAdminAuth,
        loaderData: () => redirect("dashboard"),
      },
      {
        path: "dashboard",
        // loader: checkAdminAuth,
        element: <Dashboard />,
      },
      {
        path: "pengajar",
        // loader: checkAdminAuth,
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
        path: "siswa",
        // loader: checkAdminAuth,
        children: [
          { path: "", element: <Siswa /> },
          {
            path: "tambah-siswa",
            element: <TambahSiswa />,
          },
          {
            path: "detail-siswa",
            element: <DetailSiswa />,
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
        path: "pembayaran",
        element: <PembayaranSiswa />,
      },
      {
        path: "kelas",
        element: <KelasSiswa />,
      },
    ],
  }  
]
);

export default router;
