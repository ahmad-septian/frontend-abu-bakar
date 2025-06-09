import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {} from "react-router-dom";

export default function PasswordGuru(props) {
  const {
    handleSubmitPassword,
    showPassword,
    setShowPassword,
    showConfirm,
    setShowConfirm,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = props;
  return (
    <div>
      <Typography
        variant="h6"
        className="text-[#85193C] font-semibold mb-4 text-center"
      >
        Ganti Password
      </Typography>

      <form
        onSubmit={handleSubmitPassword}
        className="grid grid-cols-1 md:grid-cols-1 gap-4"
      >
        <div className="my-2">
          <Typography>Password Baru</Typography>
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Input Password Baru"
            fullWidth
            margin="dense"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div>
          <Typography>Konfirmasi Password Baru</Typography>
          <TextField
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="confirmPassword"
            placeholder="Konfirmasi Password Baru"
            fullWidth
            margin="dense"
            variant="outlined"
            type={showConfirm ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirm((prev) => !prev)}
                    edge="end"
                  >
                    {showConfirm ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "10px",
          }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "#85193C", color: "#fff" }}
            onClick={handleSubmitPassword}
          >
            Simpan
          </Button>
        </div>
      </form>
    </div>
  );
}
