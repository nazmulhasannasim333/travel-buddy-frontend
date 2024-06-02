"use client";
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";
import { useRegisterMutation } from "@/redux/features/register/registerApi";
import { useAppDispatch } from "@/redux/hooks";
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
import { toast } from "sonner";

const ChangePassword = () => {
  const [changeUserPassword] = useChangePasswordMutation();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Please wait...");
    try {
      const updatedPassword = {
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      };
      const res: any = await changeUserPassword(updatedPassword);
      if (res?.data?.success === true) {
        reset();
        toast.success("Password changed successfully!", {
          id: toastId,
          duration: 2000,
        });
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
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
            Change Password
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("oldPassword")}
              fullWidth
              label="Old Password"
              variant="outlined"
              margin="normal"
              name="oldPassword"
              type="password"
              required
            />
            <TextField
              {...register("newPassword")}
              fullWidth
              label="New Password"
              variant="outlined"
              margin="normal"
              type="password"
              name="newPassword"
              required
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
            >
              Change Password
            </Button>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default ChangePassword;
