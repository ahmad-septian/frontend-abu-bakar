import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import HeaderGuru from "../header-guru";
import FooterGuru from "../footer-guru";

export default function ContentGuru() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {/* Header */}
      <HeaderGuru />
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
      <FooterGuru />
    </div>
  );
}
