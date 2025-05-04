import React from "react";
import { TextField, InputAdornment, IconButton, Avatar } from "@mui/material";
import { Notifications, Search } from "@mui/icons-material";

export default function HeroSection() {
  return (
    <div className="bg-[#85193C] text-white p-6 mt-0 shadow-md relative overflow-hidden">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
            Assalamualaikum, Ahmad Septian 👋
          </h2>
          <p className="text-sm sm:text-base">
            Mari Kita Mulai Pembelajaran Hari Ini
          </p>
        </div>
      </div>
      <div className="mt-5">
        <TextField
          fullWidth
          placeholder="Search"
          size="small"
          variant="outlined"
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            input: { padding: "10px 12px" },
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "#85193C" }} />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
}
