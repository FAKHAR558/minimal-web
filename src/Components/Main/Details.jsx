import React from "react";
import { Grid, Box } from "@mui/material";
import { CustomImg } from "../Layouts/custom";
import Pic from "../../assets/Pic.jpg";
export default function Details() {
  return (
    <Grid container>
      <Grid xs={12} md={6} item sx={{ height: "70vh", background: "red" }}>
        <CustomImg src={Pic}></CustomImg>
      </Grid>
      <Grid item xs={12} md={6} sx={{ height: "70vh", background: "blue" }}>
        B
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          height: "70vh",
          background: "green",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box>A</Box>
        <Box>B</Box>
        <Box>C</Box>
      </Grid>
    </Grid>
  );
}
