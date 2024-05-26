"use client";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
// import { toast } from "sonner";

const LoginPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Container maxWidth="xs">
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "8px",
            padding: "24px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            textAlign="center"
            mb={4}
            color={"purple"}
            fontSize={"bold"}
          >
            Travel Buddy Login
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("email")}
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              name="email"
              required
            />
            <TextField
              {...register("password")}
              fullWidth
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
              name="password"
              required
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
            >
              Login
            </Button>
          </form>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography variant="body1" sx={{ color: "#333" }}>
              Dont have an account?{" "}
              <Button
                color="primary"
                variant="text"
                onClick={() => router.push("/register")}
              >
                Create an account
              </Button>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
