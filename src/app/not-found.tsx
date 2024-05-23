import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
    >
      <Box>
        <Typography variant="h2">404</Typography>
        <Typography variant="h6" component="p">
          Page not found!
        </Typography>
        <Typography variant="body2" component="p">
          The requested page could not be located.Checkout for any URL
          misspelling.
        </Typography>
        <Link href="/">
          <Button style={{ marginTop: "20px" }}>Return home page</Button>
        </Link>
      </Box>
    </Stack>
  );
};

export default NotFoundPage;
