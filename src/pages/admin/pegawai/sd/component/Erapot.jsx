import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import { GetInputNilaiAdmin } from "../../../../../api/rapot.api";

export default function Erapot() {
  const navigate = useNavigate();
  const { id, japelId } = useParams();
  const [data, setData] = useState({});
  const [assessmentTypes, setAssessmentTypes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await GetInputNilaiAdmin(id, japelId);
      setData(response.data);

      // Extract assessment types dari data siswa pertama
      if (response.data?.data?.[0]?.nilai) {
        const types = response.data.data[0].nilai.map((n) => n.assessmentType);
        setAssessmentTypes(types);
      }
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id, japelId]);

  const getGradeColor = (grade) => {
    const colors = {
      A: "bg-green-50 text-green-700 border border-green-200",
      B: "bg-blue-50 text-blue-700 border border-blue-200",
      C: "bg-yellow-50 text-yellow-700 border border-yellow-200",
      D: "bg-orange-50 text-orange-700 border border-orange-200",
      E: "bg-red-50 text-red-700 border border-red-200",
    };
    return colors[grade] || "bg-gray-50 text-gray-700 border border-gray-200";
  };

  return (
    <div>
      <Button
        onClick={() => navigate(-1)}
        startIcon={<ArrowBack />}
        sx={{ color: "#85193C" }}
      >
        Kembali
      </Button>
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">
          {data.jadwalPelajaran?.namaMapel || "Loading..."}
        </h1>
        <p className="text-gray-600">
          Kelas {data.jadwalPelajaran?.kelas || "-"}
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="bg-red-800 p-4">
          <h2 className="text-lg font-semibold text-white">Data Nilai Siswa</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  No
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Nama Siswa
                </th>
                {assessmentTypes.map((type) => (
                  <React.Fragment key={type}>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 capitalize">
                      {type.toUpperCase()}
                    </th>
                    {/* <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                        Capaian
                      </th> */}
                  </React.Fragment>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data?.data?.map((siswa, idx) => {
                const nilaiMap = Object.fromEntries(
                  siswa.nilai?.map((n) => [n.assessmentType, n]) || []
                );

                return (
                  <tr key={siswa.siswaId} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {idx + 1}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      {siswa.namaSiswa}
                    </td>
                    {assessmentTypes.map((type) => {
                      const entry = nilaiMap[type];
                      return (
                        <React.Fragment key={`${siswa.siswaId}-${type}`}>
                          <td className="px-4 py-3 text-center">
                            {entry && entry.nilai !== null ? (
                              <div>
                                <div className="text-lg font-semibold text-gray-900 mb-1">
                                  {entry.nilai}
                                </div>
                                <span
                                  className={`inline-block px-2 py-1 rounded text-xs font-medium ${getGradeColor(
                                    entry.grade
                                  )}`}
                                >
                                  {entry.grade}
                                </span>
                              </div>
                            ) : (
                              <span className="text-sm text-gray-500">-</span>
                            )}
                          </td>
                          {/* <td className="px-4 py-3">
                              {entry?.capaianKompetensi ? (
                                <div className="bg-green-50 border border-green-200 rounded p-2">
                                  <p className="text-sm text-green-700">
                                    {entry.capaianKompetensi}
                                  </p>
                                </div>
                              ) : (
                                <span className="text-sm text-gray-500">-</span>
                              )}
                            </td> */}
                        </React.Fragment>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Loading State */}
        {!data?.data && (
          <div className="text-center py-8">
            <p className="text-gray-500">Memuat data...</p>
          </div>
        )}

        {/* Empty State */}
        {data?.data && data.data.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">Belum ada data siswa</p>
          </div>
        )}
      </div>
    </div>
  );
}
