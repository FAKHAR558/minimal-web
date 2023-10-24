import React from "react";
import { Box } from "@mui/material";
import M from "../../assets/M.png";
import webpic from "../../assets/webpic.png";
import { CustomMainPage, CustomImg } from "../Layouts/custom";
import { Outlet } from "react-router-dom";
export default function MainPage() {
  return (
    <>
      <CustomMainPage
        sx={{
          background: {
            xs: "white",
            lg: "#F9FAFB",
          },

          justifyContent: {
            xs: "center",
            lg: "space-between",
          },
        }}
      >
        <Box
          sx={{
            display: {
              xs: "none",
              lg: "inline",
            },
            width: "7rem",
            height: "6rem",
            margin: "10px 0 0 7px",
          }}
        >
          <CustomImg src={M} alt="Error"></CustomImg>
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              lg: "inline",
            },
            width: "37rem",
            height: "60vh",
            margin: "10rem 0 0 -5rem",
          }}
        >
          <CustomImg
            sx={
              {
                // boxShadow: "20px 20px 20px #bacc",
              }
            }
            src={webpic}
            alt="Error"
          ></CustomImg>
        </Box>
        <Box>
          <Outlet />
        </Box>
      </CustomMainPage>
    </>
  );
}
