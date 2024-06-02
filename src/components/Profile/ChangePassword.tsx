"use client";
import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { toast } from "sonner";
import { FieldValues, useForm } from "react-hook-form";
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";

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
    <Container maxWidth="sm" sx={{ marginTop: "2rem" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontFamily: "Montserrat, sans-serif",
          color: "#2c3e50",
          fontWeight: 700,
        }}
      >
        Change Password
      </Typography>
      <Box
        sx={{
          backgroundColor: "#ecf0f1",
          borderRadius: "15px",
          padding: "2rem",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Current Password"
            type="password"
            variant="outlined"
            {...register("oldPassword")}
            sx={{ marginBottom: "1rem" }}
          />
          <TextField
            fullWidth
            label="New Password"
            type="password"
            variant="outlined"
            {...register("newPassword")}
            sx={{ marginBottom: "1rem" }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              backgroundColor: "#3498db",
              "&:hover": { backgroundColor: "#2980b9" },
            }}
          >
            Change Password
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ChangePassword;
