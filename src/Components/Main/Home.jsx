import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import { CustomGrid } from "../Layouts/custom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconsClass from "../Layouts/IconsClass";
import HomeLayout from "../Layouts/HomeLayout";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Grid container>
        <IconsClass />
        <Grid item xs sx={{ background: "aqua" }}>
          <CustomGrid
            item
            xs={12}
            sx={{
              alignItems: "center",
              background: "white",
              height: "10vh",
              justifyContent: "end",
              paddingRight: "4rem",

              borderBottom: "0.5px dashed black",
            }}
          >
            <AccountCircleIcon></AccountCircleIcon>
          </CustomGrid>
          <Grid
            item
            xs
            sx={{
              background: "orange",
              height: "90vh",
              padding: "0 2rem",
            }}
          >
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

// <CustomGrid
//             item
//             xs={12}
//             sx={{
//               alignItems: "center",
//               background: "white",
//               height: "10vh",
//               justifyContent: "end",
//               paddingRight: "4rem",

//               borderBottom: "0.5px dashed black",
//             }}
//           >
//             <AccountCircleIcon></AccountCircleIcon>
//           </CustomGrid>
