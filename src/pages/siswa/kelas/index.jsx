import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Divider,
  TextField,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Paper
} from "@mui/material";
import { Newspaper, Campaign, Info } from "@mui/icons-material";

const dummyInfo = [
  {
    id: 1,
    judul: "Lomba Poster Hari Guru",
    deskripsi: "Ikuti lomba poster dalam rangka Hari Guru Nasional. Terbuka untuk semua jenjang.",
    tanggal: "14 Mei 2025",
  },
  {
    id: 2,
    judul: "Pentas Seni Semester Genap",
    deskripsi: "Rayakan kreativitas siswa melalui berbagai pertunjukan seni.",
    tanggal: "20 Mei 2025",
  },
  {
    id: 3,
    judul: "Pengumuman Libur Akhir Semester",
    deskripsi: "Libur dimulai 1 Juni 2025 dan masuk kembali 15 Juli 2025.",
    tanggal: "10 Mei 2025",
  },
];

const kategoriList = ["Semua", "Lomba", "Pentas", "Pengumuman"];

const infoTetap = [
  "SOP Pembayaran",
  "Peraturan Tetap Sekolah",
  "Visi dan Misi",
  "Aturan Berseragam",
];

export default function InformasiTerkini() {
  const [search, setSearch] = useState("");
  const [kategori, setKategori] = useState("Semua");

  const filteredInfo = dummyInfo.filter((info) => {
    const cocokSearch = info.judul.toLowerCase().includes(search.toLowerCase());
    const cocokKategori =
      kategori === "Semua" || info.judul.toLowerCase().includes(kategori.toLowerCase());
    return cocokSearch && cocokKategori;
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Judul */}
      <div className="flex items-center mb-6 text-[#7b1e3a]">
        <Newspaper className="mr-2" />
        <h1 className="text-2xl font-bold">Informasi Terkini</h1>
      </div>

      {/* Filter Pencarian */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <TextField
          label="Cari berdasarkan judul"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />
        <TextField
          select
          label="Filter Kategori"
          variant="outlined"
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
          fullWidth
        >
          {kategoriList.map((kat) => (
            <MenuItem key={kat} value={kat}>
              {kat}
            </MenuItem>
          ))}
        </TextField>
      </div>

      {/* Info Sementara */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {filteredInfo.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 italic">
            Tidak ada informasi ditemukan.
          </div>
        ) : (
          filteredInfo.map((info) => (
            <Card key={info.id} className="rounded-2xl shadow-md border border-gray-200">
              <CardHeader
                avatar={<Campaign className="text-[#7b1e3a]" />}
                title={
                  <Typography variant="h6" className="text-[#7b1e3a] font-semibold">
                    {info.judul}
                  </Typography>
                }
                subheader={<span className="text-sm text-gray-500">{info.tanggal}</span>}
              />
              <Divider />
              <CardContent>
                <Typography variant="body2" className="text-gray-700 mb-4 leading-relaxed">
                  {info.deskripsi}
                </Typography>
                <Button size="small" className="text-[#7b1e3a] hover:underline p-0 normal-case">
                  Selengkapnya
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Informasi Tetap */}
      <Paper elevation={2} className="p-4 bg-white rounded-xl border">
        <div className="flex items-center mb-4 text-[#7b1e3a]">
          <Info className="mr-2" />
          <h2 className="text-xl font-bold">Informasi Tetap</h2>
        </div>
        <List>
          {infoTetap.map((item, index) => (
            <ListItem key={index} divider>
              <ListItemText primary={item} />
              <Button size="small" className="text-[#7b1e3a] hover:underline normal-case">
                Lihat
              </Button>
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
}
