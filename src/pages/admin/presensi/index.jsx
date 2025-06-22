import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import {} from "@mui/icons-material";
import {} from "react-router-dom";
import {
  getRekapAbsenExcel,
  getRekapAbsenPaginated,
} from "../../../api/absensi-siswa.api";
import PaginationComponent from "../../../component-global/pagination";
import * as XLSX from "xlsx";

export default function PresensiAdmin() {
  const [exportDialogOpen, setExportDialogOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dataPresensi, setDataPresensi] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleConfirmExport = async () => {
    try {
      const data = await getRekapAbsenExcel(startDate, endDate);

      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Rekap Presensi");

      XLSX.writeFile(
        workbook,
        `rekap_presensi_${startDate}_to_${endDate}.xlsx`
      );
      setExportDialogOpen(false); // tutup dialog
    } catch (error) {
      console.error("Export Excel Error", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await getRekapAbsenPaginated(
        page + 1,
        rowsPerPage,
        search
      );
      setDataPresensi(response.data);
      setTotalItems(response.meta.total);
    } catch (error) {
      console.error("Error Fetching All Schedules", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, rowsPerPage, search]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Rekap Presensi Siswa</h1>
      <div className="my-3 flex justify-between items-center">
        <TextField
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
          placeholder="Cari Siswa"
          size="small"
        />
        <Button
          sx={{ backgroundColor: "#27A36A", color: "white" }}
          variant="contained"
          onClick={() => setExportDialogOpen(true)}
        >
          Export Excel
        </Button>
      </div>
      <TableContainer component={Paper} className="rounded-xl shadow-md">
        <Table>
          <TableHead className="bg-red-800 ">
            <TableRow>
              <TableCell style={{ color: "white" }} align="center">
                Nama
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Hadir
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Izin
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Sakit
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Alpha
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataPresensi.map((siswa, index) => {
              const total =
                siswa.hadir + siswa.izin + siswa.sakit + siswa.alpha;
              return (
                <TableRow key={index}>
                  <TableCell align="center">{siswa.nama}</TableCell>
                  <TableCell align="center">{siswa.hadir}</TableCell>
                  <TableCell align="center">{siswa.izin}</TableCell>
                  <TableCell align="center">{siswa.sakit}</TableCell>
                  <TableCell align="center">{siswa.alpha}</TableCell>
                  <TableCell align="center">{total}</TableCell>
                </TableRow>
              );
            })}
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

      <Dialog
        open={exportDialogOpen}
        onClose={() => setExportDialogOpen(false)}
      >
        <DialogTitle>Export Rekap Presensi</DialogTitle>
        <DialogContent>
          <TextField
            label="Start Date"
            type="date"
            fullWidth
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            margin="dense"
          />
          <TextField
            label="End Date"
            type="date"
            fullWidth
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setExportDialogOpen(false)}>Batal</Button>
          <Button
            onClick={handleConfirmExport}
            disabled={!startDate || !endDate}
            variant="contained"
          >
            Export
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
