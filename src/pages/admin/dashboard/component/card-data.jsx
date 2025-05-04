import { Card, CardContent, Typography, Box } from "@mui/material";
import { People, School, Work } from "@mui/icons-material";

const DashboardCard = ({ title, value, icon }) => {
  return (
    <Card
      className="rounded-2xl shadow-md"
      sx={{
        backgroundColor: "#fdf6f8",
        borderLeft: "6px solid #85193C",
        minWidth: 200,
      }}
    >
      <CardContent>
        <Box className="flex items-center gap-4">
          <Box
            className="rounded-full p-3"
            sx={{ backgroundColor: "#85193C20", color: "#85193C" }}
          >
            {icon}
          </Box>
          <Box>
            <Typography
              variant="body2"
              sx={{ color: "#85193C", fontWeight: "600" }}
            >
              {title}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
              {value}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

// const DashboardCards = () => {
//   return (
//     <Box className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       <DashboardCard
//         title="Total Siswa"
//         value="1200"
//         icon={<People sx={{ fontSize: 32 }} />}
//       />
//       <DashboardCard
//         title="Total Pengajar"
//         value="85"
//         icon={<School sx={{ fontSize: 32 }} />}
//       />
//       <DashboardCard
//         title="Total Pekerja"
//         value="40"
//         icon={<Work sx={{ fontSize: 32 }} />}
//       />
//     </Box>
//   );
// };

export default DashboardCard;
