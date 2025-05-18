import { Card, CardContent, Typography, Avatar } from "@mui/material";
import {
  AssignmentTurnedIn,
  School,
  MenuBook,
  MonetizationOn,
  Store,
  Class,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const menus = [
  { title: "Absen", icon: <AssignmentTurnedIn />, url: "/siswa/absen" },
  { title: "E-Rapot", icon: <School />, url: "/siswa/rapot" },
  { title: "Mata Pelajaran", icon: <MenuBook />, url: "/mata-pelajaran" },
  { title: "Kelas", icon: <Class />, url: "/siswa/kelas" },
  { title: "Pembayaran", icon: <MonetizationOn />, url: "/siswa/pembayaran" },
  { title: "Koperasi", icon: <Store />, url: "/koperasi" },
];

export default function CardMenu() {
  const navigate = useNavigate();
  return (
    <div className="px-3">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {menus.map((menu, index) => (
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
