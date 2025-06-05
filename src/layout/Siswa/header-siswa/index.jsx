import { Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import React from "react";

export default function HeaderSiswa() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar className="px-4 md:px-8 flex justify-between items-center">
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "#85193C",
            fontFamily: "'Segoe UI', sans-serif",
            fontSize: {
              xs: "1rem",
              sm: "1.25rem",
              md: "1.5rem",
            },
          }}
        >
          Abu Bakar Ash Shiddiq
        </Typography>

        <Box className="flex items-center gap-1">
          <IconButton size="small" aria-label="">
            <Notifications sx={{ color: "#85193C" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
