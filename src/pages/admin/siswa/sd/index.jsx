import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {} from "@mui/icons-material";
import ListSiswa from "./component/list-siswa";
import { useNavigate } from "react-router-dom";
import { GetSiswaPaginated } from "../../../../api/siswa.api";

export default function SiswaSD() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickTambah = () => {
    navigate(`/admin/siswa/sd/tambah-siswa-sd`);
  };

  const handleClickDetail = (id) => {
    navigate(`/admin/siswa/sd/detail-siswa-sd/${id}`);
  };

  const getDataPaginated = async () => {
    try {
      const response = await GetSiswaPaginated(page + 1, rowsPerPage, search);
      setData(response.data);
      setTotalItems(response.meta.total);
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  useEffect(() => {
    getDataPaginated();
  }, [page, rowsPerPage, search]);
  return (
    <div>
      <Typography sx={{ fontSize: "1.5rem" }}>List Siswa SD</Typography>
      <ListSiswa
        handleClickTambah={handleClickTambah}
        handleClickDetail={handleClickDetail}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        totalItems={totalItems}
        rowsPerPage={rowsPerPage}
        page={page}
        data={data}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}
