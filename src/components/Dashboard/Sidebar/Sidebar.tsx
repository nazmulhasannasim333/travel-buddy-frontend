/* eslint-disable react/prop-types */
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Link from "next/link";
import { FC } from "react";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

interface SidebarProps {
  open: boolean;
}

const Sidebar: FC<SidebarProps> = ({ open }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
      ></Stack>
      <List sx={{ flexGrow: 1 }}>
        <ListItem disablePadding sx={{ display: "block" }}>
          <Link href="/dashboard" passHref legacyBehavior>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 2,
                  justifyContent: "center",
                }}
              >
                <DashboardIcon sx={{ fontSize: 30 }} />
              </ListItemIcon>
              {open && <ListItemText primary="Dashboard" sx={{ opacity: 1 }} />}
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <Link href="/dashboard/users" passHref legacyBehavior>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 2,
                  justifyContent: "center",
                }}
              >
                <PeopleOutlineIcon sx={{ fontSize: 30 }} />
              </ListItemIcon>
              {open && (
                <ListItemText primary="User Management" sx={{ opacity: 1 }} />
              )}
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <Link href="/dashboard/trips" passHref legacyBehavior>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 2,
                  justifyContent: "center",
                }}
              >
                <ConnectingAirportsIcon sx={{ fontSize: 30 }} />
              </ListItemIcon>
              {open && (
                <ListItemText primary="Trip Management" sx={{ opacity: 1 }} />
              )}
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <Link href="/dashboard/change-password" passHref legacyBehavior>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 2,
                  justifyContent: "center",
                }}
              >
                <VpnKeyIcon sx={{ fontSize: 30 }} />
              </ListItemIcon>
              {open && (
                <ListItemText primary="Change Password" sx={{ opacity: 1 }} />
              )}
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
