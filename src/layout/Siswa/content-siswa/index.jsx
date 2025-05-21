import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import HeaderSiswa from "../header-siswa";
import FooterSiswa from "../footer-siswa";

export default function ContentSiswa() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {/* Header */}
      <HeaderSiswa />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: 0,
        }}
      >
        <Outlet />
      </Box>
      {/* Footer */}
      <FooterSiswa />
    </div>
  );
}
