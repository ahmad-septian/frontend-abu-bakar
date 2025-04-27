import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Toolbar, Typography, IconButton, Button, Box } from "@mui/material";
import {
  Menu,
  ArrowBack,
  ChevronRight,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { Drawer, DrawerHeader, AppBar } from "../sidebar/drawerStyle";
import MenuItems from "../menu-items";
import MenuProfile from "./profile";

export default function Header() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(true);
  const openProfile = Boolean(anchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    setOpen(screenWidth >= 1400);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: "#fff",
          boxShadow: "none",
          borderBottom: "1px solid #ccc",
        }}
        position="fixed"
        open={open}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <Menu sx={{ color: "#9B8A30" }} />
            </IconButton>
            <Typography
              sx={{
                color: "#333",
                fontWeight: "bold",
                fontSize: "1.3rem",
              }}
              noWrap
              component="div"
            >
              Sekolah Abu Bakar Ash Shiddiq
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              sx={{ color: "#333" }}
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDown />}
            >
              Admin
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#85193C",
          },
        }}
        variant="permanent"
        open={open}
      >
        <DrawerHeader sx={{ flexDirection: "row-reverse" }}>
          <Box
            sx={{
              paddingY: "13px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ArrowBack sx={{ color: "#fff" }} />
                ) : (
                  <ChevronRight sx={{ color: "#fff" }} />
                )}
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "2.2em" }}
                src="/assets/logo.png"
                alt=""
                loading="lazy"
              />
              <Box>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "1em",
                    marginLeft: "10px",
                    color: "#fff",
                  }}
                >
                  KSC
                </Typography>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "0.8em",
                    marginLeft: "10px",
                    color: "#fff",
                  }}
                >
                  Panel Admin
                </Typography>
              </Box>
            </Box>
          </Box>
        </DrawerHeader>
        <div
          style={{
            borderTop: "1px solid #fff",
          }}
        ></div>

        <MenuItems />
      </Drawer>
      <MenuProfile
        handleClose={handleClose}
        openProfile={openProfile}
        anchorEl={anchorEl}
      />
    </div>
  );
}
