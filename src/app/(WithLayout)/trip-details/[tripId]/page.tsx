import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import Image from "next/image";
import logo from "@/assets/images/hero.jpg";

const TravelDetailsPage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          Trip to [Destination]
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            {/* Display multiple photos */}
            <Box>
              <Image
                src={logo}
                alt="Trip Photo"
                width={800}
                height={600}
                layout="responsive"
                objectFit="cover"
              />
            </Box>
            <Box mt={2}>
              <Typography variant="h6" gutterBottom>
                Description
              </Typography>
              <Typography variant="body1">
                [Detailed description of the trip]
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Itinerary
              </Typography>
              <Typography variant="body1">[Itinerary details]</Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h6" gutterBottom>
                Travel Dates
              </Typography>
              <Typography variant="body1">[Travel dates]</Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h6" gutterBottom>
                Travel Type
              </Typography>
              <Typography variant="body1">[Travel type]</Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h6" gutterBottom>
                Location
              </Typography>
              <Typography variant="body1">[Location details]</Typography>
            </Box>
            <Box mt={3}>
              <Button variant="contained" color="primary">
                Request to Join Trip
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default TravelDetailsPage;
