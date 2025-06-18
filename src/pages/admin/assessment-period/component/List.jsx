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
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import PaginationComponent from "@/component-global/pagination";
import { FormatTanggal } from "../../../../component-global/format-tanggal";

const ListAssessmentPeriod = (props) => {
  const {
    ClickOpenTambah,
    ClickOpenEdit,
    handleChangePage,
    handleChangeRowsPerPage,
    totalItems,
    rowsPerPage,
    page,
    data,
    ClickDelete,
  } = props;

  return (
    <div className="grid grid-cols-1 overflow-x-auto mt-5">
      <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#85193C", color: "#fff" }}
          size="medium"
          onClick={ClickOpenTambah}
        >
          Tambah Assessment
        </Button>
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
                Type Assessment
              </TableCell>

              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Tanggal Mulai
              </TableCell>

              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Tanggal Selesai
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
                Penilaian
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
            {data.map((assessment) => (
              <TableRow
                key={assessment.id}
                sx={{
                  "&:hover": {
                    backgroundColor: "#FFFBF4",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell align="center">
                  {assessment.assessmentType}
                </TableCell>
                <TableCell align="center">
                  {FormatTanggal(assessment.start_date)}{" "}
                </TableCell>
                <TableCell align="center">
                  {FormatTanggal(assessment.end_date)}
                </TableCell>
                <TableCell align="center">
                  {assessment?.tahunAjaran?.tahunAjaran}
                </TableCell>
                <TableCell align="center">
                  <Chip
                    label={assessment.is_locked ? "Tutup" : "Buka"}
                    color={assessment.is_locked ? "error" : "primary"}
                    variant="contained"
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={() => ClickOpenEdit(assessment.id)}
                    sx={{ color: "#85193C" }}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    onClick={() => ClickDelete(assessment.id)}
                    sx={{ color: "#85193C" }}
                  >
                    <Delete />
                  </IconButton>
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

export default ListAssessmentPeriod;
