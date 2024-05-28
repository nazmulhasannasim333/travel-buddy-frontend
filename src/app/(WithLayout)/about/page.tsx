"use client";

import { Box, Typography, Grid, Avatar, Link } from "@mui/material";
import { motion } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/poppins";
import "@fontsource/montserrat";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "Lobster Two", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#ff5722",
    },
    secondary: {
      main: "#00bcd4",
    },
    text: {
      primary: "#ffffff",
      secondary: "#212121",
    },
  },
});

const teamMembers = [
  { name: "Alice Johnson", role: "Founder", image: "/assets/images/alice.jpg" },
  { name: "Bob Smith", role: "CTO", image: "/assets/images/bob.jpg" },
  { name: "Carol White", role: "Designer", image: "/assets/images/carol.jpg" },
];

const AboutPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#212121",
          color: theme.palette.text.primary,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px 20px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h1"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontFamily: "Lobster Two, cursive",
              color: theme.palette.primary.main,
            }}
          >
            About Us
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Typography
            variant="h6"
            component="p"
            textAlign="center"
            maxWidth="800px"
            margin="0 auto"
            gutterBottom
            sx={{
              fontFamily: "Roboto, sans-serif",
              color: theme.palette.text.primary,
            }}
          >
            Our mission is to connect travelers looking for companionship on
            their trips, fostering a community of like-minded individuals who
            can explore the world together, share experiences, and make travel
            more enjoyable and safe.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            fontWeight="bold"
            mt={5}
            gutterBottom
            sx={{
              fontFamily: "Lobster Two, cursive",
              color: theme.palette.secondary.main,
            }}
          >
            Meet Our Team
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    backgroundColor: theme.palette.text.primary,
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    color: theme.palette.text.secondary,
                    "&:hover": {
                      transform: "scale(1.05)",
                      transition: "transform 0.3s ease-in-out",
                    },
                  }}
                >
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: 100,
                      height: 100,
                      margin: "0 auto 10px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    {member.role}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            fontWeight="bold"
            mt={5}
            gutterBottom
            sx={{
              fontFamily: "Lobster Two, cursive",
              color: theme.palette.primary.main,
            }}
          >
            Contact Us
          </Typography>
          <Box textAlign="center">
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.primary,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Email: info@travelbuddy.com
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.primary,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Phone: +123 456 7890
            </Typography>
            <Typography variant="body1">
              Follow us on{" "}
              <Link
                href="https://socialmedia.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.secondary.main,
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Social Media
              </Link>
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
