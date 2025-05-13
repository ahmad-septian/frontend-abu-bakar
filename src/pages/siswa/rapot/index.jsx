import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  InputBase
} from "@mui/material";
import { ArrowBack, Search } from "@mui/icons-material";

export default function ERapotSiswa() {
  // State untuk tab yang aktif
  const [activeTab, setActiveTab] = useState(0);
  const [activeUlanganSubTab, setActiveUlanganSubTab] = useState(0);

  // Data nilai untuk berbagai kategori
  const nilaiData = [
    // UTS
    [
      { mapel: "Matematika", nilai: 85 },
      { mapel: "Bahasa Indonesia", nilai: 88 },
      { mapel: "IPA", nilai: 90 }
    ],
    // UAS
    [
      { mapel: "Matematika", nilai: 87 },
      { mapel: "Bahasa Indonesia", nilai: 89 },
      { mapel: "IPA", nilai: 92 }
    ],
    // Ulangan Harian (dengan subtab)
    [
      // Ulangan Harian 1
      [
        { mapel: "Matematika", nilai: 83 },
        { mapel: "Bahasa Indonesia", nilai: 85 },
        { mapel: "IPA", nilai: 87 }
      ],
      // Ulangan Harian 2
      [
        { mapel: "Matematika", nilai: 80 },
        { mapel: "Bahasa Indonesia", nilai: 82 },
        { mapel: "IPA", nilai: 84 }
      ],
      // Ulangan Harian 3
      [
        { mapel: "Matematika", nilai: 86 },
        { mapel: "Bahasa Indonesia", nilai: 88 },
        { mapel: "IPA", nilai: 90 }
      ],
      // Ulangan Harian 4
      [
        { mapel: "Matematika", nilai: 82 },
        { mapel: "Bahasa Indonesia", nilai: 84 },
        { mapel: "IPA", nilai: 86 }
      ],
      // Ulangan Harian 5
      [
        { mapel: "Matematika", nilai: 84 },
        { mapel: "Bahasa Indonesia", nilai: 86 },
        { mapel: "IPA", nilai: 88 }
      ],
      // Ulangan Harian 6
      [
        { mapel: "Matematika", nilai: 88 },
        { mapel: "Bahasa Indonesia", nilai: 90 },
        { mapel: "IPA", nilai: 92 }
      ],
      // Ulangan Harian 7
      [
        { mapel: "Matematika", nilai: 85 },
        { mapel: "Bahasa Indonesia", nilai: 87 },
        { mapel: "IPA", nilai: 89 }
      ]
    ],
    // Hafalan
    [
      { mapel: "Al-Quran", nilai: 90 },
      { mapel: "Hadits", nilai: 85 }
    ],
    // Predikat (tab baru)
    [
      { mapel: "Matematika", predikat: "B+" },
      { mapel: "Bahasa Indonesia", predikat: "A-" },
      { mapel: "IPA", predikat: "A" },
      { mapel: "Al-Quran", predikat: "A" },
      { mapel: "Hadits", predikat: "A-" }
    ]
  ];

  // Fungsi untuk menampilkan item nilai
  const renderNilaiItem = (item, index, arrayLength) => (
    <React.Fragment key={index}>
      <ListItem sx={{ py: 2 }}>
        <ListItemText primary={item.mapel} />
        {item.nilai && (
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {item.nilai}
          </Typography>
        )}
        {item.predikat && (
          <Typography 
            variant="body1" 
            sx={{ 
              fontWeight: "bold",
              color: item.predikat.startsWith('A') ? '#4CAF50' : 
                    item.predikat.startsWith('B') ? '#2196F3' : 
                    item.predikat.startsWith('C') ? '#FF9800' : '#F44336'
            }}
          >
            {item.predikat}
          </Typography>
        )}
      </ListItem>
      {index < arrayLength - 1 && <Divider />}
    </React.Fragment>
  );

  // Fungsi untuk menghitung rata-rata nilai ulangan harian per mata pelajaran
  const calculateAveragePerSubject = () => {
    // Mendapatkan semua ulangan harian
    const ulanganHarianData = nilaiData[2];
    // Struktur untuk menyimpan jumlah total nilai dan jumlah ulangan per mapel
    const mapelTotals = {};
    const mapelCounts = {};

    // Iterasi melalui semua ulangan harian
    ulanganHarianData.forEach(ulangan => {
      ulangan.forEach(item => {
        if (!mapelTotals[item.mapel]) {
          mapelTotals[item.mapel] = 0;
          mapelCounts[item.mapel] = 0;
        }
        mapelTotals[item.mapel] += item.nilai;
        mapelCounts[item.mapel] += 1;
      });
    });

    // Menghitung rata-rata
    const averages = Object.keys(mapelTotals).map(mapel => ({
      mapel,
      nilai: Math.round(mapelTotals[mapel] / mapelCounts[mapel])
    }));

    return averages;
  };

  // Fungsi untuk menampilkan konten berdasarkan tab yang aktif
  const renderTabContent = () => {
    const tabLabels = ["UTS", "UAS", "Ulangan Harian", "Hafalan", "Predikat"];
    
    // Khusus untuk Ulangan Harian (tab index 2)
    if (activeTab === 2) {
      // Membuat array label untuk ulangan harian 1-7
      const ulanganLabels = Array.from({ length: 7 }, (_, i) => `Ulangan Harian ${i + 1}`);
      // Tambahkan opsi untuk Rata-rata
      ulanganLabels.push("Rata-rata");

      return (
        <>
          <Typography variant="h6" className="nilai-header" sx={{ mt: 2, mb: 1, color: "#85193C", fontWeight: "bold" }}>
            Nilai Ulangan Harian
          </Typography>
          
          {/* Sub-tab untuk Ulangan Harian dengan scrolling */}
          <Paper elevation={1} sx={{ mb: 2, borderRadius: 2, overflow: "hidden" }}>
            <Box sx={{ 
              maxWidth: { xs: "100%", sm: "100%" }, 
              bgcolor: "background.paper",
              position: "relative"
            }}>
              <Tabs
                value={activeUlanganSubTab}
                onChange={(e, newValue) => setActiveUlanganSubTab(newValue)}
                variant="scrollable"
                scrollButtons="auto"
                textColor="primary"
                sx={{ 
                  bgcolor: "white",
                  '& .MuiTab-root': { 
                    textTransform: 'none',
                    minWidth: 120,
                    fontWeight: 'medium',
                    fontSize: '14px',
                    py: 1.2,
                    color: 'rgba(0, 0, 0, 0.7)',
                    '&.Mui-selected': {
                      color: '#85193C',
                      fontWeight: 'bold',
                    },
                  },
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#85193C',
                  }
                }}
              >
                {ulanganLabels.map((label, index) => (
                  <Tab key={index} label={label} />
                ))}
              </Tabs>
            </Box>
          </Paper>
          
          {/* Konten untuk sub-tab Ulangan Harian yang aktif */}
          <Paper elevation={1} sx={{ borderRadius: 3, overflow: "hidden" }}>
            {activeUlanganSubTab === 7 ? (
              // Tampilkan nilai rata-rata
              calculateAveragePerSubject().map((item, index, array) => 
                renderNilaiItem(item, index, array.length)
              )
            ) : (
              // Tampilkan nilai ulangan harian normal
              nilaiData[2][activeUlanganSubTab].map((item, index, array) => 
                renderNilaiItem(item, index, array.length)
              )
            )}
          </Paper>
        </>
      );
    }
    
    // Untuk tab lainnya
    const currentData = nilaiData[activeTab];
    
    return (
      <>
        <Typography variant="h6" className="nilai-header" sx={{ mt: 2, mb: 1, color: "#85193C", fontWeight: "bold" }}>
          Nilai {tabLabels[activeTab]}
        </Typography>
        <Paper elevation={1} sx={{ borderRadius: 3, overflow: "hidden" }}>
          {currentData.map((item, index) => renderNilaiItem(item, index, currentData.length))}
        </Paper>
      </>
    );
  };

  // Handler untuk perubahan tab
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    // Reset ulangan subtab ke posisi pertama saat tab berubah
    if (activeTab !== 2) {
      setActiveUlanganSubTab(0);
    }
  };

  return (
    <>
      {/* Header */}
      <AppBar position="static" sx={{ bgcolor: "#85193C", boxShadow: 1 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back">
            <ArrowBack />
          </IconButton>
          <Box sx={{ flexGrow: 1, ml: 2 }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
              e-Rapot Siswa
            </Typography>
            <Typography variant="body2" component="div">
              Laporan Perkembangan Belajar
            </Typography>
          </Box>
        </Toolbar>
        <Box sx={{ px: 2, pb: 2 }}>
          <Paper
            component="form"
            sx={{ 
              p: '2px 4px', 
              display: 'flex', 
              alignItems: 'center', 
              borderRadius: 3
            }}
          >
            <IconButton sx={{ p: '10px', color: '#85193C' }} aria-label="search">
              <Search />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Cari Rapor Lama"
              inputProps={{ 'aria-label': 'cari rapor lama' }}
            />
          </Paper>
        </Box>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="md" sx={{ py: 3, bgcolor: "white", minHeight: "calc(100vh - 136px)" }}>
        {/* Tab Navigation */}
        <Paper
          elevation={1}
          sx={{
            borderRadius: 6,
            overflow: "hidden",
            mb: 3,
            maxWidth: "100%",
            mx: "auto"
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              TabIndicatorProps={{ style: { display: "none" } }}
              centered
              sx={{ 
                bgcolor: "white",
                '& .MuiTabs-flexContainer': {
                  justifyContent: "center",
                },
                '& .MuiTab-root': { 
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  minWidth: 120,
                  px: 3,
                  py: 1.5,
                  color: 'rgba(0, 0, 0, 0.7)',
                  '&.Mui-selected': {
                    color: 'white',
                    bgcolor: '#85193C',
                    borderRadius: 6,
                    mx: 0.5,
                    my: 0.5
                  },
                },
              }}
            >
              <Tab 
                label="UTS" 
                sx={{
                  '&.Mui-selected': {
                    bgcolor: '#85193C',
                  }
                }}
              />
              <Tab label="UAS" />
              <Tab label="Ulangan Harian" />
              <Tab label="Hafalan" />
              <Tab label="Predikat" />
            </Tabs>
          </Box>
        </Paper>

        {/* Content Area */}
        <Box sx={{ mt: 2 }}>
          {renderTabContent()}
        </Box>
      </Container>
    </>
  );
}