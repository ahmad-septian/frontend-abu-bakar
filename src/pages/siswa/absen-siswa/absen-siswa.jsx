import React, { useState } from "react";
import { Button, Typography, CircularProgress } from "@mui/material";
import { AssignmentTurnedIn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function AbsensiSiswa() {
  const [isTapped, setIsTapped] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleTapIn = () => {
    setIsLoading(true);
    // Simulasi proses tap-in selama 2 detik
    setTimeout(() => {
      setIsTapped(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="px-3 mt-5">
      {/* Header */}
      <Typography
        variant="h5"
        className="text-[#85193C] font-semibold text-center mb-4"
        sx={{
          fontSize: { xs: "1.2rem", sm: "2rem" },
          textAlign: "center",
          mt: 2,
          mb: 2,
        }}
      >
        Presensi Siswa
      </Typography>

      {/* Tampilan sebelum tap-in */}
      {!isTapped ? (
        <div className="text-center space-y-6">
          <Typography variant="body1" className="text-gray-700">
            Silakan tap kartu untuk absensi
          </Typography>
          <Button
            onClick={handleTapIn}
            variant="contained"
            color="primary"
            className="w-full py-2"
            sx={{
              backgroundColor: "#85193C",
              "&:hover": {
                backgroundColor: "#B13A50",
              },
            }}
          >
            {isLoading ? (
              <CircularProgress size={24} className="text-white" />
            ) : (
              "Tap Kartu"
            )}
          </Button>
        </div>
      ) : (
        // Tampilan setelah tap-in berhasil
        <div className="text-center space-y-6">
          <Typography variant="h6" className="text-green-500">
            Absensi Berhasil!
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            Anda telah berhasil melakukan absensi pada {new Date().toLocaleTimeString()}.
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            className="w-full py-2"
            onClick={() => navigate("/siswa/riwayat-absensi")}
            sx={{
              borderColor: "#85193C",
              color: "#85193C",
              "&:hover": {
                backgroundColor: "#85193C",
                color: "white",
              },
            }}
          >
            Lihat Riwayat Absensi
          </Button>
        </div>
      )}
    </div>
  );
}
