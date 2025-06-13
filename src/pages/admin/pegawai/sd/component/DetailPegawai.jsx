import React, { useState, useEffect } from "react";
import { Box, Tab } from "@mui/material";
import {} from "@mui/icons-material";
import {} from "react-router-dom";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DataPegawai from "./DataPegawai";
import RiwayatAkunPegawai from "./RiwayatAkun";

export default function DetailPegawai() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem("tabsPegawai", newValue);
  };

  useEffect(() => {
    const savedTab = localStorage.getItem("tabsPegawai");
    if (savedTab) {
      setValue(savedTab);
    }
  }, []);
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
                  backgroundColor: "#85193C",
                },
              }}
            >
              <Tab
                label="DATA PEGAWAI"
                value="1"
                sx={{
                  color: value === "1" ? "#85193C" : "inherit",
                }}
              />
              <Tab
                label="RIWAYAT & AKUN PEGAWAI"
                value="2"
                sx={{
                  color: value === "2" ? "#85193C" : "inherit",
                }}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <DataPegawai />
          </TabPanel>
          <TabPanel value="2">
            <RiwayatAkunPegawai />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
