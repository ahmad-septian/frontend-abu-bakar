import React, { useState, useEffect } from "react";
import { 
  Container, 
  Paper, 
  Typography, 
  Grid, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Box, 
  Divider, 
  Button,
  useTheme,
  useMediaQuery,
  TextField,
  InputAdornment,
  IconButton
} from "@mui/material";
import { School, Description, Download, Search, ArrowBack } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";

export default function RapotSiswa() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Warna maroon yang konsisten untuk semua header
  const headerMaroon = "#85193C";
  
  const [siswa, setSiswa] = useState({
    nama: "Dimas Pratama",
    nis: "2024105",
    kelas: "I B",
    semester: "Ganjil",
    tahunAjaran: "2024/2025",
    waliKelas: "Ibu Ratna Sari, S.Pd."
  });

  const [nilaiMapel, setNilaiMapel] = useState([
    { 
      mapel: "Pendidikan Agama", 
      harian: 85, 
      praUTS: 82, 
      UTS: 88, 
      praUAS: 84, 
      UAS: 90, 
      nilai_akhir: 86, 
      predikat: "A-"
    },
    { 
      mapel: "Bahasa Indonesia", 
      harian: 78, 
      praUTS: 75, 
      UTS: 80, 
      praUAS: 82, 
      UAS: 85, 
      nilai_akhir: 80, 
      predikat: "B+"
    },
    { 
      mapel: "Matematika", 
      harian: 76, 
      praUTS: 70, 
      UTS: 78, 
      praUAS: 80, 
      UAS: 82, 
      nilai_akhir: 78, 
      predikat: "B"
    },
    { 
      mapel: "PPKn", 
      harian: 88, 
      praUTS: 85, 
      UTS: 90, 
      praUAS: 87, 
      UAS: 92, 
      nilai_akhir: 89, 
      predikat: "A-"
    },
    { 
      mapel: "SBDP", 
      harian: 95, 
      praUTS: 92, 
      UTS: 94, 
      praUAS: 96, 
      UAS: 90, 
      nilai_akhir: 93, 
      predikat: "A"
    },
    { 
      mapel: "PJOK", 
      harian: 87, 
      praUTS: 85, 
      UTS: 88, 
      praUAS: 84, 
      UAS: 90, 
      nilai_akhir: 87, 
      predikat: "A-"
    },
  ]);

  const [kehadiran, setKehadiran] = useState({
    sakit: 2,
    izin: 1,
    tanpaKeterangan: 0
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Simulasi fetch data
  }, [id]);

  const calculateAverage = () => {
    const sum = nilaiMapel.reduce((total, item) => total + item.nilai_akhir, 0);
    return (sum / nilaiMapel.length).toFixed(2);
  };

  // Style yang berubah berdasarkan ukuran layar
  const containerPadding = isMobile ? { px: 1, py: 2 } : { p: 4 };
  const titleSize = isMobile ? "h5" : "h4";
  const headerPadding = isMobile ? { p: 1.5 } : { p: 2 };
  const contentPadding = isMobile ? { p: 2 } : { p: 3 };
  const gridSpacing = isMobile ? 1 : 3;
  
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#85193C] text-white p-6 mt-0 shadow-md relative overflow-hidden">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <IconButton color="inherit" onClick={() => navigate(-1)} className="mr-2">
              <ArrowBack />
            </IconButton>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                E-Rapor Siswa
              </h2>
              <p className="text-sm sm:text-base">
                Laporan Perkembangan Belajar Semester {siswa.semester}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <TextField
            fullWidth
            placeholder="Cari Rapor Lama"
            size="small"
            variant="outlined"
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              input: { padding: "10px 12px" },
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "#85193C" }} />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>

      <Container maxWidth="lg" sx={{ my: 2 }}>
        <Paper elevation={3} sx={{ borderRadius: 2, ...containerPadding }}>
          {/* Header Rapot */}
          <Box display="flex" alignItems="center" mb={2}>
            <School sx={{ fontSize: isMobile ? 24 : 36, mr: 1, color: headerMaroon }} />
            <Typography variant={titleSize} component="h1" fontWeight="bold">
              Laporan Perkembangan Belajar Siswa
            </Typography>
          </Box>

          <Divider sx={{ mb: 2 }} />

          {/* Data Siswa */}
          <Box sx={{ mb: 3 }}>
            <Paper 
              variant="outlined" 
              sx={{ 
                p: 0, 
                borderRadius: 1,
                overflow: 'hidden'
              }}
            >
              <Box sx={{ 
                ...headerPadding, 
                bgcolor: headerMaroon, 
                borderTopLeftRadius: 1, 
                borderTopRightRadius: 1
              }}>
                <Typography variant={isMobile ? "subtitle1" : "h6"} sx={{ color: 'white', fontWeight: "bold" }}>
                  Data Siswa
                </Typography>
              </Box>
              
              <Box sx={{ ...contentPadding }}>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={4}>
                    <Box sx={{ display: "flex", mb: 1.5, flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                      <Typography variant="body1" sx={{ minWidth: isMobile ? '80px' : '120px', fontWeight: "medium" }}>Nama</Typography>
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>: {siswa.nama}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", mb: 1.5, flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                      <Typography variant="body1" sx={{ minWidth: isMobile ? '80px' : '120px', fontWeight: "medium" }}>NIS</Typography>
                      <Typography variant="body1">: {siswa.nis}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", mb: { xs: 1.5, sm: 0 }, flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                      <Typography variant="body1" sx={{ minWidth: isMobile ? '80px' : '120px', fontWeight: "medium" }}>Kelas</Typography>
                      <Typography variant="body1">: {siswa.kelas}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={0} sm={4}>
                    {/* Spacer column */}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box sx={{ display: "flex", mb: 1.5, flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                      <Typography variant="body1" sx={{ minWidth: isMobile ? '80px' : '120px', fontWeight: "medium" }}>Semester</Typography>
                      <Typography variant="body1">: {siswa.semester}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", mb: 1.5, flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                      <Typography variant="body1" sx={{ minWidth: isMobile ? '80px' : '120px', fontWeight: "medium" }}>Tahun Ajaran</Typography>
                      <Typography variant="body1">: {siswa.tahunAjaran}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", mb: { xs: 1.5, sm: 0 }, flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                      <Typography variant="body1" sx={{ minWidth: isMobile ? '80px' : '120px', fontWeight: "medium" }}>Wali Kelas</Typography>
                      <Typography variant="body1">: {siswa.waliKelas}</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Box>

          {/* Nilai Akademik - Seperti gambar */}
          <Box sx={{ mb: 3 }}>
            {/* Header Nilai Akademik */}
            <Box sx={{ 
              p: 2, 
              bgcolor: headerMaroon, 
              color: 'white',
              borderTopLeftRadius: 1, 
              borderTopRightRadius: 1 
            }}>
              <Typography variant={isMobile ? "subtitle1" : "h6"} fontWeight="bold">
                Hasil Belajar
              </Typography>
            </Box>
            
            {/* Tabel Nilai Akademik */}
            <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 0 }}>
              <Table size={isMobile ? "small" : "medium"}>
                <TableHead sx={{ bgcolor: headerMaroon }}>
                  <TableRow>
                    <TableCell 
                      sx={{ 
                        color: 'white', 
                        fontWeight: 'bold',
                        borderBottom: 0,
                        width: '5%'
                      }}
                    >
                      No
                    </TableCell>
                    <TableCell 
                      sx={{ 
                        color: 'white', 
                        fontWeight: 'bold',
                        borderBottom: 0,
                        width: '25%'
                      }}
                    >
                      Mata Pelajaran
                    </TableCell>
                    <TableCell 
                      align="center" 
                      sx={{ 
                        color: 'white', 
                        fontWeight: 'bold',
                        borderBottom: 0,
                        width: '10%'
                      }}
                    >
                      Harian
                    </TableCell>
                    <TableCell 
                      align="center" 
                      sx={{ 
                        color: 'white', 
                        fontWeight: 'bold',
                        borderBottom: 0,
                        width: '10%'
                      }}
                    >
                      Pra UTS
                    </TableCell>
                    <TableCell 
                      align="center" 
                      sx={{ 
                        color: 'white', 
                        fontWeight: 'bold',
                        borderBottom: 0,
                        width: '10%'
                      }}
                    >
                      UTS
                    </TableCell>
                    <TableCell 
                      align="center" 
                      sx={{ 
                        color: 'white', 
                        fontWeight: 'bold',
                        borderBottom: 0,
                        width: '10%'
                      }}
                    >
                      Pra UAS
                    </TableCell>
                    <TableCell 
                      align="center" 
                      sx={{ 
                        color: 'white', 
                        fontWeight: 'bold',
                        borderBottom: 0,
                        width: '10%'
                      }}
                    >
                      UAS
                    </TableCell>
                    <TableCell 
                      align="center" 
                      sx={{ 
                        color: 'white', 
                        fontWeight: 'bold',
                        borderBottom: 0,
                        width: '10%'
                      }}
                    >
                      Nilai Akhir
                    </TableCell>
                    <TableCell 
                      align="center" 
                      sx={{ 
                        color: 'white', 
                        fontWeight: 'bold',
                        borderBottom: 0,
                        width: '10%'
                      }}
                    >
                      Predikat
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {nilaiMapel.map((nilai, index) => (
                    <TableRow key={index}>
                      <TableCell 
                        sx={{ 
                          py: 1.5, 
                          borderBottom: index === nilaiMapel.length - 1 ? 0 : '1px solid rgba(224, 224, 224, 1)'
                        }}
                      >
                        {index + 1}
                      </TableCell>
                      <TableCell 
                        sx={{ 
                          py: 1.5,
                          borderBottom: index === nilaiMapel.length - 1 ? 0 : '1px solid rgba(224, 224, 224, 1)'
                        }}
                      >
                        {nilai.mapel}
                      </TableCell>
                      <TableCell 
                        align="center" 
                        sx={{ 
                          py: 1.5,
                          borderBottom: index === nilaiMapel.length - 1 ? 0 : '1px solid rgba(224, 224, 224, 1)'
                        }}
                      >
                        {nilai.harian}
                      </TableCell>
                      <TableCell 
                        align="center" 
                        sx={{ 
                          py: 1.5,
                          borderBottom: index === nilaiMapel.length - 1 ? 0 : '1px solid rgba(224, 224, 224, 1)'
                        }}
                      >
                        {nilai.praUTS}
                      </TableCell>
                      <TableCell 
                        align="center" 
                        sx={{ 
                          py: 1.5,
                          borderBottom: index === nilaiMapel.length - 1 ? 0 : '1px solid rgba(224, 224, 224, 1)'
                        }}
                      >
                        {nilai.UTS}
                      </TableCell>
                      <TableCell 
                        align="center" 
                        sx={{ 
                          py: 1.5,
                          borderBottom: index === nilaiMapel.length - 1 ? 0 : '1px solid rgba(224, 224, 224, 1)'
                        }}
                      >
                        {nilai.praUAS}
                      </TableCell>
                      <TableCell 
                        align="center" 
                        sx={{ 
                          py: 1.5,
                          borderBottom: index === nilaiMapel.length - 1 ? 0 : '1px solid rgba(224, 224, 224, 1)'
                        }}
                      >
                        {nilai.UAS}
                      </TableCell>
                      <TableCell 
                        align="center" 
                        sx={{ 
                          py: 1.5,
                          borderBottom: index === nilaiMapel.length - 1 ? 0 : '1px solid rgba(224, 224, 224, 1)',
                          fontWeight: 'bold',
                          bgcolor: 'rgba(133, 25, 60, 0.05)'
                        }}
                      >
                        {nilai.nilai_akhir}
                      </TableCell>
                      <TableCell 
                        align="center" 
                        sx={{ 
                          py: 1.5,
                          borderBottom: index === nilaiMapel.length - 1 ? 0 : '1px solid rgba(224, 224, 224, 1)',
                          fontWeight: 'bold',
                          color: nilai.predikat.startsWith('A') ? 'success.main' : 
                                nilai.predikat.startsWith('B') ? 'info.main' : 
                                nilai.predikat.startsWith('C') ? 'warning.main' : 'error.main'
                        }}
                      >
                        {nilai.predikat}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Kehadiran */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ 
              ...headerPadding, 
              bgcolor: headerMaroon, 
              borderTopLeftRadius: 1, 
              borderTopRightRadius: 1 
            }}>
              <Typography variant={isMobile ? "subtitle1" : "h6"} sx={{ color: 'white', fontWeight: "bold" }}>
                Kehadiran
              </Typography>
            </Box>
            
            <Paper variant="outlined" sx={{ ...contentPadding, borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={4} sm={4}>
                  <Paper elevation={0} sx={{ p: isMobile ? 1 : 2, textAlign: "center", bgcolor: "info.lighter", borderRadius: 2 }}>
                    <Typography variant={isMobile ? "h6" : "h5"}>{kehadiran.sakit}</Typography>
                    <Typography variant={isMobile ? "body2" : "body1"}>Sakit</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Paper elevation={0} sx={{ p: isMobile ? 1 : 2, textAlign: "center", bgcolor: "warning.lighter", borderRadius: 2 }}>
                    <Typography variant={isMobile ? "h6" : "h5"}>{kehadiran.izin}</Typography>
                    <Typography variant={isMobile ? "body2" : "body1"}>Izin</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Paper elevation={0} sx={{ p: isMobile ? 1 : 2, textAlign: "center", bgcolor: "error.lighter", borderRadius: 2 }}>
                    <Typography variant={isMobile ? "h6" : "h5"}>{kehadiran.tanpaKeterangan}</Typography>
                    <Typography variant={isMobile ? "body2" : "body1"}>Tanpa Keterangan</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Box>

          {/* Catatan Wali Kelas */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ 
              ...headerPadding, 
              bgcolor: headerMaroon, 
              borderTopLeftRadius: 1, 
              borderTopRightRadius: 1 
            }}>
              <Typography variant={isMobile ? "subtitle1" : "h6"} sx={{ color: 'white', fontWeight: "bold" }}>
                Catatan Wali Kelas
              </Typography>
            </Box>
            
            <Paper variant="outlined" sx={{ ...contentPadding, borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
              <Typography variant={isMobile ? "body2" : "body1"}>
                Dimas adalah siswa yang ceria dan mulai beradaptasi dengan baik di kelas 1. Ia menunjukkan minat besar pada kegiatan mewarnai dan bernyanyi. Dimas perlu meningkatkan kemampuan membaca dan menulis dengan lebih banyak latihan di rumah. Dimas juga perlu dibiasakan untuk mengangkat tangan sebelum berbicara dan lebih tertib dalam berbaris. Orang tua diharapkan mendampingi Dimas membaca setiap hari minimal 15 menit dan membantu menyelesaikan PR dengan teratur.
              </Typography>
            </Paper>
          </Box>

          {/* Tombol Aksi */}
          <Box display="flex" justifyContent="center" gap={isMobile ? 1 : 2} mt={3} flexWrap={isMobile ? "wrap" : "nowrap"}>
            <Button 
              variant="contained" 
              startIcon={<Download />}
              sx={{ bgcolor: headerMaroon }}
              size={isMobile ? "medium" : "large"}
              fullWidth={isMobile}
            >
              Unduh Rapor
            </Button>
            <Button 
              variant="outlined" 
              startIcon={<Description />}
              sx={{ color: headerMaroon, borderColor: headerMaroon }}
              size={isMobile ? "medium" : "large"}
              fullWidth={isMobile}
            >
              Lihat Rapor Sebelumnya
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}