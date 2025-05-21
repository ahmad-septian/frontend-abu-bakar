import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {} from "@mui/icons-material";
import {} from "react-router-dom";
import ListSiswa from "./component/list-siswa";

export default function SiswaSD() {
  return (
    <div>
      <Typography sx={{ fontSize: "1.5rem" }}>List Siswa SD</Typography>
      <ListSiswa />
    </div>
  );
}
