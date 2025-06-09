import React, { useState, useEffect } from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Button,
} from "@mui/material";
import { Password, AccountCircle, ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EditProfile from "./component/EditProfile";
import {
  GetProfileGuru,
  UpdatePasswordProfileGuru,
  UpdateProfileGuru,
} from "../../../api/profile-guru.api";
import PasswordGuru from "./component/Password";

export default function ProfileGuru() {
  const Navigate = useNavigate();
  const initialMenuIndex = parseInt(localStorage.getItem("indexMenu")) || 0;
  const [indexMenu, setindexMenu] = useState(initialMenuIndex);
  const [formData, setFormData] = useState({
    namaLengkap: "",
    tempatLahir: "",
    tanggalLahir: "",
    alamat: "",
    noHp: "",
    email: "",
    jenisKelamin: "",
    pendidikanTerakhir: "",
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
      const resp = await UpdatePasswordProfileGuru(password, confirmPassword);
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
      "tempatLahir",
      "tanggalLahir",
      "alamat",
      "noHp",
      "email",
      "jenisKelamin",
      "pendidikanTerakhir",
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        toast.error(`Field ${field} wajib diisi`);
        return;
      }
    }

    try {
      await UpdateProfileGuru(
        formData.namaLengkap || "",
        formData.tempatLahir || "",
        formData.tanggalLahir || "",
        formData.alamat || "",
        formData.noHp || "",
        formData.email || "",
        formData.jenisKelamin || "",
        formData.pendidikanTerakhir || ""
      );
      toast.success("Guru berhasil diupdate!");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Gagal menambahkan guru!");
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
        <PasswordGuru
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
      const response = await GetProfileGuru();
      const data = response.data;

      setFormData({
        namaLengkap: data.namaLengkap,
        tempatLahir: data.tempatLahir,
        tanggalLahir: data.tanggalLahir,
        alamat: data.alamat,
        noHp: data.noHp,
        email: data.email,
        jenisKelamin: data.jenisKelamin,
        pendidikanTerakhir: data.pendidikanTerakhir,
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
