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
            {profile.foto ? (
              <Avatar
                alt={profile.namaLengkap}
                src={
                  `${import.meta.env.VITE_API}/siswa/foto-siswa/` + profile.foto
                }
                sx={{
                  ...stringAvatar(profile.namaLengkap).sx,
                  width: "50px",
                  height: "50px",
                  fontSize: "1.2rem",
                }}
              />
            ) : (
              <Avatar
                onClick={() => {
                  navigate("/siswa/profile");
                }}
                {...stringAvatar(profile.namaLengkap)}
                sx={{
                  ...stringAvatar(profile.namaLengkap).sx,
                  width: "50px",
                  height: "50px",
                  fontSize: "1.2rem",
                }}
              />
            )}
          </div>
          <div>
            <h2
              style={{ fontFamily: "Comic Neue" }}
              className="text-sm sm:text-md md:text-md mb-1 "
            >
              Assalamualaikum... 👋
            </h2>
            <h1
              style={{ fontFamily: "Comic Neue" }}
              className="text-sm sm:text-md md:text-md font-bold uppercase"
            >
              {profile.namaLengkap}
            </h1>
            <div>
              <p
                className="text-[10px] sm:text-md md:text-md"
                style={{ fontFamily: "Comic Neue" }}
              >
                {profile.kelas?.namaKelas}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
