import React, { useState, useEffect } from "react";
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import { Edit, AddCard, Delete } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { formatUang } from "@/component-global/format-uang";
import {
  CreatePembayaranSiswa,
  DeletePembayaranSiswa,
  ListPembayaranSiswa,
  UpdatePembayaranSiswa,
} from "../../../../../api/pembayaranSiswa.api";
import TambahTagihanSd from "./TambahTagihan";
import { GetAllPembayaran } from "../../../../../api/pembayaran.api";
import { toast } from "react-toastify";
import EditTagihan from "./EditTagihan";

const primaryColor = "#85193C";
export default function AbsensiSiswaSd() {
  const { id } = useParams();
  const [tagihan, setTagihan] = useState([]);
  const [openTambah, setOpenTambah] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [dataPembayaran, setDataPembayaran] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [search, setSearch] = useState("");
  const [idTagihan, setIdTagihan] = useState("");
  const [formData, setFormData] = useState({
    harga: 0,
    status: "",
  });

  const togglePembayaran = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const filteredPembayaran = dataPembayaran.filter((item) =>
    item.namaPembayaran.toLowerCase().includes(search.toLowerCase())
  );

  const fetchTagihan = async () => {
    try {
      const response = await ListPembayaranSiswa(id);
      setTagihan(response);
    } catch (error) {
      console.error("Error fetching tagihan:", error);
    }
  };

  const getAllPembayaran = async () => {
    try {
      const response = await GetAllPembayaran();
      setDataPembayaran(response);
    } catch (error) {
      console.error("Error fetching tagihan:", error);
    }
  };

  const submitPembayaran = async () => {
    try {
      const response = await CreatePembayaranSiswa(id, selectedIds);
      if (response) {
        toast.success("Pembayaran berhasil ditambahkan");
        fetchTagihan();
        handleCloseTambah();
      } else {
        toast.error("Gagal menambahkan pembayaran");
      }
    } catch (error) {
      console.error("Error submitting pembayaran:", error);
      toast.error("Terjadi kesalahan saat menambahkan pembayaran");
    }
  };

  const deletePembayaran = async (idPembayaran) => {
    try {
      const response = await DeletePembayaranSiswa(id, idPembayaran);
      if (response) {
        toast.success("Pembayaran berhasil dihapus");
        fetchTagihan();
      } else {
        toast.error("Gagal menghapus pembayaran");
      }
    } catch (error) {
      console.error("Error deleting pembayaran:", error);
      toast.error("Terjadi kesalahan saat menghapus pembayaran");
    }
  };

  const submitEditPembayaran = async () => {
    try {
      const response = await UpdatePembayaranSiswa(
        id,
        idTagihan,
        formData.status,
        formData.harga
      );

      if (response) {
        toast.success("Pembayaran berhasil diperbarui");
        fetchTagihan();
        handleCloseEdit();
      } else {
        toast.error("Gagal memperbarui pembayaran");
      }
    } catch (error) {
      console.error("Error updating pembayaran:", error);
      toast.error("Terjadi kesalahan saat memperbarui pembayaran");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOpenTambah = () => {
    getAllPembayaran();
    setOpenTambah(true);
  };
  const handleCloseTambah = () => {
    setSelectedIds([]);
    setOpenTambah(false);
  };
  const handleOpenEdit = (item) => {
    setIdTagihan(item.id);
    setFormData({
      harga: item.harga,
      status: item.status,
    });
    setOpenEdit(true);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  useEffect(() => {
    fetchTagihan();
  }, []);

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 3,
        p: 3,
        p: 4,
        minHeight: "100vh",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <Typography variant="h5" fontWeight={600} mb={1} color={primaryColor}>
          Pembayaran Siswa
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddCard />}
          sx={{
            backgroundColor: primaryColor,
            "&:hover": { backgroundColor: "#6d142f" },
          }}
          onClick={handleOpenTambah}
        >
          Tambah Tagihan
        </Button>
      </div>

      <Table
        component={Paper}
        sx={{ borderRadius: 2, overflow: "hidden", mb: 4 }}
      >
        <TableHead>
          <TableRow sx={{ backgroundColor: primaryColor }}>
            <TableCell sx={{ color: "white" }}>Code Pembayaran</TableCell>
            <TableCell sx={{ color: "white" }}>Nama Pembayaran</TableCell>
            <TableCell sx={{ color: "white" }}>Harga Pembayaran</TableCell>
            <TableCell sx={{ color: "white" }}>Status Pembayaran</TableCell>
            <TableCell sx={{ color: "white" }}>Aksi</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tagihan.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{item.codePembayaran}</TableCell>
              <TableCell>{item.pembayaran.namaPembayaran}</TableCell>
              <TableCell>{formatUang(item.harga)} </TableCell>
              <TableCell>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.status === "LUNAS"
                      ? "bg-green-100 text-green-700"
                      : item.status === "BELUM_LUNAS"
                      ? "bg-red-100 text-red-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {item.status}
                </span>
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleOpenEdit(item)}>
                  <Edit sx={{ color: "#85193C" }} />
                </IconButton>
                <IconButton onClick={() => deletePembayaran(item.id)}>
                  <Delete sx={{ color: "#85193C" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <TambahTagihanSd
        openTambah={openTambah}
        handleCloseTambah={handleCloseTambah}
        selectedIds={selectedIds}
        togglePembayaran={togglePembayaran}
        filteredPembayaran={filteredPembayaran}
        setSearch={setSearch}
        search={search}
        submitPembayaran={submitPembayaran}
      />
      <EditTagihan
        openEdit={openEdit}
        handleCloseEdit={handleCloseEdit}
        handleChange={handleChange}
        submitEditPembayaran={submitEditPembayaran}
        formData={formData}
        setFormData={setFormData}
      />
    </Paper>
  );
}
