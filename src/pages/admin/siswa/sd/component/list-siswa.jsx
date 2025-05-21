import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Chip,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FormatTanggal } from "../../../../../component-global/format-tanggal";

const dataSiswa = [
  {
    nisn: "1234567890",
    nis: "2021001",
    nama: "Ahmad Fauzi",
    jenisKelamin: "Laki-laki",
    tempatLahir: "Bandung",
    tanggalLahir: "2010-05-15",
    tahunMasuk: "2021",
    status: "Aktif",
  },
  {
    nisn: "2345678901",
    nis: "2021002",
    nama: "Siti Rahmawati",
    jenisKelamin: "Perempuan",
    tempatLahir: "Jakarta",
    tanggalLahir: "2011-07-22",
    tahunMasuk: "2021",
    status: "Aktif",
  },
  {
    nisn: "3456789012",
    nis: "2021003",
    nama: "Rizky Maulana",
    jenisKelamin: "Laki-laki",
    tempatLahir: "Yogyakarta",
    tanggalLahir: "2010-12-01",
    tahunMasuk: "2021",
    status: "Aktif",
  },
  {
    nisn: "4567890123",
    nis: "2021004",
    nama: "Ayu Lestari",
    jenisKelamin: "Perempuan",
    tempatLahir: "Surabaya",
    tanggalLahir: "2011-03-18",
    tahunMasuk: "2021",
    status: "Lulus",
  },
  {
    nisn: "5678901234",
    nis: "2021005",
    nama: "Dimas Pratama",
    jenisKelamin: "Laki-laki",
    tempatLahir: "Semarang",
    tanggalLahir: "2010-09-30",
    tahunMasuk: "2021",
    status: "Pindah",
  },
];

const ListSiswa = () => {
  const navigate = useNavigate();

  const handleClickTambah = () => {
    navigate(`/admin/siswa/tambah-siswa`);
  };

  const handleClickDetail = () => {
    navigate(`/admin/siswa/sd/detail-siswa-sd`);
  };

  const getChipColorByStatus = (status) => {
    switch (status.toLowerCase()) {
      case "aktif":
        return "success"; // hijau
      case "lulus":
        return "primary"; // biru
      case "pindah":
        return "warning"; // kuning
      case "keluar":
        return "error"; // merah
      default:
        return "default"; // abu-abu
    }
  };

  return (
    <div className=" grid grid-cols-1 overflow-x-auto mt-5">
      <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#85193C", color: "#fff" }}
          size="medium"
          onClick={handleClickTambah}
        >
          Tambah Siswa
        </Button>

        <TextField
          size="small"
          placeholder="Cari Siswa..."
          variant="outlined"
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            input: { padding: "8px 12px" },
            width: { xs: "100%", sm: "250px" },
          }}
          //   onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <TableContainer component={Paper} sx={{ border: "1px solid #333" }}>
        <Table
          sx={{ minWidth: 650, borderRadius: "10px" }}
          aria-label="siswa table"
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "#85193C" }}>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                NISN
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                NIS
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Nama Lengkap
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Jenis Kelamin
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Tanggal Lahir
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Tanggal Lahir
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Tahun Masuk
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Status Siswa
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataSiswa.map((siswa, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:hover": {
                    backgroundColor: "#FFFBF4",
                    cursor: "pointer",
                  },
                }}
                onClick={() => handleClickDetail()}
              >
                <TableCell align="center">{siswa.nisn}</TableCell>
                <TableCell align="center">{siswa.nis}</TableCell>
                <TableCell align="center">{siswa.nama}</TableCell>
                <TableCell align="center">{siswa.jenisKelamin}</TableCell>
                <TableCell align="center">{siswa.tempatLahir}</TableCell>
                <TableCell align="center">
                  {FormatTanggal(siswa.tanggalLahir)}{" "}
                </TableCell>
                <TableCell align="center">{siswa.tahunMasuk}</TableCell>
                <TableCell align="center">
                  <Chip
                    label={siswa.status}
                    color={getChipColorByStatus(siswa.status)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListSiswa;
