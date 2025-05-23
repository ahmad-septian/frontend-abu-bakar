import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Edit } from "@mui/icons-material";

const dataKelas = [
  {
    id: 1,
    namaKelas: "1A",
    tingkat: "1",
    deskripsi: "lorem ipsum dolor sit amet ",
    isActive: true,
  },
  {
    id: 2,
    namaKelas: "1B",
    tingkat: "1",
    deskripsi: "lorem ipsum dolor sit amet ",
    isActive: true,
  },
  {
    id: 3,
    namaKelas: "1C",
    tingkat: "1",
    deskripsi: "lorem ipsum dolor sit amet ",
    isActive: false,
  },
];

const ListKelas = (props) => {
  const {
    ClickOpenTambahKelas,
    pilihKelas,
    setPilihKelas,
    ClickOpenEditKelas,
  } = props;

  return (
    <div className=" grid grid-cols-1 overflow-x-auto mt-5">
      <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#85193C", color: "#fff" }}
          size="medium"
          onClick={ClickOpenTambahKelas}
        >
          Tambah Kelas
        </Button>

        <FormControl sx={{ minWidth: 200, my: 3 }} size="small">
          <InputLabel id="semester-select-label">Pilih Kelas</InputLabel>
          <Select
            labelId="semester-select-label"
            value={pilihKelas}
            label="Pilih Kelas"
            onChange={(e) => setPilihKelas(e.target.value)}
          >
            <MenuItem value={"1"}>Kelas 1</MenuItem>
            <MenuItem value={"2"}>Kelas 2</MenuItem>
            <MenuItem value={"3"}>Kelas 3</MenuItem>
          </Select>
        </FormControl>
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
                Nama Kelas
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Tingkat
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Status
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Aksi
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataKelas.map((kelas, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:hover": {
                    backgroundColor: "#FFFBF4",
                    cursor: "pointer",
                  },
                }}
                // onClick={() => handleClickDetail()}
              >
                <TableCell align="center">{kelas.namaKelas}</TableCell>
                <TableCell align="center">{kelas.tingkat}</TableCell>
                <TableCell align="center">
                  <Chip
                    label={kelas.isActive ? "Aktif" : "Nonaktif"}
                    color={kelas.isActive ? "primary" : "error"}
                    variant="contained"
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={ClickOpenEditKelas}
                    sx={{ color: "#85193C" }}
                  >
                    <Edit />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListKelas;
