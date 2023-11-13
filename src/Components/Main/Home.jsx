import React, { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import { CustomGrid } from "../Layouts/custom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconsClass from "../Layouts/IconsClass";
import { Outlet } from "react-router-dom";
import DropDown from "../Layouts/DropDown";

export default function Home() {
  const [dropDown, setDropDown] = useState(false);
  return (
    <>
      <Grid container>
        <IconsClass />
        <Grid item xs>
          <CustomGrid
            item
            xs={12}
            sx={{
              position: "sticky",
              top: "0",
              zIndex: "999",

              alignItems: "center",
              background: "white",
              height: "10vh",
              justifyContent: "end",
              paddingRight: "4rem",
              // borderBottom: "0.5px dashed black",
              // backgroundColor: "orange",
              opacity: "0.95",
            }}
          >
            <IconButton onClick={() => setDropDown(!dropDown)}>
              <AccountCircleIcon></AccountCircleIcon>
            </IconButton>
          </CustomGrid>
          {dropDown ? <DropDown /> : null}
          <Grid
            item
            xs
            sx={{
              minHeight: "90vh",
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
