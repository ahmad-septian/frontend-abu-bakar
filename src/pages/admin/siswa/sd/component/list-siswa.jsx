import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  TextField,
} from "@mui/material";
import { FormatTanggal } from "@/component-global/format-tanggal";
import PaginationComponent from "@/component-global/pagination";

const ListSiswa = (props) => {
  const {
    handleClickTambah,
    handleClickDetail,
    data,
    handleChangePage,
    handleChangeRowsPerPage,
    totalItems,
    rowsPerPage,
    page,
    search,
    setSearch,
  } = props;

  const getChipColorByStatus = (statusSiswa) => {
    switch (statusSiswa) {
      case "AKTIF":
        return "success";
      case "LULUS":
        return "primary";
      case "KELUAR":
        return "warning";
      case "TIDAK_AKTIF":
        return "error";
      default:
        return "default";
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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            input: { padding: "8px 12px" },
            width: { xs: "100%", sm: "250px" },
          }}
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
                Nomer Hp Ayah
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Nomor Hp Ibu
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Email Orang Tua
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Kelas
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Tahun Ajaran
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
            {data.map((siswa, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:hover": {
                    backgroundColor: "#FFFBF4",
                    cursor: "pointer",
                  },
                }}
                onClick={() => handleClickDetail(siswa.id)}
              >
                <TableCell align="center">{siswa.nis}</TableCell>
                <TableCell align="center">{siswa.namaLengkap}</TableCell>
                <TableCell align="center">{siswa.noHpAyah}</TableCell>
                <TableCell align="center">{siswa.noHpIbu}</TableCell>
                <TableCell align="center">{siswa.emailOrangTua}</TableCell>
                <TableCell align="center">{siswa.kelas?.namaKelas} </TableCell>
                <TableCell align="center">
                  {siswa.tahunAjaran?.tahunAjaran}
                </TableCell>
                <TableCell align="center">
                  <Chip
                    label={siswa.statusSiswa}
                    color={getChipColorByStatus(siswa.statusSiswa)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <PaginationComponent
          component="div"
          count={totalItems}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default ListSiswa;
