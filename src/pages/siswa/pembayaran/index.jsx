import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import TagihanCard from "./component/TagihanCard";
import { ListTagihanMurid } from "../../../api/pembayaranSiswa.api";

const primaryColor = "#85193C";
export default function TagihanSiswa() {
  const navigate = useNavigate();
  const [tagihanList, setTagihanList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTagihan = async () => {
    try {
      const response = await ListTagihanMurid();
      setTagihanList(response);
    } catch (error) {
      console.error("Error fetching tagihan:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickInvoice = (code) => {
    navigate(`/siswa/pembayaran/invoice/${code}`);
  };

  const handleClickDetail = (code) => {
    navigate(`/siswa/pembayaran/detail/${code}`);
  };

  useEffect(() => {
    fetchTagihan();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Typography
        variant="h5"
        className="mb-4 text-center"
        style={{ color: primaryColor }}
      >
        Daftar Tagihan Pembayaran
      </Typography>

      <TagihanCard
        tagihanList={tagihanList}
        handleClickInvoice={handleClickInvoice}
        handleClickDetail={handleClickDetail}
        loading={loading}
      />
    </div>
  );
}
