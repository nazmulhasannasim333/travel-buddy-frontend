import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/hero.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "700px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ color: "white" }}
      >
        Find Your Perfect Travel Buddy!
      </Typography>
      <Link href="/create-trip" passHref>
        <Button
          variant="contained"
          sx={{
            bgcolor: "green",
            color: "#fff",
            "&:hover": {
              bgcolor: "purple",
            },
          }}
          size="large"
        >
          Share Your Trip
        </Button>
      </Link>
    </Box>
  );
};

export default HeroSection;
