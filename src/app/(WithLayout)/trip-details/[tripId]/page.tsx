"use client";
import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import Image from "next/image";
import logo from "@/assets/images/hero.jpg";
import { useGetTripQuery } from "@/redux/features/trip/tripApi";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useRequestBuddyMutation } from "@/redux/features/buddy/buddyApi";
import { toast } from "sonner";

const TravelDetailsPage: React.FC = ({ params }: any) => {
  const user = useAppSelector(selectCurrentUser);
  const { data: trip } = useGetTripQuery(params.tripId);
  const [requestBuddy] = useRequestBuddyMutation();

  const handleBuddyReq = async () => {
    const toastId = toast.loading("Requesting...");
    try {
      const userId = { userId: user?.userId };
      const data = {
        tripId: trip?.data?.id,
        userId: userId,
      };
      const res: any = await requestBuddy(data);
      if (res?.data?.success === true) {
        toast.success("Travel buddy request sent successfully", {
          id: toastId,
          duration: 2000,
        });
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          Trip to {trip?.data?.destination}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            {/* Display multiple photos */}
            <Box>
              <Image
                src={logo}
                alt="Trip Photo"
                width={800}
                height={600}
                layout="responsive"
                objectFit="cover"
              />
            </Box>
            <Box mt={2}>
              <Typography variant="h6" gutterBottom>
                Description
              </Typography>
              <Typography variant="body1">{trip?.data?.description}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Start Date
              </Typography>
              <Typography variant="body1">{trip?.data?.startDate}</Typography>
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>
                End Date
              </Typography>
              <Typography variant="body1">{trip?.data?.endDate}</Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h6" gutterBottom>
                Travel Type
              </Typography>
              <Typography variant="body1">{trip?.data?.type}</Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h6" gutterBottom>
                Location
              </Typography>
              <Typography variant="body1">{trip?.data.destination}</Typography>
            </Box>
            <Box mt={3}>
              <Button
                onClick={handleBuddyReq}
                type="submit"
                variant="contained"
                color="primary"
              >
                Request to Join Trip
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default TravelDetailsPage;
