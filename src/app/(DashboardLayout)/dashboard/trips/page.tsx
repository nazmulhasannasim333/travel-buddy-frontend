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
import { useGetAllTripsQuery } from "@/redux/features/trip/tripApi";

const TripManagement = () => {
  const { data: trips, isLoading } = useGetAllTripsQuery(undefined);
  console.log(trips);

  const [status, setStatus] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  // console.log(data);
  const columns: GridColDef[] = [
    { field: "destination", headerName: "Destination", width: 400 },
    {
      field: "budget",
      headerName: "Budget",
      width: 400,
    },
    {
      field: "edit",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton
            //  onClick={() => handleDelete(row.id)}
            aria-label="edit"
          >
            <EditIcon />
          </IconButton>
        );
      },
    },
    {
      field: "delete",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton
            //  onClick={() => handleDelete(row.id)}
            aria-label="delete"
          >
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
