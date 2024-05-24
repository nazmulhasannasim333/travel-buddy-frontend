import Header from "@/components/Headers/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import SearchBar from "@/components/SearchBar/SearchBar";
import Footer from "@/components/Shared/Footer/Footer";

import { Container, Grid, Typography, Button } from "@mui/material";


const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Container maxWidth="lg">
        <SearchBar />
        <Typography variant="h4" component="h2" gutterBottom>
          Recent Trips
        </Typography>
        {/* <Grid container spacing={4}>
          {trips.map((trip) => (
            <Grid item key={trip.id} xs={12} sm={6} md={4}>
              <TravelCard trip={trip} />
            </Grid>
          ))}
        </Grid> */}
        <Button
          variant="contained"
          color="primary"
          href="/travels"
          sx={{ marginTop: 4 }}
        >
          See More
        </Button>
      </Container>
      <Footer />
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
