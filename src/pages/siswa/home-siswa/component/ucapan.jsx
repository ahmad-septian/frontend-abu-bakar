import React, { useState, useEffect } from "react";
import { Card, CardContent, Box, Avatar, Typography } from "@mui/material";
import { Store, Class } from "@mui/icons-material";
import {} from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

export default function UcapanSiswaSakit(props) {
  const { ucapan, profile } = props;

  return (
    <div>
      {ucapan?.tanggal && ucapan?.ucapan && (
        <Card
          sx={{
            my: 3,
            px: 2,
            py: 2,
            bgcolor: "#FFEDED",
            border: "2px dashed #FF9AA2",
            borderRadius: "16px",
            maxWidth: 360,
            mx: "auto",
            boxShadow: "0 4px 8px rgba(255, 154, 162, 0.3)",
            position: "relative",
            overflow: "visible",
          }}
        >
          <Avatar
            sx={{
              bgcolor: "#FFD1DC",
              width: 60,
              height: 60,
              fontSize: 32,
              position: "absolute",
              top: -30,
              left: "calc(50% - 30px)",
              border: "2px solid white",
            }}
          >
            <Player
              autoplay
              loop
              src="/assets/emote-sick.json"
              style={{ height: "50px", width: "50px" }}
            />
          </Avatar>

          <CardContent sx={{ paddingBottom: "10px !important" }}>
            <Typography
              sx={{
                color: "#D7263D",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "1.2rem",
                mt: 1,
                mb: 1,
              }}
            >
              {profile?.namaLengkap}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#444",
                textAlign: "center",
                fontSize: "1rem",
              }}
            >
              {ucapan.ucapan}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                textAlign: "center",
                color: "#888",
                fontSize: "0.75rem",
                fontStyle: "italic",
                mt: 1,
              }}
            >
              Pesan ini ditulis oleh wali kelasmu ❤️
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
