import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { DrawerHeader } from "./drawerStyle";
import { Box } from "@mui/material";
import Header from "../header";
import { Outlet } from "react-router-dom";

export default function MiniDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
