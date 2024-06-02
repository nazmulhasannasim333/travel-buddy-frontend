"use client";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  useChangeUserRoleMutation,
  useChangeUserStatusMutation,
  useGetAllUserQuery,
} from "@/redux/features/auth/authApi";
import React from "react";
import { toast } from "sonner";

const UserManagement = () => {
  const { data, isLoading } = useGetAllUserQuery(undefined);
  const [changeStatus] = useChangeUserStatusMutation();
  const [changeRole] = useChangeUserRoleMutation();

  const handleStatusChange = async (
    event: SelectChangeEvent,
    userId: string
  ) => {
    const newStatus = event.target.value;
    const updateStatus = { userId, status: { status: newStatus } };
    const toastId = toast.loading("Changing status...");

    try {
      const res = await changeStatus(updateStatus);
      if (res?.data?.success === true) {
        toast.success("Status changed successfully", { id: toastId });
      }
    } catch (error) {
      toast.error("Failed to change status", { id: toastId });
    }
  };

  const handleRoleChange = async (event: SelectChangeEvent, userId: string) => {
    const newRole = event.target.value;
    const updateRole = { userId, role: { role: newRole } };
    const toastId = toast.loading("Changing role...");

    try {
      const res = await changeRole(updateRole);
      if (res?.data?.success === true) {
        toast.success("Role changed successfully", { id: toastId });
      }
    } catch (error) {
      toast.error("Failed to change role", { id: toastId });
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 300 },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "status",
      headerName: "Status",
      width: 300,
      renderCell: (params) => (
        <FormControl fullWidth>
          <Select
            value={params.value}
            onChange={(event) => handleStatusChange(event, params.row.id)}
          >
            <MenuItem value="ACTIVE">Active</MenuItem>
            <MenuItem value="DEACTIVE">Deactive</MenuItem>
          </Select>
        </FormControl>
      ),
    },
    {
      field: "role",
      headerName: "Role",
      width: 300,
      renderCell: (params) => (
        <FormControl fullWidth>
          <Select
            value={params.value}
            onChange={(event) => handleRoleChange(event, params.row.id)}
          >
            <MenuItem value="USER">User</MenuItem>
            <MenuItem value="ADMIN">Admin</MenuItem>
          </Select>
        </FormControl>
      ),
    },
  ];

  return (
    <Box my={2} width="100%">
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Box my={2} width="100%">
          <DataGrid
            rows={data?.data || []}
            columns={columns}
            getRowId={(row) => row.id}
            autoHeight
            hideFooter
          />
        </Box>
      )}
    </Box>
  );
};

export default UserManagement;
