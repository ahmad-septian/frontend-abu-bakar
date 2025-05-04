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

const dummyTeachers = [
  {
    id: 1,
    nama: "Ust. Ahmad Hadi",
    nip: "1987654321",
    mapel: "Al-Qur'an",
    kelas: "SD 2",
  },
  {
    id: 2,
    nama: "Ustadzah Rina Mutiara",
    nip: "1987123456",
    mapel: "Bahasa Arab",
    kelas: "TK B",
  },
  {
    id: 3,
    nama: "Ust. Sulaiman Yusuf",
    nip: "1987987654",
    mapel: "Matematika",
    kelas: "SD 3",
  },
  {
    id: 4,
    nama: "Ustadzah Nur Hasanah",
    nip: "1987567890",
    mapel: "Aqidah",
    kelas: "SD 1",
  },
];

const TeacherTable = () => {
  const navigate = useNavigate();

  const handleClickTambah = () => {
    navigate(`/admin/pengajar/tambah-pengajar`);
  };

  const handleClickDetail = () => {
    navigate(`/admin/pengajar/detail-pengajar`);
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
          Tambah Pengajar
        </Button>

        <TextField
          size="small"
          placeholder="Cari guru..."
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
          aria-label="simple table"
        >
          <TableHead sx={{ borderRadius: "10px" }}>
            <TableRow sx={{ backgroundColor: "#f3e6ea" }}>
              <TableCell sx={{ fontWeight: "bold", color: "#85193C" }}>
                Nama
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#85193C" }}>
                NIP
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#85193C" }}>
                Mata Pelajaran
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#85193C" }}>
                Kelas
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
            {dummyTeachers.map((teacher, index) => (
              <TableRow
                key={teacher.id}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#fdf6f8", // hover warna lebih soft dari #f3e6ea
                  },
                }}
              >
                <TableCell onClick={handleClickDetail}>
                  {teacher.nama}
                </TableCell>
                <TableCell onClick={handleClickDetail}>{teacher.nip}</TableCell>
                <TableCell onClick={handleClickDetail}>
                  {teacher.mapel}
                </TableCell>
                <TableCell>{teacher.kelas}</TableCell>
                <TableCell align="center">
                  {" "}
                  <Chip label="Mengajar" color="success" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* <PaginationComponent
          component="div"
          count={totalItems}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          // handleGenerate={handleGenerate}
        /> */}
      </TableContainer>
    </div>
  );
};

export default TeacherTable;
