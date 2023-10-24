import React from "react";
import { Grid, IconButton } from "@mui/material";
import { CustomGrid } from "../Layouts/custom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconsClass from "../Layouts/IconsClass";

export default function Home() {
  return (
    <>
      <Grid container>
        <IconsClass />
        <CustomGrid
          item
          xs
          sx={{
            alignItems: "center",
            background: "blue",
            height: "10vh",
            justifyContent: "end",
            paddingRight: "4rem",
          }}
        >
          <AccountCircleIcon fontSize="medium"></AccountCircleIcon>
        </CustomGrid>
      </Grid>
    </>
  );
}
