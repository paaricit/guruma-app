import Box from "@mui/material/Box";
import { DivineDayPage } from "./submodules/divine-day";

export default function EventsPage() {
  return (
    <Box component="main" sx={{ width: 1, maxWidth: "100%", mx: "auto" }}>
      <DivineDayPage />
    </Box>
  );
}
