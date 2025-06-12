import React, { useState, useEffect } from "react";
import {} from "@mui/icons-material";
import { AppBar, Avatar, Toolbar, Typography, MenuItem } from "@mui/material";
import MenuProfile from "./component/menu-profile";
import { GetProfile } from "../../../api/profile-siswa.api";
import { useNavigate } from "react-router-dom";
import { stringAvatar } from "../../../component-global/format-avatar";

export default function HeaderSiswa() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileName, setProfileName] = useState("");
  const [profile, setProfile] = useState("");
  const openProfile = Boolean(anchorEl);

  const fetchProfile = async () => {
    const resp = await GetProfile();
    if (resp?.data) {
      setProfileName(resp.data.namaLengkap);
      setProfile(resp.data);
    } else {
      console.error("Gagal mendapatkan data profil");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleProfileClick = () => {
    navigate(`/siswa/profile`);
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar className="px-4 md:px-8 flex justify-between items-center">
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "#85193C",
            fontFamily: "'Segoe UI', sans-serif",
            fontSize: {
              xs: "1rem",
              sm: "1.25rem",
              md: "1.5rem",
            },
          }}
        >
          Abu Bakar Ash Shiddiq
        </Typography>

        <div>
          <MenuItem
            sx={{ paddingRight: "0px", paddingLeft: "0px" }}
            onClick={handleClick}
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {profile.foto ? (
              <Avatar
                alt={profileName}
                src={
                  `${import.meta.env.VITE_API}/siswa/foto-siswa/` + profile.foto
                }
                sx={{
                  ...stringAvatar(profileName).sx,
                  width: "50px",
                  height: "50px",
                  fontSize: "1.2rem",
                }}
              />
            ) : (
              <Avatar
                {...stringAvatar(profileName)}
                sx={{
                  ...stringAvatar(profileName).sx,
                  width: "45px",
                  height: "45px",
                  fontSize: "1.4rem",
                }}
              />
            )}
          </MenuItem>
        </div>
      </Toolbar>
      <MenuProfile
        openProfile={openProfile}
        anchorEl={anchorEl}
        handleClose={handleClose}
        handleProfileClick={handleProfileClick}
      />
    </AppBar>
  );
}
