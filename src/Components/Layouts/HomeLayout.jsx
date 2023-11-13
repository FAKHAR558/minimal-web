import { AppBar, Box, Drawer, Grid } from "@mui/material";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
        {" "}
        sidebar
      </Grid>
      <Grid item xs={12} md={9}>
        <Grid item xs={12}>
          Header
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeLayout;
