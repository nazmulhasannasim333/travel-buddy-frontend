import React from "react";
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetProfileQuery } from "@/redux/features/auth/authApi";

const ProfilePage = () => {
  const { data: user } = useGetProfileQuery(undefined);

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Card sx={{ width: "100%", textAlign: "center" }}>
          <CardContent>
            <Avatar
              alt={user?.data?.name}
              src="https://images.pexels.com/photos/11725367/pexels-photo-11725367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              sx={{ width: 100, height: 100, margin: "auto" }}
            />
            <Typography variant="h5" component="div" sx={{ mt: 2 }}>
              {user?.data?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {user?.data?.email}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default ProfilePage;
