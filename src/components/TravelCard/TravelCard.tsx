"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Link,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

const featuredDestinations = [
  {
    title: "Paris, France",
    description:
      "Explore the city of love with its iconic Eiffel Tower, art museums, and delicious cuisine.",
    image: "/images/hero.jpg",
  },
  {
    title: "Tokyo, Japan",
    description:
      "Experience the blend of traditional and modern in Japan's bustling capital.",
    image: "/images/hero1.jpg",
  },
  {
    title: "New York, USA",
    description:
      "Visit the city that never sleeps, home to the Statue of Liberty, Times Square, and Central Park.",
    image: "/images/hero.jpg",
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

const TravelCard = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f4f9", py: 8 }}>
      <Container maxWidth="lg">
        {/* Featured Destinations Section */}
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          fontWeight="bold"
          mb={4}
        >
          Featured Destinations
        </Typography>
        <Grid container spacing={4}>
          {featuredDestinations.map((destination, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={cardVariants}
              >
                <Card
                  sx={{
                    height: 350,
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
                    image={destination.image}
                    alt={destination.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="h3" fontWeight="bold">
                      {destination.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {destination.description}
                    </Typography>
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

export default TravelCard;
