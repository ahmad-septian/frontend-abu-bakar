import { Card, CardContent, Typography, Avatar } from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function CardMenu(props) {
  const { filteredMenus } = props;
  const navigate = useNavigate();
  return (
    <div className="px-3">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {filteredMenus.map((menu, index) => (
          <Card
            key={index}
            className="rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            onClick={() => navigate(menu.url)}
            sx={{
              backgroundColor: "#F8EEDF",
              borderRadius: 3,
              cursor: "pointer",
            }}
          >
            <CardContent className="flex flex-col items-center p-4">
              <Avatar
                sx={{
                  bgcolor: "#85193C",
                  width: 48,
                  height: 48,
                  mb: 1,
                }}
              >
                {menu.icon}
              </Avatar>
              <Typography
                variant="body2"
                className="text-center text-sm font-medium text-[#85193C]"
              >
                {menu.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
