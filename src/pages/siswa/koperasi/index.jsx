import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
  useTheme,
  useMediaQuery,
  Tabs,
  Tab
} from "@mui/material";
import {
  ShoppingCart,
  Search,
  Storefront,
  ArrowBack,
  School
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function KoperasiSiswa() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  
  // Warna utama
  const primaryColor = "#85193C"; // Menggunakan warna maroon yang sama dengan tampilan rapor
  
  // Data produk koperasi
  const [categories] = useState([
    { id: 'atk', name: 'Alat Tulis' },
    { id: 'seragam', name: 'Seragam Sekolah' }
  ]);
  
  const [products] = useState({
    atk: [
      { id: 1, name: "Buku Tulis", price: 5000, stock: 150, image: null },
      { id: 2, name: "Pensil 2B", price: 3000, stock: 200, image: null },
      { id: 3, name: "Pulpen Hitam", price: 4000, stock: 120, image: null },
      { id: 4, name: "Penggaris 30cm", price: 7000, stock: 75, image: null },
      { id: 5, name: "Penghapus", price: 2500, stock: 100, image: null },
      { id: 6, name: "Tip-X", price: 10000, stock: 50, image: null }
    ],
    seragam: [
      { id: 7, name: "Seragam Merah Putih (SD)", price: 150000, stock: 45, image: null },
      { id: 8, name: "Seragam Batik", price: 120000, stock: 50, image: null },
      { id: 9, name: "Seragam Pramuka", price: 160000, stock: 35, image: null },
      { id: 10, name: "Seragam Olahraga", price: 135000, stock: 40, image: null },
      { id: 11, name: "Dasi Merah", price: 25000, stock: 60, image: null },
      { id: 12, name: "Topi Sekolah", price: 35000, stock: 55, image: null }
    ]
  });
  
  // Handler untuk perubahan tab
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  
  // Mendapatkan produk berdasarkan kategori yang aktif
  const activeProducts = products[categories[tabValue].id];
  
  return (
    <>
      {/* Hero Section - mirip dengan e-rapot */}
      <div className="bg-[#85193C] text-white p-6 mt-0 shadow-md relative overflow-hidden">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <IconButton color="inherit" onClick={() => navigate(-1)} className="mr-2">
              <ArrowBack />
            </IconButton>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                Koperasi Sekolah
              </h2>
              <p className="text-sm sm:text-base">
                Alat Tulis Kantor dan Seragam Sekolah
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <TextField
            fullWidth
            placeholder="Cari produk..."
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
        {/* Banner Koperasi */}
        <Paper 
          elevation={0}
          sx={{ 
            p: 3, 
            mb: 4, 
            borderRadius: 2, 
            backgroundColor: 'rgba(133, 25, 60, 0.05)',
            display: 'flex',
            alignItems: 'center',
            flexDirection: isMobile ? 'column' : 'row'
          }}
        >
          <School sx={{ 
            fontSize: isMobile ? 60 : 80, 
            color: primaryColor,
            mr: isMobile ? 0 : 3,
            mb: isMobile ? 2 : 0
          }} />
          <Box>
            <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontWeight: "bold", color: primaryColor, mb: 1 }}>
              Selamat Datang di Koperasi Sekolah
            </Typography>
            <Typography variant="body1">
              Tempat belanja kebutuhan sekolah seperti alat tulis dan seragam dengan kualitas terbaik dan harga terjangkau. Semua pembelian mendukung kegiatan sekolah kita.
            </Typography>
          </Box>
        </Paper>

        {/* Tab Kategori Produk */}
        <Box sx={{ mb: 3 }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{
              '.MuiTabs-indicator': {
                backgroundColor: primaryColor,
              },
              '.Mui-selected': {
                color: `${primaryColor} !important`,
                fontWeight: 'bold',
              }
            }}
          >
            {categories.map((category) => (
              <Tab 
                key={category.id} 
                label={category.name} 
                sx={{ 
                  textTransform: 'none',
                  fontWeight: 'medium',
                  fontSize: '1rem'
                }} 
              />
            ))}
          </Tabs>
        </Box>

        {/* Daftar Produk */}
        <Grid container spacing={3}>
          {activeProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <Box
                  sx={{
                    height: 180,
                    backgroundColor: 'rgba(133, 25, 60, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Storefront sx={{ fontSize: 70, color: 'rgba(133, 25, 60, 0.2)' }} />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Stok tersedia: {product.stock}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: primaryColor }}>
                    Rp {product.price.toLocaleString('id-ID')}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button 
                    variant="contained" 
                    fullWidth
                    startIcon={<ShoppingCart />}
                    sx={{ 
                      backgroundColor: primaryColor,
                      '&:hover': {
                        backgroundColor: '#6B1430'
                      }
                    }}
                  >
                    Tambah ke Keranjang
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Info Pembelian */}
        <Paper sx={{ p: 3, mt: 4, borderRadius: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Informasi Pembelian
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body1" paragraph>
            <strong>Cara Pembelian:</strong> Pilih produk yang ingin dibeli, tambahkan ke keranjang, dan selesaikan pembayaran di koperasi sekolah.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Jam Operasional:</strong> Senin-Jumat, 07.30-14.00 WIB
          </Typography>
          <Typography variant="body1">
            <strong>Lokasi:</strong> Gedung Utama Lantai 1, Sebelah Kantin Sekolah
          </Typography>
        </Paper>
      </Container>
    </>
  );
}