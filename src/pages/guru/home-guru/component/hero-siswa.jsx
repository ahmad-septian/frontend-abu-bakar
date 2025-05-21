import React from "react";
import { TextField, InputAdornment, IconButton, Avatar } from "@mui/material";
import { Notifications, Search } from "@mui/icons-material";

export default function HeroSection() {
  return (
    <div className="bg-[#85193C] text-white p-6 mt-0 shadow-md relative overflow-hidden">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
            Assalamualaikum, Bapak Ahmad Septian 👋
          </h2>
          <p className="text-sm sm:text-base">
            Semoga Bapak dalam keadaan sehat. Mari kita mulai pembelajaran hari
            ini.
          </p>
        </div>
      </div>
    </div>
  );
}
