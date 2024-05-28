"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";

const travelTips = [
  {
    destination: "Paris, France",
    photo: "/images/hero.jpg",
    briefDescription: "Explore the city of love with our travel guide.",
    travelDates: "June 15 - June 20, 2024",
    // fullDetailsLink: "/trips/paris-france",
  },
  {
    destination: "Tokyo, Japan",
    photo: "/images/hero.jpg",
    briefDescription: "Discover the vibrant culture of Tokyo.",
    travelDates: "July 10 - July 15, 2024",
    // fullDetailsLink: "/trips/tokyo-japan",
  },
  {
    destination: "New York, USA",
    photo: "/images/hero1.jpg",
    briefDescription: "Experience the hustle and New York City.",
    travelDates: "August 5 - August 10, 2024",
    // fullDetailsLink: "/trips/new-york-usa",
  },
];

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const TravelTips = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom right, #f6f9fc, #e9ecf2)",
        py: 8,
        my: 10,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          fontWeight="bold"
          mb={4}
          sx={{ color: "#333", textTransform: "uppercase", letterSpacing: 1 }}
        >
          Travel Tips and Guides
        </Typography>
        <Grid container spacing={4}>
          {travelTips.map((tip, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={cardVariants}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: 3,
                    borderRadius: 3,
                    overflow: "hidden",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={tip.photo}
                    alt={tip.destination}
                    sx={{ filter: "brightness(0.85)" }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      background:
                        "linear-gradient(to bottom right, #ffffff, #f0f2f5)",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        fontWeight="bold"
                        sx={{ color: "#444", mb: 1 }}
                      >
                        {tip.destination}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" mb={1}>
                        {tip.briefDescription}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" mb={2}>
                        Travel Dates: {tip.travelDates}
                      </Typography>
                    </Box>
                    <Link href={`trip-details/id`}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "teal",
                          color: "#fff",
                          "&:hover": {
                            backgroundColor: "green",
                          },
                        }}
                        fullWidth
                      >
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TravelTips;
