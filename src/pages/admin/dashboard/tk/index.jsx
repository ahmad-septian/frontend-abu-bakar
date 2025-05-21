import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { People, School, Work } from "@mui/icons-material";
import {} from "react-router-dom";
import DashboardCard from "./component/card-data";

export default function DashboardTK() {
  return (
    <div>
      <Typography sx={{ fontSize: "1.5rem" }}>Dashboard TK</Typography>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
        <DashboardCard
          title="Total Siswa"
          value="1200"
          icon={<People sx={{ fontSize: 32 }} />}
        />
        <DashboardCard
          title="Total Pengajar"
          value="85"
          icon={<School sx={{ fontSize: 32 }} />}
        />
        <DashboardCard
          title="Total Pekerja"
          value="40"
          icon={<Work sx={{ fontSize: 32 }} />}
        />
      </div>

      <div className="mt-5"></div>
    </div>
  );
}
