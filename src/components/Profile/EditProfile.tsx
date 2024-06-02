"use client";
import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { useUpdateProfileMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";

const ProfileEdit = () => {
  const [name, setName] = useState("");
  const [updateProfile] = useUpdateProfileMutation();

  const handleSave = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Updating...");
    try {
      const res = await updateProfile({ name });
      if (res?.data?.success === true) {
        toast.success("Profile updated successfully", { id: toastId });
      }
    } catch (error) {
      toast.error("Failed to update profile", { id: toastId });
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
        Edit Profile
      </Typography>
      <Box
        component="form"
        onSubmit={handleSave}
        sx={{
          backgroundColor: "#ecf0f1",
          borderRadius: "15px",
          padding: "2rem",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          Save Changes
        </Button>
      </Box>
    </Container>
  );
};

export default ProfileEdit;
