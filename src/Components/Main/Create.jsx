import { Grid, Typography, Box } from "@mui/material";
import React from "react";

export default function Create() {
  return (
    <Grid container>
      <Grid item xs={12} md={4} sx={{ background: "navy", height: "20vh" }}>
        <Typography variant="h4" color="initial">
          Create New Product
        </Typography>
        <Box>
          <Typography variant="Body3" sx={{ mx: "1rem" }}>
            Dashboard
          </Typography>
          <Typography variant="Body1">Product</Typography>
        </Box>
        <Typography variant="h5" color="initial">
          Details
        </Typography>
        <Typography>Title,short,image</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{ background: "yellow", height: "80vh", marginTop: "18vh" }}
      >
        <h1>Create Component</h1>
      </Grid>
    </Grid>
  );
}
