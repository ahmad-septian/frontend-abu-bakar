import React, { useState, useEffect } from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Button,
} from "@mui/material";
import { Password, AccountCircle, ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
  GetProfile,
  UpdatePasswordProfile,
  UpdateProfile,
} from "../../../api/profile-siswa.api";
import { toast } from "react-toastify";
import EditProfile from "./component/EditProfile";
import PasswordSiswaSd from "./component/Password";

export default function ProfileSiswa() {
  const Navigate = useNavigate();
  const initialMenuIndex = parseInt(localStorage.getItem("indexMenu")) || 0;
  const [indexMenu, setindexMenu] = useState(initialMenuIndex);
  const [formData, setFormData] = useState({
    namaLengkap: "",
    jenisKelamin: "",
    tempatLahir: "",
    tanggalLahir: "",
    emailOrangTua: "",
    namaAyah: "",
    namaIbu: "",
    namaWali: "",
    noHpAyah: "",
    noHpIbu: "",
    noHpWali: "",
    alamat: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitPassword = async () => {
    if (!password || !confirmPassword) {
      toast.error("Password tidak boleh kosong!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Konfirmasi password tidak sama!");
      return;
    }

    try {
      const resp = await UpdatePasswordProfile(password, confirmPassword);
      if (resp.status === 200 || resp.status === 201) {
        toast.success("Password berhasil diubah!");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Gagal mengubah password.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "namaLengkap",
      "jenisKelamin",
      "tempatLahir",
      "tanggalLahir",
      "emailOrangTua",
      "namaAyah",
      "namaIbu",
      "namaWali",
      "noHpAyah",
      "noHpIbu",
      "noHpWali",
      "alamat",
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        toast.error(`Field ${field} wajib diisi`);
        return;
      }
    }

    try {
      await UpdateProfile(
        formData.namaLengkap,
        formData.jenisKelamin,
        formData.tempatLahir,
        formData.tanggalLahir,
        formData.emailOrangTua,
        formData.namaAyah,
        formData.namaIbu,
        formData.namaWali,
        formData.noHpAyah,
        formData.noHpIbu,
        formData.noHpWali,
        formData.alamat
      );
      toast.success("Siswa berhasil diupdate!");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Gagal menambahkan siswa!");
    }
  };

  const handleMenuMobile = (event, index) => {
    setindexMenu(index);
  };

  const handleViewMenu = () => {
    if (indexMenu === 0) {
      return (
        <EditProfile
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      );
    } else if (indexMenu === 1) {
      return (
        <PasswordSiswaSd
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          showConfirm={showConfirm}
          setShowConfirm={setShowConfirm}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          handleSubmitPassword={handleSubmitPassword}
        />
      );
    }
  };

  const getOneData = async () => {
    try {
      const response = await GetProfile();
      const data = response.data;

      setFormData({
        namaLengkap: data.namaLengkap || "",
        jenisKelamin: data.jenisKelamin || "",
        tempatLahir: data.tempatLahir || "",
        tanggalLahir: data.tanggalLahir || "",
        emailOrangTua: data.emailOrangTua || "",
        namaAyah: data.namaAyah || "",
        namaIbu: data.namaIbu || "",
        namaWali: data.namaWali || "",
        noHpAyah: data.noHpAyah || "",
        noHpIbu: data.noHpIbu || "",
        noHpWali: data.noHpWali || "",
        alamat: data.alamat || "",
      });
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("indexMenu", indexMenu);
    getOneData();
  }, [indexMenu]);

  return (
    <div>
      <div className="p-3">
        <Button
          variant="text"
          color="primary"
          onClick={() => Navigate(-1)}
          startIcon={<ArrowBack />}
          size="medium"
          sx={{ color: "#85193C" }}
        >
          Kembali
        </Button>
      </div>
      <Box
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <BottomNavigation
          sx={{ borderTop: "1px solid #ccc" }}
          showLabels
          value={indexMenu}
          onChange={handleMenuMobile}
        >
          <BottomNavigationAction
            sx={{
              "&.Mui-selected": {
                color: "#85193C",
              },
            }}
            label="Profile"
            icon={<AccountCircle />}
          />

          <BottomNavigationAction
            sx={{
              "&.Mui-selected": {
                color: "#85193C",
              },
            }}
            label="Password"
            icon={<Password />}
          />
        </BottomNavigation>
      </Box>
      <Box sx={{ flexGrow: 1, p: 1.5 }}>{handleViewMenu()}</Box>
    </div>
  );
}
