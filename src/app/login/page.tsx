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
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
// import { toast } from "sonner";
import { z } from "zod";

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
    // try {
    //   const res = await userLogin(data);
    //   if (res.success) {
    //     storeUserInfo(res?.data?.accessToken);
    //     router.push("/dashboard");
    //     toast.success(res.message);
    //   } else {
    //     setError(res.message);
    //   }
    // } catch (error: any) {
    //   console.error(error);
    // }
  };

  return (
    <Container>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            maxWidth: "500px",
            width: "100%",
            boxShadow: 1,
            borderRadius: 2,
            p: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Avatar alt="logo" src={logo.src} sx={{ width: 56, height: 56 }} />
          </Box>
          <Typography
            variant="h5"
            component="h2"
            textAlign="center"
            fontWeight={600}
            my={1}
          >
            Travel Buddy Login
          </Typography>
          {error && (
            <Typography
              variant="body1"
              component="p"
              textAlign="center"
              fontWeight={600}
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

          {/* Form Section  */}
          <TBForm
            onSubmit={handleLogin}
            resolver={zodResolver(loginValidationSchema)}
          >
            <Grid container spacing={2} my={2}>
              <Grid item lg={12}>
                <TBInput name="usernameOrEmail" label="Username Or Email" />
              </Grid>
              <Grid item lg={12}>
                <TBInput name="password" label="Password" type="password" />
              </Grid>
            </Grid>
            <Button
              fullWidth={true}
              type="submit"
              sx={{
                my: 1,
              }}
            >
              Login
            </Button>
          </TBForm>
          <Typography
            sx={{
              textAlign: "center",
              mt: 1,
              "& a": {
                color: "primary.main",
              },
            }}
          >
            Don&apos;t have an account?{" "}
            <Link href="/register">Create an account</Link>
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
