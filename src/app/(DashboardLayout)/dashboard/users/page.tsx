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
import { toast } from "sonner";
import { useGetAllUserQuery } from "@/redux/features/auth/authApi";
import React from "react";

const UserManagement = () => {
  const { data, isLoading } = useGetAllUserQuery(undefined);

  const [status, setStatus] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  // console.log(data);
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 400 },
    {
      field: "email",
      headerName: "Email",
      width: 400,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                {status || "Active"}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label={status || "Active"}
                onChange={handleChange}
              >
                <MenuItem value={"active"}>Active</MenuItem>
                <MenuItem value={"deactive"}>Deactive</MenuItem>
              </Select>
            </FormControl>
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                {status || "Active"}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label={status || "Active"}
                onChange={handleChange}
              >
                <MenuItem value={"active"}>User</MenuItem>
                <MenuItem value={"deactive"}>Admin</MenuItem>
              </Select>
            </FormControl>
          </Box>
        );
      },
    },
  ];

  return (
    <Box my={2}>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={data?.data} columns={columns} hideFooter={true} />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}
    </Box>
  );
};

export default UserManagement;
