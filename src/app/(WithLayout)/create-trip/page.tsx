"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
} from "@mui/material";

const PostTravelTrip = () => {
  const [formData, setFormData] = useState({
    destination: "dhaka",
    description: "",
    travelDates: "",
    travelType: "",
    photos: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to submit form data
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" align="center" mb={4}>
          Post a Travel/Trip
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="destination"
                label="Destination"
                variant="outlined"
                fullWidth
                required
                value={formData.destination}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                label="Detailed Description"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="startDate"
                variant="outlined"
                type="date"
                fullWidth
                required
                value={formData.travelDates}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="endDate"
                variant="outlined"
                type="date"
                fullWidth
                required
                value={formData.travelDates}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="travelType"
                label="Travel Type"
                variant="outlined"
                fullWidth
                required
                value={formData.travelType}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="travelType"
                label="Trip Photo"
                variant="outlined"
                fullWidth
                required
                value={formData.travelType}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Create Trip
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default PostTravelTrip;
