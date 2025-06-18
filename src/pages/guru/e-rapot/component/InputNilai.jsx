import React, { useState, useEffect } from "react";
import { Typography, Divider, Box, Button, TextField } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { GetInputNilaiGuru, InputNilaiGuru } from "../../../../api/rapot.api";
import { toast } from "react-toastify";
import debounce from "lodash/debounce";

const tabs = [
  { id: "kuis", label: "Kuis", icon: "" },
  { id: "tugas", label: "Tugas", icon: "" },
  { id: "uts", label: "UTS", icon: "" },
  { id: "uas", label: "UAS", icon: "" },
];

export default function InputNilai() {
  const { japelId } = useParams();
  const [students, setStudents] = useState([]);
  const [activeTab, setActiveTab] = useState("kuis");
  const [mapel, setMapel] = useState("");
  const [expandedStudent, setExpandedStudent] = useState(null);
  const [formState, setFormState] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetInputNilaiGuru(japelId);
        const fetched = response.data.data.map((siswa) => ({
          id: siswa.siswaId,
          name: siswa.namaSiswa,
          nilai: siswa.nilai || [],
        }));
        setMapel(response.data?.jadwalPelajaran);
        setStudents(fetched);
      } catch (err) {
        console.error("Gagal fetch nilai:", err);
      }
    };
    fetchData();
  }, [japelId]);

  const toggleStudent = (studentId) => {
    setExpandedStudent((prev) => (prev === studentId ? null : studentId));
  };

  const handleInputChange = async (studentId, value, capaian) => {
    const student = students.find((s) => s.id === studentId);
    if (!student) return;

    const parsedValue = Number(value);
    if (parsedValue < 0 || parsedValue > 100) return; // validasi nilai

    setFormState((prev) => ({
      ...prev,
      [`${studentId}-${activeTab}`]: {
        nilai: value,
        capaianKompetensi: capaian,
      },
    }));

    try {
      await InputNilaiGuru(japelId, studentId, activeTab, parsedValue, capaian);
      // toast.success("Nilai berhasil disimpan");
    } catch (error) {
      console.error("Gagal menyimpan nilai:", error);
    }
  };

  const getNilaiByTab = (student, tab) => {
    if (!student?.nilai || !Array.isArray(student.nilai)) return {};
    return student.nilai.find((n) => n.assessmentType === tab) || {};
  };

  return (
    <div className="p-3">
      <Button
        onClick={() => navigate(-1)}
        startIcon={<ArrowBack />}
        sx={{ color: "#85193C", mt: 1 }}
      >
        Kembali
      </Button>

      <Typography
        sx={{
          fontSize: "1.3rem",
          color: "#85193C",
          textAlign: "center",
          my: 1,
        }}
      >
        Input Nilai {mapel?.namaMataPelajaran}
      </Typography>

      <div className="max-w-4xl mx-auto p-4">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Student Accordions */}
        <div className="space-y-3">
          {students.map((student) => {
            const nilaiData = getNilaiByTab(student, activeTab);

            return (
              <div
                key={student.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() => toggleStudent(student.id)}
                  className="w-full px-4 py-3 bg-white hover:bg-gray-50 flex items-center justify-between"
                >
                  <div className="flex flex-col items-start">
                    <span className="font-medium text-gray-900">
                      {student.name}
                    </span>
                    <span className="text-sm text-gray-500">{student.nim}</span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      expandedStudent === student.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Content */}
                {expandedStudent === student.id && (
                  <div className="px-4 py-4 bg-gray-50 border-t border-gray-200">
                    <div className="space-y-4">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Masukkan nilai (0-100)"
                        value={
                          formState[`${student.id}-${activeTab}`]?.nilai ??
                          nilaiData.nilai ??
                          ""
                        }
                        onChange={(e) => {
                          const capaian =
                            formState[`${student.id}-${activeTab}`]
                              ?.capaianKompetensi ??
                            nilaiData.capaianKompetensi ??
                            "";
                          handleInputChange(
                            student.id,
                            e.target.value,
                            capaian
                          );
                        }}
                      />
                      <textarea
                        className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={5}
                        placeholder="Catatan capaian kompetensi"
                        value={
                          formState[`${student.id}-${activeTab}`]
                            ?.capaianKompetensi ??
                          nilaiData.capaianKompetensi ??
                          ""
                        }
                        onChange={(e) => {
                          const nilai =
                            formState[`${student.id}-${activeTab}`]?.nilai ??
                            nilaiData.nilai ??
                            "";
                          handleInputChange(student.id, nilai, e.target.value);
                        }}
                      />
                      <div className="pt-3 border-t border-gray-200 text-xs text-gray-500">
                        💡 Nilai akan tersimpan otomatis saat Anda input
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
