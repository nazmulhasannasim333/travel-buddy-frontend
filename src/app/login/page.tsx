"use client";

import TBForm from "@/components/Forms/TBForm";
import TBInput from "@/components/Forms/TBInput";
import logo from "@/assets/logo.png";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
// import { toast } from "sonner";
import { z } from "zod";
import backgroundImage from '@/assets/travel-photos-with-camera-wooden-table.jpg';

const loginValidationSchema = z.object({
  usernameOrEmail: z.string({
    required_error: "Username or Email is required!",
  }),
  password: z.string({ required_error: "Password is required!" }),
});

const LoginPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (data: FieldValues) => {
    console.log("data", data);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 10px",
        }}
      >
        <Container maxWidth="xs">
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "8px",
              padding: "24px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="h5" component="h2" textAlign="center" mb={4} color={'purple'} fontSize={'bold'}>
              Travel Buddy Login
            </Typography>

            <form onSubmit={handleLogin}>
              <TextField
                fullWidth
                label="Username or Email"
                variant="outlined"
                margin="normal"
                name="usernameOrEmail"
                required
              />
              <TextField
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
        </Container>
      </Box>
    </Container>
  );
};

export default LoginPage;
