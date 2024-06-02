"use client";
import { useGetAllTripsQuery } from "@/redux/features/trip/tripApi";
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
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

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
  const [destination, setDestination] = useState("");
  const [travelDates, setTravelDates] = useState("");
  const [travelType, setTravelType] = useState("");
  const [description, setDescription] = useState("");
  const [query, setQuery] = useState({});

  const { data: trips } = useGetAllTripsQuery(query);

  const handleSearch = (event: any) => {
    event.preventDefault();
    const newQuery = {
      destination,
      description,
      startDate: travelDates,
      type: travelType,
    };
    setQuery(newQuery);
  };

  return (
    <Container maxWidth="lg">
      <Box
        component="form"
        onSubmit={handleSearch}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          marginTop: "40px",
          padding: "10px 20px",
          height: "auto",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "10px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TextField
          label="Destination"
          variant="outlined"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          sx={{
            width: "250px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ffffff",
              },
              "&:hover fieldset": {
                borderColor: "#FF4081",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FF4081",
              },
              backgroundColor: "#EEF1F6",
              borderRadius: "10px",
            },
            "& .MuiInputBase-input": {
              color: "#333",
            },
            "& .MuiInputLabel-root": {
              color: "#333",
            },
          }}
        />
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{
            width: "250px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ffffff",
              },
              "&:hover fieldset": {
                borderColor: "#FF4081",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FF4081",
              },
              backgroundColor: "#EEF1F6",
              borderRadius: "10px",
            },
            "& .MuiInputBase-input": {
              color: "#333",
            },
            "& .MuiInputLabel-root": {
              color: "#333",
            },
          }}
        />
        <TextField
          label="Travel Dates"
          type="date"
          value={travelDates}
          onChange={(e) => setTravelDates(e.target.value)}
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          sx={{
            width: "250px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ffffff",
              },
              "&:hover fieldset": {
                borderColor: "#FF4081",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FF4081",
              },
              backgroundColor: "#EEF1F6",
              borderRadius: "10px",
            },
            "& .MuiInputBase-input": {
              color: "#333",
            },
            "& .MuiInputLabel-root": {
              color: "#333",
            },
          }}
        />
        <TextField
          label="Travel Type"
          variant="outlined"
          value={travelType}
          onChange={(e) => setTravelType(e.target.value)}
          sx={{
            width: "250px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ffffff",
              },
              "&:hover fieldset": {
                borderColor: "#FF4081",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FF4081",
              },
              backgroundColor: "#EEF1F6",
              borderRadius: "10px",
            },
            "& .MuiInputBase-input": {
              color: "#333",
            },
            "& .MuiInputLabel-root": {
              color: "#333",
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            height: "60px",
            borderRadius: "30px",
            backgroundColor: "#FF4081",
            color: "#fff",
            padding: "0 30px",
            fontSize: "1.2rem",
            "&:hover": {
              backgroundColor: "#F50057",
            },
          }}
        >
          Search
        </Button>
      </Box>
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
            {trips?.data?.map((trip: any) => (
              <Grid item xs={12} sm={6} md={4} key={trip.id}>
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
                      image={trip?.photo}
                      alt={trip?.destination}
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
                          {trip.destination}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          mb={1}
                        >
                          {trip?.description}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          mb={2}
                        >
                          Travel Dates: {trip?.startDate} - {trip?.endDate}
                        </Typography>
                      </Box>
                      <Link href={`trip-details/${trip.id}`}>
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
    </Container>
  );
};

export default TravelTips;
