"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import logo from "@/assets/logo.png";
import TBInput from "@/components/Forms/TBInput";
import TBForm from "@/components/Forms/TBForm";

const loginValidationSchema = z.object({
  email: z.string({ required_error: "User Name or Email is required!" }),
  password: z
    .string({ required_error: "Password is required!" })
    .min(5, { message: "Must be 5 or more characters long!" }),
});

const loginDefaultValues = {
  usernameOrEmail: "",
  password: "",
};

const Login = () => {
  const [error, setError] = React.useState("");
  const router = useRouter();

  const handleLogin = async (data: FieldValues) => {
    console.log("HI");
    try {
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {error && (
          <Typography
            variant="subtitle1"
            component="p"
            textAlign="center"
            fontWeight={500}
            sx={{
              backgroundColor: "#ffebe8",
              border: "1px solid #dd3c10",
              mt: 3,
              p: 1,
            }}
          >
            {error}
          </Typography>
        )}
        <Avatar
          alt="logo"
          src={logo.src}
          sx={{ width: 56, height: 56, m: 2 }}
        />
        <Typography component="h1" variant="h5">
          Travel Buddy Login
        </Typography>
        <TBForm
          onSubmit={handleLogin}
          resolver={zodResolver(loginValidationSchema)}
          defaultValues={loginDefaultValues}
        >
          <TBInput
            name="usernameOrEmail"
            label="Username or email address"
            required
          />
          <TBInput name="password" label="Password" type="password" required />
          <Button type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>
            Login
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Register"}
              </Link>
            </Grid>
          </Grid>
        </TBForm>
      </Box>
    </Container>
  );
};

export default Login;
