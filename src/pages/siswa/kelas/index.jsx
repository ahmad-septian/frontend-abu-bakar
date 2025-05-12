import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import {} from "@mui/icons-material";
import {} from "react-router-dom";

const dummyKelas = [
    { id: 1, nama: 'Matematika', deskripsi: 'Kelas Matematika dasar untuk siswa kelas 7' },
    { id: 2, nama: 'Bahasa Indonesia', deskripsi: 'Belajar tata bahasa dan sastra Indonesia' },
    { id: 3, nama: 'IPA', deskripsi: 'Ilmu Pengetahuan Alam untuk siswa menengah' },
  ];

export default function KelasSiswa() {
  return (
<div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Daftar Kelas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyKelas.map((kelas) => (
          <Card key={kelas.id} className="shadow-lg rounded-2xl">
            <CardHeader
              title={
                <Typography variant="h6" className="font-semibold text-gray-900">
                  {kelas.nama}
                </Typography>
              }
            />
            <CardContent>
              <Typography variant="body2" className="text-gray-700">
                {kelas.deskripsi}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
