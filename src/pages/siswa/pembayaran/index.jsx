import React, { useState, useEffect } from "react";
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  FormControl, 
  FormControlLabel, 
  Radio, 
  RadioGroup, 
  Checkbox, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Collapse,
  IconButton,
  Divider,
  InputAdornment,
  Container
} from "@mui/material";
import { 
  Save as SaveIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Receipt as ReceiptIcon,
  ArrowBack,
  Search
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function PembayaranSiswa() {
  const navigate = useNavigate();
  
  // State untuk data siswa
  const [dataSiswa, setDataSiswa] = useState({
    semester: "Ganjil"
  });

  // State untuk komponen pembayaran
  const [pembayaran, setPembayaran] = useState({
    uangPangkal: 0,
    uangSPP: 0,
    uangKegiatan: 0,
    uangSeragam: 0,
    uangBuku: 0,
    uangEkskul: 0,
    uangCatering: 0,
    uangSaku: 0,
    uangUjian: 0,
    uangTeknologi: 0,
    uangInfaq: 0
  });

  // State untuk status pembayaran
  const [statusPembayaran, setStatusPembayaran] = useState({
    uangPangkal: false,
    uangSPP: false,
    uangKegiatan: false,
    uangSeragam: false,
    uangBuku: false,
    uangEkskul: false,
    uangCatering: false,
    uangSaku: false,
    uangUjian: false,
    uangTeknologi: false,
    uangInfaq: false
  });

  // State untuk history pembayaran
  const [riwayatPembayaran, setRiwayatPembayaran] = useState([]);

  // State untuk tanggal pembayaran (menggunakan tanggal saat ini)
  const [tanggalPembayaran] = useState(
    new Date().toISOString().split("T")[0]
  );
  
  // State untuk expanded row di tabel riwayat
  const [expandedRow, setExpandedRow] = useState(null);

  // Definisi komponen pembayaran dengan harga tetap
  const komponenPembayaran = [
    { id: "uangPangkal", label: "Uang Pangkal", harga: 1000000 },
    { id: "uangSPP", label: "Uang SPP", harga: 1000000 },
    { id: "uangKegiatan", label: "Uang Kegiatan", harga: 1000000 },
    { id: "uangSeragam", label: "Uang Seragam", harga: 1000000 },
    { id: "uangBuku", label: "Uang Buku / LKS", harga: 1000000 },
    { id: "uangEkskul", label: "Uang Ekskul", harga: 1000000 },
    { id: "uangCatering", label: "Uang Catering", harga: 1000000 },
    { id: "uangSaku", label: "Uang Saku", harga: 1000000 },
    { id: "uangUjian", label: "Uang Ujian", harga: 1000000 },
    { id: "uangTeknologi", label: "Uang Pengembangan Teknologi", harga: 1000000 },
    { id: "uangInfaq", label: "Uang Infaq dan Shadaqah", harga: 1000000 }
  ];

  // Hitung total pembayaran
  const hitungTotal = () => {
    return Object.values(pembayaran).reduce((total, nilai) => total + nilai, 0);
  };

  // Fungsi handle change untuk input siswa
  const handleSiswaChange = (e) => {
    const { name, value } = e.target;
    setDataSiswa((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Fungsi handle change untuk input pembayaran
  const handlePembayaranChange = (e) => {
    const { name, value } = e.target;
    setPembayaran((prev) => ({
      ...prev,
      [name]: parseInt(value) || 0
    }));
  };

  // Fungsi toggle status pembayaran
  const toggleStatusPembayaran = (komponen) => {
    // Temukan komponen dalam array
    const selected = komponenPembayaran.find(item => item.id === komponen);
    
    setStatusPembayaran((prev) => {
      const newStatus = {
        ...prev,
        [komponen]: !prev[komponen]
      };
      
      // Jika checkbox di-check, set nilai pembayaran ke harga tetap
      // Jika di-uncheck, set nilai pembayaran ke 0
      setPembayaran((prevPembayaran) => ({
        ...prevPembayaran,
        [komponen]: newStatus[komponen] ? selected.harga : 0
      }));
      
      return newStatus;
    });
  };

  // Fungsi handle submit pembayaran
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Cek apakah ada komponen yang dipilih
    const adaKomponenDipilih = Object.values(statusPembayaran).some(status => status);
    if (!adaKomponenDipilih) {
      alert("Belum ada komponen pembayaran yang dipilih!");
      return;
    }
    
    // Buat objek history pembayaran baru
    const pembayaranBaru = {
      id: Date.now(),
      tanggal: tanggalPembayaran,
      siswa: { 
        nama: "Ahmad Septian", // Data siswa yang sedang login
        nis: "12345",
        kelas: "XI-A" 
      },
      pembayaran: { ...pembayaran },
      status: { ...statusPembayaran },
      metode: "tunai", // Default metode pembayaran
      total: hitungTotal()
    };
    
    // Tambahkan ke riwayat pembayaran
    setRiwayatPembayaran([pembayaranBaru, ...riwayatPembayaran]);
    
    // Reset form pembayaran
    setPembayaran({
      uangPangkal: 0,
      uangSPP: 0,
      uangKegiatan: 0,
      uangSeragam: 0,
      uangBuku: 0,
      uangEkskul: 0,
      uangCatering: 0,
      uangSaku: 0,
      uangUjian: 0,
      uangTeknologi: 0,
      uangInfaq: 0
    });
    
    // Reset status pembayaran
    setStatusPembayaran({
      uangPangkal: false,
      uangSPP: false,
      uangKegiatan: false,
      uangSeragam: false,
      uangBuku: false,
      uangEkskul: false,
      uangCatering: false,
      uangSaku: false,
      uangUjian: false,
      uangTeknologi: false,
      uangInfaq: false
    });
    
    alert("Pembayaran berhasil disimpan!");
  };

  // Format rupiah
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(angka);
  };

  // Fungsi handle expand row
  const handleExpandRow = (rowId) => {
    setExpandedRow(expandedRow === rowId ? null : rowId);
  };

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
                Pembayaran Siswa
              </h2>
              <p className="text-sm sm:text-base">
                Transaksi Pembayaran Siswa
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <TextField
            fullWidth
            placeholder="Cari Pembayaran"
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

      <Container maxWidth="lg" sx={{ mt: 3, mb: 5 }}>
        <Grid container spacing={3}>
          {/* Form Komponen Pembayaran */}
          <Grid item xs={12}>
            <Card elevation={3}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6">
                    Pembayaran
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body2">
                      Tanggal: {new Date(tanggalPembayaran).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </Typography>
                  </Box>
                </Box>
                <Divider sx={{ mb: 2 }} />
                
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    {komponenPembayaran.map((komponen) => (
                      <Grid item xs={12} sm={6} md={4} key={komponen.id}>
                        <Box sx={{ 
                          display: 'flex', 
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          border: '1px solid #e0e0e0', 
                          borderRadius: '8px',
                          p: 2,
                          height: '100px',
                          minHeight: '100px',
                          bgcolor: statusPembayaran[komponen.id] ? 'rgba(133, 25, 60, 0.05)' : 'transparent',
                          transition: 'all 0.2s ease-in-out',
                          '&:hover': {
                            borderColor: '#85193C'
                          }
                        }}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={statusPembayaran[komponen.id]}
                                onChange={() => toggleStatusPembayaran(komponen.id)}
                                size="small"
                                sx={{
                                  color: '#85193C',
                                  '&.Mui-checked': {
                                    color: '#85193C',
                                  },
                                }}
                              />
                            }
                            label={komponen.label}
                            sx={{ marginRight: 0 }}
                          />
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              ml: 4, 
                              mt: 1,
                              fontWeight: 'bold',
                              color: statusPembayaran[komponen.id] ? '#85193C' : 'text.secondary',
                            }}
                          >
                            {formatRupiah(komponen.harga)}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  
                  <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6">
                      Total: {formatRupiah(hitungTotal())}
                    </Typography>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      color="primary" 
                      startIcon={<SaveIcon />}
                      disabled={!Object.values(statusPembayaran).some(value => value)}
                      sx={{ bgcolor: '#85193C', '&:hover': { bgcolor: '#6B1531' } }}
                    >
                      Lanjutkan Pembayaran
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Riwayat Pembayaran */}
          <Grid item xs={12}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Riwayat Pembayaran
                </Typography>
                <Divider sx={{ mb: 2 }} />
                
                {riwayatPembayaran.length > 0 ? (
                  <TableContainer component={Paper} variant="outlined">
                    <Table sx={{ minWidth: 650 }} size="small">
                      <TableHead>
                        <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                          <TableCell padding="checkbox"></TableCell>
                          <TableCell>Tanggal</TableCell>
                          <TableCell>NIS</TableCell>
                          <TableCell>Nama</TableCell>
                          <TableCell>Kelas</TableCell>
                          <TableCell>Metode</TableCell>
                          <TableCell align="right">Total</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {riwayatPembayaran.map((riwayat) => (
                          <React.Fragment key={riwayat.id}>
                            <TableRow hover>
                              <TableCell padding="checkbox">
                                <IconButton
                                  size="small"
                                  onClick={() => handleExpandRow(riwayat.id)}
                                >
                                  {expandedRow === riwayat.id ? (
                                    <KeyboardArrowUpIcon />
                                  ) : (
                                    <KeyboardArrowDownIcon />
                                  )}
                                </IconButton>
                              </TableCell>
                              <TableCell>{riwayat.tanggal}</TableCell>
                              <TableCell>{riwayat.siswa.nis}</TableCell>
                              <TableCell>{riwayat.siswa.nama}</TableCell>
                              <TableCell>{riwayat.siswa.kelas}</TableCell>
                              <TableCell>
                                {riwayat.metode === 'tunai' ? 'Tunai' : 
                                 riwayat.metode === 'transfer' ? 'Transfer Bank' : 'QRIS'}
                              </TableCell>
                              <TableCell align="right">{formatRupiah(riwayat.total)}</TableCell>
                            </TableRow>
                            
                            <TableRow>
                              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                                <Collapse in={expandedRow === riwayat.id} timeout="auto" unmountOnExit>
                                  <Box sx={{ margin: 2 }}>
                                    <Typography variant="subtitle2" gutterBottom component="div">
                                      Detail Pembayaran
                                    </Typography>
                                    <Table size="small">
                                      <TableHead>
                                        <TableRow sx={{ backgroundColor: '#f9f9f9' }}>
                                          <TableCell>Komponen</TableCell>
                                          <TableCell align="right">Jumlah</TableCell>
                                          <TableCell>Status</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {komponenPembayaran.map((komponen) => (
                                          riwayat.status[komponen.id] && (
                                            <TableRow key={komponen.id}>
                                              <TableCell component="th" scope="row">
                                                {komponen.label}
                                              </TableCell>
                                              <TableCell align="right">
                                                {formatRupiah(riwayat.pembayaran[komponen.id])}
                                              </TableCell>
                                              <TableCell>
                                                <Box
                                                  sx={{
                                                    display: 'inline-block',
                                                    px: 1,
                                                    py: 0.5,
                                                    borderRadius: 1,
                                                    bgcolor: 'success.main',
                                                    color: 'white',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 'bold'
                                                  }}
                                                >
                                                  Dibayar
                                                </Box>
                                              </TableCell>
                                            </TableRow>
                                          )
                                        ))}
                                      </TableBody>
                                    </Table>
                                  </Box>
                                </Collapse>
                              </TableCell>
                            </TableRow>
                          </React.Fragment>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                ) : (
                  <Typography variant="body2" color="textSecondary" sx={{ py: 2, textAlign: 'center' }}>
                    Belum ada riwayat pembayaran
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}