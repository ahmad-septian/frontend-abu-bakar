import React from "react";
import { Avatar, IconButton } from "@mui/material";
import { stringAvatar } from "@/component-global/format-avatar";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#85193C] text-white p-5 shadow-md relative overflow-hidden">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12  rounded-full flex items-center justify-center shadow">
            {/* <img
              src="/logo_katalis.png"
              alt="Logo"
              className="w-8 h-8 object-contain"
            /> */}
            <Avatar
              onClick={() => {
                navigate("/siswa/profile");
              }}
              {...stringAvatar("Fira Riyanti")}
              sx={{
                ...stringAvatar("Fira Riyanti").sx,
                width: "50px",
                height: "50px",
                fontSize: "1.2rem",
              }}
            />
          </div>
          <div>
            <h2 className="text-sm sm:text-md md:text-md mb-1 ">
              Assalamualaikum... 👋
            </h2>
            <h1 className="text-sm sm:text-md md:text-md font-bold uppercase">
              Ahmad Septian Ghozali
            </h1>
            <div>
              <p className="text-[10px] sm:text-md md:text-md">Kelas 1C</p>
            </div>
          </div>

          {/* Icon kanan atas, bisa tambahkan notifikasi/user */}
          {/* <div>
            <IconButton aria-label="" onClick={""}>
              <ArrowForward
                sx={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              />
            </IconButton>
          </div> */}
        </div>
      </div>
    </div>
  );
}
