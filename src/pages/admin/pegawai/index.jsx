import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {} from "@mui/icons-material";
import {} from "react-router-dom";
import TeacherTable from "./component/list-guru";

export default function Guru() {
  
  return (
    <div>
      <Typography sx={{ fontSize: "1.5rem" }}>List Pengajar</Typography>
      <TeacherTable />
    </div>
  );
}
