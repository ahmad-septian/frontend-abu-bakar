import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import { ArrowBack, PictureAsPdf } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ExportSiswa, GetRapotSiswa } from "../../../../api/rapot.api";

export default function DetailKuis() {
  const navigate = useNavigate();
  const [dataSiswa, setDataSiswa] = useState("");
  const [nilai, setNilai] = useState([]);

  const fetchData = async () => {
    try {
      const response = await GetRapotSiswa();
      setDataSiswa(response.data?.siswa);
      setNilai(response.data.nilai.kuis);
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  const handleExport = async () => {
    try {
      const response = await ExportSiswa("kuis");

      // Ambil nama file dari header
      const disposition = response.headers["content-disposition"];
      let filename = "rapot.pdf"; // fallback

      if (disposition && disposition.includes("filename=")) {
        const match = disposition.match(/filename="?(.+)"?/);
        if (match && match[1]) {
          filename = match[1];
        }
      }

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename); // pakai nama dari backend
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          onClick={handleExport}
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
                <span className="text-gray-900">{dataSiswa.namaLengkap}</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold text-gray-700 w-full sm:w-32 mb-1 sm:mb-0">
                  NIS:
                </span>
                <span className="text-gray-900">{dataSiswa.nis}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold text-gray-700 w-full sm:w-32 mb-1 sm:mb-0">
                  Kelas :
                </span>
                <span className="text-gray-900">{dataSiswa.kelas}</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold text-gray-700 w-full sm:w-32 mb-1 sm:mb-0">
                  NISN:
                </span>
                <span className="text-gray-900">{dataSiswa.nisn || "-"}</span>
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
                <span className="text-gray-900">SDIT Abu Bakar Ash Siddiq</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold text-gray-700 w-full sm:w-32 mb-1 sm:mb-0">
                  Alamat:
                </span>
                <span className="text-gray-900">{dataSiswa?.alamat}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold text-gray-700 w-full sm:w-32 mb-1 sm:mb-0">
                  Tahun Pelajaran:
                </span>
                <span className="text-gray-900">{dataSiswa.tahunAjaran}</span>
              </div>

              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold text-gray-700 w-full sm:w-32 mb-1 sm:mb-0">
                  Tempat, Tgl Lahir:
                </span>
                <span className="text-gray-900">
                  {dataSiswa.tempatLahir || "-"},{" "}
                  {dataSiswa.tanggalLahir
                    ? FormatTanggal(dataSiswa.tanggalLahir)
                    : "-"}
                </span>
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
            </tr>
          </thead>
          <tbody>
            {nilai.map((item, index) => (
              <tr key={index}>
                <td className="border p-2 align-top text-center">
                  {index + 1}
                </td>
                <td className="border p-2 align-top">{item.mataPelajaran}</td>
                <td className="border p-2 align-top text-center">
                  {item.nilai}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
