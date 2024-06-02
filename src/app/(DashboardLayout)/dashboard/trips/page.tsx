"use client";
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "sonner";
import { useGetAllUserQuery } from "@/redux/features/auth/authApi";
import React from "react";
import {
  useDeleteTripMutation,
  useGetAllTripsQuery,
} from "@/redux/features/trip/tripApi";

const TripManagement = () => {
  const { data: trips, isLoading } = useGetAllTripsQuery(undefined);
  const [deleteTrip] = useDeleteTripMutation();

  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting trip...");

    try {
      const res = await deleteTrip(id);
      if (res?.data?.success === true) {
        toast.success("Trip delete successfully", { id: toastId });
      }
    } catch (error) {
      toast.error("Failed to delete trip", { id: toastId });
    }
  };

  const columns: GridColDef[] = [
    { field: "destination", headerName: "Destination", width: 400 },
    {
      field: "budget",
      headerName: "Budget",
      width: 200,
    },
    {
      field: "type",
      headerName: "Trip Type",
      width: 200,
    },
    {
      field: "delete",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box my={2}>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={trips?.data} columns={columns} hideFooter={true} />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}
    </Box>
  );
};

export default TripManagement;
