"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Pagination,
} from "@mui/material";

const CreateTrip = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    destination: "Dhaka",
    travelDates: "10-2-2024",
    travelType: "Tour",
    keywords: "nasim",
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchCriteria((prevCriteria) => ({
      ...prevCriteria,
      [name]: value,
    }));
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to submit search criteria
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    // Logic to handle page change
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" align="center" mb={4}>
          Travels
        </Typography>
        <form onSubmit={handleSearchSubmit}>
          <Grid container spacing={2} mb={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="destination"
                label="Destination"
                variant="outlined"
                fullWidth
                value={searchCriteria.destination}
                onChange={handleSearchChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="travelDates"
                label="Travel Dates"
                variant="outlined"
                type="date"
                fullWidth
                value={searchCriteria.travelDates}
                onChange={handleSearchChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="travelType"
                label="Travel Type"
                variant="outlined"
                fullWidth
                value={searchCriteria.travelType}
                onChange={handleSearchChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="keywords"
                label="Keywords in Description"
                variant="outlined"
                fullWidth
                value={searchCriteria.keywords}
                onChange={handleSearchChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
        <Grid container spacing={2}>
          {[...Array(10)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={`https://picsum.photos/200/300?random=${index}`}
                  alt="Travel Image"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Trip Destination
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box mt={4} display="flex" justifyContent="center">
          <Pagination count={10} onChange={handlePageChange} />
        </Box>
      </Box>
    </Container>
  );
};

export default CreateTrip;
