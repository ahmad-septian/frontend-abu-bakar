import { AppBar, Avatar, Toolbar, Typography, Box } from "@mui/material";
import React from "react";

export default function HeaderGuru() {
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
              xs: "1rem", // mobile
              sm: "1.25rem", // tablet
              md: "1.5rem", // desktop
            },
          }}
        >
          Guru Abu Bakar Ash Shiddiq
        </Typography>

        <Box className="flex items-center gap-3">
          <Avatar
            alt="User"
            src="/user.png" // ganti dengan path gambar atau kosong jika ingin inisial
            sx={{ bgcolor: "#85193C" }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
