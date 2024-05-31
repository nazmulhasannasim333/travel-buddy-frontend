import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const TravelInspiration = () => {
  return (
    <Box mt={6}>
      <Typography variant="h4" align="center" mb={4}>
        Travel Inspiration
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://source.unsplash.com/featured/?travel"
              alt="Travel Inspiration Image"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Discover Hidden Gems
              </Typography>
              <Typography variant="body2">
                Uncover the lesser-known destinations that offer unique
                experiences away from the crowds.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://source.unsplash.com/featured/?adventure"
              alt="Travel Inspiration Image"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Adventure Awaits
              </Typography>
              <Typography variant="body2">
                Embark on thrilling adventures and adrenaline-pumping activities
                in breathtaking locations.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://source.unsplash.com/featured/?beach"
              alt="Travel Inspiration Image"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Relax on Sun-Kissed Beaches
              </Typography>
              <Typography variant="body2">
                Unwind and soak up the sun on pristine beaches with
                crystal-clear waters and golden sands.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TravelInspiration;
