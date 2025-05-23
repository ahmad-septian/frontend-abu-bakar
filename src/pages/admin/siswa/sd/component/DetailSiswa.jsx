import React, { useState, useEffect } from "react";
import { Box, Tab } from "@mui/material";
import {} from "@mui/icons-material";
import {} from "react-router-dom";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DataSiswaSd from "./DataSiswa";
import RapotSiswaSd from "./RapotSiswaSd";
import AbsensiSiswaSd from "./AbsensiSiswa";
import PembayaranSiswaSd from "./PembayaranSiswa";

export default function DetailSiswaSd() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              textColor="inherit"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#85193C", // warna garis bawah (indicator)
                },
              }}
            >
              <Tab
                label="DATA SISWA"
                value="1"
                sx={{
                  color: value === "1" ? "#85193C" : "inherit", // aktif vs tidak aktif
                }}
              />
              <Tab
                label="ABSENSI"
                value="2"
                sx={{
                  color: value === "2" ? "#85193C" : "inherit",
                }}
              />
              <Tab
                label="E-RAPOT"
                value="3"
                sx={{
                  color: value === "3" ? "#85193C" : "inherit",
                }}
              />
              <Tab
                label="PEMBAYARAN SISWA"
                value="4"
                sx={{
                  color: value === "4" ? "#85193C" : "inherit",
                }}
              />
              <Tab
                label="RIWAYAT & AKUN SISWA"
                value="5"
                sx={{
                  color: value === "5" ? "#85193C" : "inherit",
                }}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <DataSiswaSd />
          </TabPanel>
          <TabPanel value="2">
            <AbsensiSiswaSd />
          </TabPanel>
          <TabPanel value="3">
            <RapotSiswaSd />
          </TabPanel>
          <TabPanel value="4">
            <PembayaranSiswaSd />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
