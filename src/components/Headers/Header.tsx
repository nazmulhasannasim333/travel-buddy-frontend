"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useTheme, useMediaQuery } from "@mui/material";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        (event as React.KeyboardEvent).key === "Tab"
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component="a" href="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="/about">
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button component="a" href="/login">
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button component="a" href="/register">
          <ListItemText primary="Register" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg, #00CED1, #20B2AA)",
        boxShadow: "none",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            <Link href="/" passHref>
              Travel Buddy
            </Link>
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <>
              <Link href="/" passHref>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ marginRight: 2, borderRadius: 20 }}
                >
                  Home
                </Button>
              </Link>
              <Link href="/about" passHref>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ marginRight: 2, borderRadius: 20 }}
                >
                  About Us
                </Button>
              </Link>
              <Link href="/login" passHref>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ marginRight: 2, borderRadius: 20 }}
                >
                  Login
                </Button>
              </Link>
              <Link href="/register" passHref>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ borderRadius: 20 }}
                >
                  Register
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
