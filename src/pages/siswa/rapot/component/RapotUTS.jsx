import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import { ArrowBack, PictureAsPdf } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function DetailUTS() {
  const navigate = useNavigate();
  const rapotData = {
    nama: "SARAH FADILA ASHALINA",
    nis: "0125604726 / 192001020",
    sekolah: "SDN Bintara Jaya III",
    alamat:
      "Jl. Bintara Jaya Raya RT.010/RW.009, Bintara Jaya, Bekasi Barat, Kota Bekasi",
    kelas: "IV / B",
    semester: "1 (Ganjil)",
    tahun: "2022 / 2023",
    npsn: "20223543",
    nilai: [
      {
        no: 1,
        mapel: "Pendidikan Agama dan Budi Pekerti",
        nilai: 80,
        capaian:
          "Ananda cukup baik memahami sifat-sifat bagi Allah, beberapa Asmaulhusna... (disingkat)",
      },
      {
        no: 2,
        mapel: "Pendidikan Pancasila dan Kewarganegaraan",
        nilai: 80,
        capaian:
          "Ananda cukup mempraktikkan nilai-nilai Pancasila secara individual di kelas...",
      },
      {
        no: 3,
        mapel: "Bahasa Indonesia",
        nilai: 80,
        capaian:
          "Ananda cukup memahami dan menjelaskan permasalahan yang dihadapi tokoh cerita...",
      },
    ],
  };

  return (
    <div className="p-4 max-w-4xl mx-auto text-sm">
      <div className="flex justify-between items-center mb-3">
        <Button
          startIcon={<ArrowBack />}
          sx={{ color: "#85193C" }}
          onClick={() => navigate(-1)}
        >
          Kembali
        </Button>
        <Button
          startIcon={<PictureAsPdf />}
          sx={{ backgroundColor: "#85193C", color: "white" }}
          variant="contained"
          size="medium"
        >
          Cetak
        </Button>
      </div>
      {/* Data Diri dengan tampilan yang diperbaiki */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="space-y-3">
          {/* Baris 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold text-gray-700 w-full sm:w-32 mb-1 sm:mb-0">
                  Nama Siswa:
                </span>
                <span className="text-gray-900">{rapotData.nama}</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold text-gray-700 w-full sm:w-32 mb-1 sm:mb-0">
                  NIS / NISN:
                </span>
                <span className="text-gray-900">{rapotData.nis}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold text-gray-700 w-full sm:w-32 mb-1 sm:mb-0">
                  Kelas / Fase:
                </span>
                <span className="text-gray-900">{rapotData.kelas}</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold text-gray-700 w-full sm:w-32 mb-1 sm:mb-0">
                  Semester:
                </span>
                <span className="text-gray-900">{rapotData.semester}</span>
              </div>
            </div>
          </div>

          {/* Baris 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold text-gray-700 w-full sm:w-32 mb-1 sm:mb-0">
                  Nama Sekolah:
                </span>
                <span className="text-gray-900">{rapotData.sekolah}</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold text-gray-700 w-full sm:w-32 mb-1 sm:mb-0">
                  Alamat:
                </span>
                <span className="text-gray-900">{rapotData.alamat}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold text-gray-700 w-full sm:w-32 mb-1 sm:mb-0">
                  Tahun Pelajaran:
                </span>
                <span className="text-gray-900">{rapotData.tahun}</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold text-gray-700 w-full sm:w-32 mb-1 sm:mb-0">
                  NPSN:
                </span>
                <span className="text-gray-900">{rapotData.npsn}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-bold mb-2">Nilai Kuis</h2>
      <div className="overflow-x-auto">
        <table className="w-full border text-xs md:text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">No</th>
              <th className="border p-2">Mata Pelajaran</th>
              <th className="border p-2">Nilai</th>
              <th className="border p-2">Capaian Kompetensi</th>
            </tr>
          </thead>
          <tbody>
            {rapotData.nilai.map((item) => (
              <tr key={item.no}>
                <td className="border p-2 align-top text-center">{item.no}</td>
                <td className="border p-2 align-top">{item.mapel}</td>
                <td className="border p-2 align-top text-center">
                  {item.nilai}
                </td>
                <td className="border p-2 align-top text-center">
                  {item.capaian}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
