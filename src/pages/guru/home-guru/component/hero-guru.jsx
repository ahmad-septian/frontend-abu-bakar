import React from "react";
import { Avatar, IconButton } from "@mui/material";
import { stringAvatar } from "@/component-global/format-avatar";
import { useNavigate } from "react-router-dom";

export default function HeroSection(props) {
  const { profile } = props;
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
                navigate("/guru/profile");
              }}
              {...stringAvatar(profile?.namaLengkap)}
              sx={{
                ...stringAvatar(profile?.namaLengkap).sx,
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
              {profile?.jenisKelamin === "L" ? "Bpk." : "Ibu."}{" "}
              {profile?.namaLengkap}
            </h1>
            <div>
              <p className="text-[10px] sm:text-md md:text-md">
                Wali Kelas {profile.kelasDiwalikan?.[0]?.namaKelas}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
