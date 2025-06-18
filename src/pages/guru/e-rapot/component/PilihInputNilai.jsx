import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Avatar, Button } from "@mui/material";
import { Description, ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const allMenus = [
  {
    title: "Input Nilai Kuis",
    icon: <Description />,
    url: "/guru/e-rapot/kuis",
  },
  {
    title: "Input Nilai Tugas",
    icon: <Description />,
    url: "/guru/e-rapot/tugas",
  },
  {
    title: "Input Nilai UTS",
    icon: <Description />,
    url: "/guru/e-rapot/uts",
  },
  {
    title: "Input Nilai UAS",
    icon: <Description />,
    url: "/guru/e-rapot/uas",
  },
];
export default function MenuRapot() {
  const navigate = useNavigate();
  return (
    <div className="px-3">
      <Button
        onClick={() => navigate(-1)}
        startIcon={<ArrowBack />}
        sx={{ color: "#85193C", mt: 1 }}
      >
        Kembali
      </Button>
      <Typography
        sx={{
          fontSize: "1.2rem",
          color: "#85193C",
          textAlign: "center",
          my: 2,
        }}
      >
        Pilih jenis penilaian yang ingin di inputkan.
      </Typography>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {allMenus.map((menu, index) => (
          <Card
            key={index}
            className="rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            onClick={() => navigate(menu.url)}
            sx={{
              backgroundColor: "#F8EEDF",
              borderRadius: 3,
              cursor: "pointer",
            }}
          >
            <CardContent className="flex flex-col items-center p-4">
              <Avatar
                sx={{
                  bgcolor: "#85193C",
                  width: 48,
                  height: 48,
                  mb: 1,
                }}
              >
                {menu.icon}
              </Avatar>
              <Typography
                variant="body2"
                className="text-center text-sm font-medium text-[#85193C]"
              >
                {menu.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
