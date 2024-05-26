import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import aboutUs from "../../../assets/about-us.jpg";

const AboutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 5 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Image src={aboutUs} alt="About Us" height={400} width={500} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to our company! We are dedicated to providing the best
            service possible. Our team is comprised of experienced professionals
            who are passionate about what they do. We believe in delivering
            high-quality products and services that exceed our customers
            expectations.
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is to innovate and lead the industry by setting new
            standards in quality and customer satisfaction. We value integrity,
            excellence, and teamwork, and strive to create a positive impact on
            the communities we serve.
          </Typography>
          <Typography variant="body1">
            Thank you for choosing us. We look forward to serving you and
            building a lasting relationship.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
