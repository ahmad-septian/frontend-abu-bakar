import React from "react";
import { Menu, MenuItem, Divider, ListItemIcon } from "@mui/material";
import { Edit, Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {} from "react-router-dom";

export default function MenuProfile(props) {
  const { anchorEl, handleClose, handleProfileClick, openProfile } = props;
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("tokenGuru");
    navigate("/auth/guru/login");
    window.location.reload();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={openProfile}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 30,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem
        onClick={() => {
          handleProfileClick();
        }}
      >
        <ListItemIcon>
          <Edit fontSize="small" />
        </ListItemIcon>
        Profile
      </MenuItem>

      <Divider />
      <MenuItem
        onClick={() => {
          handleLogout();
          handleClose();
        }}
      >
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
}
