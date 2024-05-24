import { Container, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "auto",
        padding: "20px 0",
        backgroundColor: "#f8f8f8",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          Contact:{" "}
          <Link href="mailto:info@travelbuddy.com">info@travelbuddy.com</Link>
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary">
          &copy; {new Date().getFullYear()} Travel Buddy. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
