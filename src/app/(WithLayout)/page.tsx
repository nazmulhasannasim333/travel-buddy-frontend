import HeroSection from "@/components/HeroSection/HeroSection";
import TravelCard from "@/components/TravelCard/TravelCard";
import TravelInspiration from "@/components/TravelInspiration/TravelInspiration";
import TravelTips from "@/components/TravelTrips/TravelTrips";

import { Container, Grid, Typography, Button } from "@mui/material";

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

// This is a placeholder for fetching trips. Replace with actual data fetching logic.
HomePage.getInitialProps = async () => {
  const trips = [
    // Example data
    {
      id: "1",
      destination: "Paris",
      description: "A trip to the city of love",
      startDate: "2025-06-01",
      endDate: "2025-06-07",
      photo: "/images/paris.jpg",
    },
    {
      id: "2",
      destination: "Tokyo",
      description: "Explore the bustling city",
      startDate: "2025-07-10",
      endDate: "2025-07-20",
      photo: "/images/tokyo.jpg",
    },
  ];
  return { trips };
};

export default HomePage;
