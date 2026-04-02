import Image from "next/image";
import { Box } from "@mui/material";

type ImageFullPageProps = {
  imageSrc: string;
  title: string;
};

export default function ImageFullPage({ imageSrc, title }: ImageFullPageProps) {
  return (
    <Box sx={{ bgcolor: "transparent", display: "flex", justifyContent: "center", pt: { xs: 8, md: 9 }, pb: { xs: 1, md: 2 } }}>
      <Box sx={{ position: "relative", width: "100%", maxWidth: 1528 }}>
        <Image alt={title} height={9200} priority src={imageSrc} style={{ width: "100%", height: "auto", display: "block" }} width={1528} />
      </Box>
    </Box>
  );
}
