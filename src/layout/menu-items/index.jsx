import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import gsap from "gsap";
import { listMenu } from "./list-menu";
import { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function MenuItems() {
  const navigate = useNavigate();
  const container = useRef(null);
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("DashboardActive");
  const [openSettings, setOpenSettings] = useState(false);

  const setActiveMenuBasedOnRoute = (currentPath) => {
    for (const menuItem of listMenu) {
      if (currentPath.startsWith(menuItem.path)) {
        setActiveMenu(menuItem.menuName);
        return;
      }
    }
  };

  useEffect(() => {
    setActiveMenuBasedOnRoute(location.pathname);
  }, [location.pathname, openSettings]);

  const handlePageChange = (path, menuName) => {
    navigate(path);
    setOpenSettings(false);
    setActiveMenu(menuName);
  };

  useEffect(() => {
    gsap.fromTo(container.current, { x: -500 }, { x: 0, duration: 1 });
  }, []);

  return (
    <div>
      <List ref={container}>
        {listMenu.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => handlePageChange(item.path, item.menuName)}
              sx={{
                ":hover": {
                  backgroundColor:
                    activeMenu === item.menuName ? "#fff" : "none",
                },
                minHeight: 48,
                // justifyContent: open ? "initial" : "center",
                px: 2,
                mb: 1.5,
                mt: 0,
                borderRadius: activeMenu === item.menuName ? "0px" : "none",
                backgroundColor: activeMenu === item.menuName ? "#fff" : "none",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 3,
                  justifyContent: "center",
                  color: activeMenu === item.menuName ? "#9B8A30" : "#fff",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{
                  color: activeMenu === item.menuName ? "#9B8A30" : "#fff",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
