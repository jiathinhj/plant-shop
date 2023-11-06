import React from "react";
import { Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";
import Header from "./Header";
const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" sx={{ height: "100vh" }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
