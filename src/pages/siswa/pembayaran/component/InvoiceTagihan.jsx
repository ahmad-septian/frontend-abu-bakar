import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CheckCircle, ErrorOutline } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { CheckoutTagihan } from "../../../../api/pembayaranSiswa.api";
import { formatUang } from "../../../../component-global/format-uang";
import { FormatTanggal } from "../../../../component-global/format-tanggal";
import { formatTime } from "../../../../component-global/format-jam";

export default function InvoiceTagihan() {
  const { codePembayaran } = useParams();
  const [invoiceData, setInvoiceData] = useState("");
  const theme = useTheme();
  const fetchInvoiceData = async () => {
    try {
      const response = await CheckoutTagihan(codePembayaran);
      setInvoiceData(response);
      console.log("Invoice Data:", response);
    } catch (error) {
      console.error("Error fetching tagihan:", error);
    }
  };

  useEffect(() => {
    fetchInvoiceData();
  }, [codePembayaran]);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const adminFee = 5000;
  const totalPrice = invoiceData.harga + adminFee;
  const isPaid = invoiceData.status === "LUNAS";

  return (
    <div className="p-4">
      <Card className="shadow-lg rounded-2xl">
        <CardContent className="space-y-6">
          <Typography
            variant="h6"
            className="font-bold"
            sx={{ textAlign: "center" }}
          >
            Invoice Pembayaran {invoiceData.pembayaran?.namaPembayaran}
          </Typography>

          {invoiceData.status === "BELUM_LUNAS" && (
            <div
              style={{
                backgroundColor: "#D91656",
                padding: isMobile ? "8px 10px" : "10px 12px",
                borderRadius: "10px",
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? "8px" : "0",
              }}
            >
              <div>
                <Typography
                  gutterBottom
                  sx={{
                    color: "#fff",
                    fontSize: {
                      xs: 16,
                      sm: 17,
                      md: 15,
                    },
                    marginLeft: isMobile ? "0" : "10px",
                    textAlign: isMobile ? "center" : "left",
                  }}
                >
                  Selesaikan Pesanan Sebelum
                </Typography>

                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: {
                      xs: 18,
                      sm: 17,
                      md: 18,
                    },
                    marginLeft: isMobile ? "0" : "10px",
                    fontWeight: "bold",
                    textAlign: isMobile ? "center" : "left",
                  }}
                >
                  {FormatTanggal(invoiceData.expired_at)} -{" "}
                  {formatTime(invoiceData.expired_at)}
                </Typography>
              </div>
            </div>
          )}

          <div>
            <img
              src="/assets/Bill.png"
              alt="logo"
              className="w-25 h-25 mx-auto my-4"
            />
          </div>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", color: "#85193C", fontWeight: "bold" }}
          >
            {formatUang(totalPrice)}
          </Typography>
          <Typography
            className="font-bold"
            sx={{
              textAlign: "center",
              color: "#AEAEAE",
              mb: 1,
              fontSize: "0.8rem",
            }}
          >
            {codePembayaran}
          </Typography>
          <div className="flex justify-center">
            <Chip
              label={
                invoiceData.status === "BELUM_LUNAS" ? "Belum Lunas" : "Lunas"
              }
              color={invoiceData.status === "BELUM_LUNAS" ? "error" : "success"}
              icon={
                invoiceData.status === "BELUM_LUNAS" ? (
                  <ErrorOutline />
                ) : (
                  <CheckCircle />
                )
              }
            />
          </div>
          <Divider />
          <Typography variant="subtitle1" sx={{ my: 1 }}>
            Informasi Siswa
          </Typography>

          <div className="grid grid-cols-2 gap-2 mt-3">
            <Typography sx={{ fontSize: { xs: 14, sm: 15, md: 16 } }}>
              Nama Siswa :
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 14, sm: 15, md: 16 },
                textAlign: "right",
              }}
            >
              {invoiceData.siswa?.namaLengkap}
            </Typography>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <Typography sx={{ fontSize: { xs: 14, sm: 15, md: 16 } }}>
              NIS Siswa :
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 14, sm: 15, md: 16 },
                textAlign: "right",
              }}
            >
              {invoiceData.siswa?.nis}
            </Typography>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <Typography sx={{ fontSize: { xs: 14, sm: 15, md: 16 } }}>
              Kelas Siswa :
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 14, sm: 15, md: 16 },
                textAlign: "right",
              }}
            >
              {invoiceData.siswa?.kelas?.namaKelas}
            </Typography>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <Typography sx={{ fontSize: { xs: 14, sm: 15, md: 16 } }}>
              Tahun Ajaran :
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 14, sm: 15, md: 16 },
                textAlign: "right",
              }}
            >
              {invoiceData.siswa?.tahunAjaran?.tahunAjaran}
            </Typography>
          </div>
          <Divider className="my-4" />
          <div className="space-y-2">
            <Typography variant="subtitle1" sx={{ my: 1 }}>
              Detail Pembayaran
            </Typography>
            <div className="grid grid-cols-2 gap-2">
              <Typography sx={{ fontSize: { xs: 14, sm: 15, md: 16 } }}>
                Nama Pembayaran :
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 15, md: 16 },
                  textAlign: "right",
                }}
              >
                {invoiceData.pembayaran?.namaPembayaran}
              </Typography>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Typography sx={{ fontSize: { xs: 14, sm: 15, md: 16 } }}>
                Harga :
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 15, md: 16 },
                  textAlign: "right",
                }}
              >
                {formatUang(invoiceData.harga)}
              </Typography>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Typography sx={{ fontSize: { xs: 14, sm: 15, md: 16 } }}>
                Biaya Aplikasi :
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 15, md: 16 },
                  textAlign: "right",
                }}
              >
                {formatUang(adminFee)}
              </Typography>
            </div>
            <div style={{ border: "1px dashed #ccc" }} />
            <div className="grid grid-cols-2 gap-2">
              <Typography sx={{ fontSize: { xs: 14, sm: 15, md: 16 } }}>
                Total :
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 15, md: 16 },
                  textAlign: "right",
                }}
              >
                {formatUang(totalPrice)}
              </Typography>
            </div>
          </div>

          {!isPaid && (
            <div className="pt-4">
              <Button
                variant="contained"
                color="error"
                fullWidth
                disabled={invoiceData.expired_at < new Date()}
                onClick={() => window.open(invoiceData.invoiceUrl, "_blank")}
              >
                Bayar Sekarang
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
