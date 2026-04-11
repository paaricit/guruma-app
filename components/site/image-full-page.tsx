import Image from "next/image";
import { Box } from "@mui/material";

type ImageFullPageProps = {
  imageSrc: string;
  title: string;
};

export default function ImageFullPage({ imageSrc, title }: ImageFullPageProps) {
  return (
    <Box
      sx={{
        bgcolor: "transparent",
        display: "flex",
        justifyContent: "center",
        pt: { xs: 8, md: 9 },
        pb: { xs: 1, md: 2 },
        px: { xs: 0, sm: 1, md: 2 },
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        boxSizing: "border-box"
      }}
    >
      {/* --- Section: Full-width page image --- */}
      <Box sx={{ position: "relative", width: "100%", maxWidth: { xs: "100%", md: 1528 }, minWidth: 0 }}>
        <Image
          alt={title}
          height={9200}
          priority
          src={imageSrc}
          sizes="100vw"
          style={{ width: "100%", height: "auto", display: "block" }}
          width={1528}
        />
      </Box>
    </Box>
  );
}
