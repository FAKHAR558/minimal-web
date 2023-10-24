import React, { useState } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import MailIcon from "@mui/icons-material/Mail";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CustomGrid, IconBox, IconsText } from "./custom";
import { Box, IconButton, Typography } from "@mui/material";
export default function IconsClass() {
  const [arrowDirection, setArrowDirection] = useState(true);
  return (
    <>
      {arrowDirection ? (
        <CustomGrid
          item
          xs={0.6}
          sx={{
            display: "flex",
            background: "green",
            height: "100vh",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            paddingTop: "3rem",
          }}
        >
          <IconButton
            sx={{ alignSelf: "flex-end", marginRight: "-1.5rem" }}
            onClick={() => setArrowDirection(!arrowDirection)}
          >
            {arrowDirection ? (
              <ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
            ) : (
              <ArrowBackIosNewIcon fontSize="small"></ArrowBackIosNewIcon>
            )}
          </IconButton>
          <IconButton>
            <AccountBalanceIcon fontSize="medium"></AccountBalanceIcon>
          </IconButton>
          <IconButton>
            <ShoppingBagIcon fontSize="medium"></ShoppingBagIcon>
          </IconButton>
          <IconButton>
            <InsertDriveFileIcon fontSize="medium"></InsertDriveFileIcon>
          </IconButton>
          <IconButton>
            <AccountBoxIcon fontSize="medium"></AccountBoxIcon>
          </IconButton>
          <IconButton>
            <DryCleaningIcon fontSize="medium"></DryCleaningIcon>
          </IconButton>
          <IconButton>
            <ShoppingCartIcon fontSize="medium"></ShoppingCartIcon>
          </IconButton>
          <IconButton>
            <MailIcon fontSize="medium"></MailIcon>
          </IconButton>
          <IconButton>
            <TroubleshootIcon fontSize="medium"></TroubleshootIcon>
          </IconButton>
        </CustomGrid>
      ) : (
        <CustomGrid
          item
          xs={2}
          sx={{
            display: "flex",
            background: "green",
            height: "100vh",
            flexDirection: "column",
            justifyContent: "space-around",
            paddingTop: "3rem",
            paddingLeft: "1.5rem",
          }}
        >
          <IconButton
            sx={{ alignSelf: "flex-end", marginRight: "-1.5rem" }}
            onClick={() => setArrowDirection(!arrowDirection)}
          >
            {arrowDirection ? (
              <ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
            ) : (
              <ArrowBackIosNewIcon fontSize="small"></ArrowBackIosNewIcon>
            )}
          </IconButton>
          <IconBox sx={{ background: "#F4F6F8" }}>
            <IconButton>
              <AccountBalanceIcon fontSize="medium"></AccountBalanceIcon>
            </IconButton>
            <IconsText>Banking</IconsText>
          </IconBox>

          <IconBox sx={{ background: "#F4F6F8" }}>
            <IconButton>
              <ShoppingBagIcon fontSize="medium"></ShoppingBagIcon>
            </IconButton>
            <IconsText>E-Commerce</IconsText>
          </IconBox>

          <IconBox sx={{ background: "#F4F6F8" }}>
            <IconButton>
              <InsertDriveFileIcon fontSize="medium"></InsertDriveFileIcon>
            </IconButton>
            <IconsText>File</IconsText>
          </IconBox>

          <IconBox sx={{ background: "#F4F6F8" }}>
            <IconButton>
              <MailIcon fontSize="medium"></MailIcon>
            </IconButton>
            <IconsText>Mail Us</IconsText>
          </IconBox>
          <IconBox sx={{ background: "#F4F6F8" }}>
            <IconButton>
              <DryCleaningIcon fontSize="medium"></DryCleaningIcon>
            </IconButton>
            <IconsText>Products</IconsText>
          </IconBox>
          <IconBox sx={{ background: "#F4F6F8" }}>
            <IconButton>
              <ShoppingCartIcon fontSize="medium"></ShoppingCartIcon>
            </IconButton>
            <IconsText>Store</IconsText>
          </IconBox>
          <IconBox sx={{ background: "#F4F6F8" }}>
            <IconButton>
              <TroubleshootIcon fontSize="medium"></TroubleshootIcon>{" "}
            </IconButton>
            <IconsText>Invoice</IconsText>
          </IconBox>
        </CustomGrid>
      )}
    </>
  );
}
