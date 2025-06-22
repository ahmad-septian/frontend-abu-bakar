import React, { useState, useEffect } from "react";
import { Button, Paper, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { GetJapelGuru } from "../../../../api/rapot.api";

export default function ListMataPelajaran() {
  const navigate = useNavigate();
  const [listMapel, setListMapel] = useState([]);

  const fetchDataMapel = async () => {
    try {
      const response = await GetJapelGuru();
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
      <div className="p-2">
        <Typography
          sx={{
            fontSize: "1.2rem",
            color: "#85193C",
            textAlign: "center",
            my: 2,
          }}
        >
          Pilih Mata Pelajaran yang ingin diinputkan.
        </Typography>

        <Button
          onClick={() => navigate(`/guru/e-rapot/penambahan-waktu`)}
          variant="contained"
          sx={{ mb: 2, backgroundColor: "#85193C" }}
        >
          Ajukan Penambahan Waktu
        </Button>
        <div className=" space-y-4">
          {listMapel.map((item) => (
            <Paper
              key={item.japelId}
              className="p-4 cursor-pointer hover:shadow-md transition-shadow"
              variant="outlined"
              onClick={() =>
                navigate(`/guru/e-rapot/input-nilai/${item.japelId}`)
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
    </div>
  );
}
