import HeroSection from "@/components/HeroSection/HeroSection";
import TravelCard from "@/components/TravelCard/TravelCard";
import TravelInspiration from "@/components/TravelInspiration/TravelInspiration";
import TravelTips from "@/components/TravelTrips/TravelTrips";

import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Container maxWidth="lg">
        <TravelTips />
        <TravelCard />
        <TravelInspiration />
      </Container>
    </div>
  );
};

export default HomePage;
