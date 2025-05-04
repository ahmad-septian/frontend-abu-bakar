import { Typography, Box } from "@mui/material";

export default function FooterSiswa() {
  return (
    <Box
      component="footer"
      className="w-full mt-10 py-4 px-6 border-t border-gray-200 bg-[#85193C] "
    >
      <Typography variant="body2" className="text-center text-sm text-white">
        &copy; {new Date().getFullYear()} Abu Bakar Ash Shiddiq.
      </Typography>
    </Box>
  );
}
