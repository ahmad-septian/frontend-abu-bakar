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

const dummyStudents = [
  {
    id: 1,
    nama: "Muhammad Fajar",
    nis: "2023001",
    kelas: "SD 2",
    gender: "Laki-laki",
  },
  {
    id: 2,
    nama: "Aisyah Zahra",
    nis: "2023002",
    kelas: "TK B",
    gender: "Perempuan",
  },
  {
    id: 3,
    nama: "Ahmad Yusuf",
    nis: "2023003",
    kelas: "SD 3",
    gender: "Laki-laki",
  },
  {
    id: 4,
    nama: "Fatimah Nuraini",
    nis: "2023004",
    kelas: "SD 1",
    gender: "Perempuan",
  },
];

const ListSiswa = () => {
  const navigate = useNavigate();

  const handleClickTambah = () => {
    navigate(`/admin/siswa/tambah-siswa`);
  };

  const handleClickDetail = () => {
    navigate(`/admin/siswa/detail-siswa`);
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
            <TableRow sx={{ backgroundColor: "#f3e6ea" }}>
              <TableCell sx={{ fontWeight: "bold", color: "#85193C" }}>
                Nama
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#85193C" }}>
                NIS
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#85193C" }}>
                Kelas
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#85193C" }}>
                Jenis Kelamin
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#85193C" }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyStudents.map((student) => (
              <TableRow
                key={student.id}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#fdf6f8",
                  },
                }}
              >
                <TableCell onClick={handleClickDetail}>
                  {student.nama}
                </TableCell>
                <TableCell onClick={handleClickDetail}>{student.nis}</TableCell>
                <TableCell>{student.kelas}</TableCell>
                <TableCell>{student.gender}</TableCell>
                <TableCell align="center">
                  <Chip label="Aktif" color="success" />
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
