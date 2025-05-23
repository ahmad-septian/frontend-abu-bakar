import React, { useState, useEffect, useRef } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { listMenu } from "./list-menu";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

export default function MenuItems() {
  const navigate = useNavigate();
  const container = useRef(null);
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});
  const [activeMenu, setActiveMenu] = useState("DashboardActive");
  const [openSettings, setOpenSettings] = useState(false);

  const toggleMenu = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  useEffect(() => {
    const path = location.pathname;
    let matchedMenu = "";
    let matchedParent = "";

    listMenu.forEach((item) => {
      if (item.path && path.startsWith(item.path)) {
        matchedMenu = item.menuName;
      }

      if (item.children) {
        item.children.forEach((child) => {
          if (path.startsWith(child.path)) {
            matchedMenu = child.menuName;
            matchedParent = item.menuName;
          }
        });
      }
    });

    if (matchedMenu) {
      setActiveMenu(matchedMenu);
      if (matchedParent) {
        setOpenMenus((prev) => ({ ...prev, [matchedParent]: true }));
      }
    } else {
      setActiveMenu("");
    }
  }, [location.pathname]);

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
          <div key={index}>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => {
                  if (item.children) {
                    toggleMenu(item.menuName);
                  } else {
                    handlePageChange(item.path, item.menuName);
                  }
                }}
                sx={{
                  minHeight: 48,
                  px: 2,
                  mb: 1.5,
                  borderRadius: activeMenu === item.menuName ? "0px" : "none",
                  backgroundColor:
                    activeMenu === item.menuName ? "#fff" : "none",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 3,
                    justifyContent: "center",
                    color: activeMenu === item.menuName ? "#85193C" : "#fff",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    color: activeMenu === item.menuName ? "#85193C" : "#fff",
                  }}
                />
                {item.children ? (
                  openMenus[item.menuName] ? (
                    <ExpandLess sx={{ color: "#fff" }} />
                  ) : (
                    <ExpandMore sx={{ color: "#fff" }} />
                  )
                ) : null}
              </ListItemButton>
            </ListItem>

            {item.children && (
              <Collapse
                in={openMenus[item.menuName]}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {item.children.map((child, idx) => (
                    <ListItemButton
                      key={idx}
                      onClick={() =>
                        handlePageChange(child.path, child.menuName)
                      }
                      sx={{
                        pl: 4,
                        mb: 0.5,
                        borderRadius:
                          activeMenu === child.menuName ? "0px" : "none",
                        backgroundColor:
                          activeMenu === child.menuName
                            ? "#fff"
                            : "transparent",
                        "&:hover": {
                          backgroundColor:
                            activeMenu === child.menuName ? "#fff" : "#9C2C4A",
                        },
                      }}
                    >
                      <ListItemText
                        primary={child.label}
                        sx={{
                          color:
                            activeMenu === child.menuName ? "#85193C" : "#fff",
                        }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </div>
  );
}
