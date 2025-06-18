import React, { useState, useEffect } from "react";
import { Typography, Button, Paper } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import { GetJapelAdmin } from "../../../../../api/rapot.api";

export default function ListMapel() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [listMapel, setListMapel] = useState([]);

  const fetchDataMapel = async () => {
    try {
      const response = await GetJapelAdmin(id);
      setListMapel(response.data);
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  useEffect(() => {
    fetchDataMapel();
  }, []);
  return (
    <div>
      <div className=" space-y-4">
        {listMapel.map((item) => (
          <Paper
            key={item.japelId}
            className="p-4 cursor-pointer hover:shadow-md transition-shadow"
            variant="outlined"
            onClick={() =>
              navigate(`/admin/pegawai/sd/e-rapot/${id}/${item.japelId}`)
            }
          >
            <div className="flex justify-between items-center">
              <Typography fontWeight="bold" fontSize="1rem">
                {item.namaMapel}
              </Typography>
              <ArrowForward />
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
}
