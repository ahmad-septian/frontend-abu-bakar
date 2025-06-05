import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { HourglassEmpty, CheckCircle } from "@mui/icons-material";
import {} from "react-router-dom";
import { formatUang } from "@/component-global/format-uang";

const primaryColor = "#85193C";
export default function TagihanCard(props) {
  const { tagihanList, handleClickInvoice, loading, handleClickDetail } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCode, setSelectedCode] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-3">
      {tagihanList.map((tagihan) => (
        <Card key={tagihan.id} className="rounded-2xl shadow-md">
          <CardContent className="space-y-3">
            <div>
              <div className="flex items-center justify-between">
                <Typography
                  variant="h6"
                  sx={{ color: primaryColor, fontWeight: "bold" }}
                >
                  {tagihan.pembayaran.namaPembayaran}
                </Typography>
                {tagihan.status === "BELUM_LUNAS" ? (
                  <HourglassEmpty color="warning" />
                ) : (
                  <CheckCircle color="success" />
                )}
              </div>
              <Typography variant="h6" color="text.primary">
                {formatUang(tagihan.harga)}
              </Typography>
            </div>
          </CardContent>

          {tagihan.status !== "LUNAS" && (
            <>
              <Divider />
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: primaryColor,
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#6e122f" },
                    borderRadius: "5px",
                    padding: "5px 50px",
                  }}
                  onClick={() => {
                    setSelectedCode(tagihan.codePembayaran);
                    setOpenDialog(true);
                  }}
                >
                  Bayar
                </Button>
              </CardActions>
            </>
          )}
          {tagihan.status !== "BELUM_LUNAS" && (
            <>
              <Divider />
              <CardActions>
                <Button
                  fullWidth
                  sx={{
                    color: primaryColor,
                    textTransform: "none",
                    borderRadius: "12px",
                  }}
                  onClick={() => handleClickDetail(tagihan.codePembayaran)}
                >
                  Detail
                </Button>
              </CardActions>
            </>
          )}
        </Card>
      ))}

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Persiapan Pembayaran</DialogTitle>
        <DialogContent>
          <Typography>
            Pastikan kamu memiliki koneksi internet yang stabil dan telah
            menyiapkan semua kebutuhan pembayaran.
          </Typography>
          <Typography color="error" sx={{ mt: 1 }}>
            Proses pembayaran memiliki batas waktu yaitu 30 menit, Jangan Sampai
            Terlewatkan!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="inherit">
            Batal
          </Button>
          <Button
            onClick={() => {
              handleClickInvoice(selectedCode);
              setOpenDialog(false);
            }}
            variant="contained"
            sx={{
              backgroundColor: primaryColor,
              "&:hover": { backgroundColor: "#6e122f" },
            }}
          >
            Lanjutkan
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
