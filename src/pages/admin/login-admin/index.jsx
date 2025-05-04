import React from "react";
import {
  Typography,
  TextField,
  Button,
  Checkbox,
  Alert,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const LoginForm = () => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row ">
      <div className="w-full md:w-1/2">
        <img
          src="/assets/bgLogin.png"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-10 bg-white">
        <div className="w-full max-w-md">
          {/* {open && (
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {messageErr.map((item, index) => (
                <div key={index}>
                  <Typography>- {item.message}</Typography>
                </div>
              ))}
            </Alert>
          )} */}

          <Typography
            sx={{
              fontSize: {
                xs: "1.2rem",
                sm: "1.5rem",
                md: "1.7rem",
              },
              textAlign: "center",
              marginBottom: "20px",
              fontWeight: "bold",
              color: "#85193C",
            }}
          >
            Login Panel Admin
          </Typography>

          <div className="mb-6">
            <TextField
              id="email"
              placeholder="Masukan Email"
              fullWidth
              variant="outlined"
            />
          </div>

          <div className="mb-6">
            <TextField
              id="password"
              placeholder="Masukan Password"
              type="password"
              fullWidth
              variant="outlined"
            />
          </div>

          <div className="mt-5">
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#85193C",
                paddingX: "45%",
                paddingY: "10px",
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
