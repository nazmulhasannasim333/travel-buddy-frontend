import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#282c34",
        color: "#fff",
        py: 4,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body2">
              Email: contact@travelbuddy.com
            </Typography>
            <Typography variant="body2">Phone: +1 234 567 890</Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton
                component="a"
                href="https://www.facebook.com"
                sx={{ color: "#fff" }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.twitter.com"
                sx={{ color: "#fff" }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com"
                sx={{ color: "#fff" }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com"
                sx={{ color: "#fff" }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Additional Links
            </Typography>
            <Link href="/terms" color="inherit" underline="hover">
              Terms of Use
            </Link>
            <br />
            <Link href="/privacy" color="inherit" underline="hover">
              Privacy Policy
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Travel Buddy
            </Typography>
            <Typography variant="body2">
              Travel Buddy is designed to connect travelers looking for
              companionship on their trips. Find your perfect travel buddy
              today!
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Travel Buddy. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
