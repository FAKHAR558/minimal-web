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
import {
  CustomGrid,
  CustomIconButton,
  IconBox,
  IconsText,
  ShortIconBox,
} from "./custom";
import { Box, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function IconsClass() {
  const navigate = useNavigate();
  const [arrowDirection, setArrowDirection] = useState(true);
  const [] = useState();
  // Menue Code
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (value) => {
    navigate(value);
    setAnchorEl(null);
  };

  //end Menu Code
  return (
    <>
      {arrowDirection ? (
        <CustomGrid
          item
          xs={0.8}
          sx={{
            display: "flex",
            height: "100vh",
            flexDirection: "column",
            alignItems: "center",
            // marginTop: "10vh",
            paddingTop: "2.5rem",

            borderRight: "0.1px dashed grey",
            background: "#F9FAFB",
          }}
        >
          <IconButton
            sx={{
              alignSelf: "flex-end",
              marginRight: "-1.5rem",
              marginTop: "1.7rem",
              borderRadius: "10rem",
              // border: "0.1px dashed  grey",
            }}
            onClick={() => setArrowDirection(!arrowDirection)}
          >
            {arrowDirection ? (
              <ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
            ) : (
              <ArrowBackIosNewIcon fontSize="small"></ArrowBackIosNewIcon>
            )}
          </IconButton>
          <ShortIconBox>
            <CustomIconButton>
              <AccountBalanceIcon fontSize="medium"></AccountBalanceIcon>
              <Typography>Banking</Typography>
            </CustomIconButton>
          </ShortIconBox>
          <ShortIconBox>
            <CustomIconButton>
              <ShoppingBagIcon fontSize="medium"></ShoppingBagIcon>
              <Typography>E-Commerce</Typography>
            </CustomIconButton>
          </ShortIconBox>
          <ShortIconBox>
            <CustomIconButton>
              <InsertDriveFileIcon fontSize="medium"></InsertDriveFileIcon>
              <Typography>Explore File</Typography>
            </CustomIconButton>
          </ShortIconBox>
          <ShortIconBox>
            <CustomIconButton>
              <AccountBoxIcon fontSize="medium"></AccountBoxIcon>
              <Typography>User</Typography>
            </CustomIconButton>
          </ShortIconBox>
          <ShortIconBox>
            <CustomIconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              // onClick={handleClick}
              onMouseOver={handleClick}
            >
              <DryCleaningIcon fontSize="medium"></DryCleaningIcon>
              <Typography>Product</Typography>
            </CustomIconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => navigate("")}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "center",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "center",
                horizontal: "1",
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose("list");
                }}
              >
                List
              </MenuItem>
              <MenuItem onClick={() => handleClose("details")}>
                Details
              </MenuItem>
              <MenuItem onClick={() => handleClose("create")}>Create</MenuItem>
              <MenuItem onClick={() => handleClose("edit")}>Edit</MenuItem>
            </Menu>
          </ShortIconBox>

          <ShortIconBox>
            <CustomIconButton>
              <ShoppingCartIcon fontSize="medium"></ShoppingCartIcon>
              <Typography>Store</Typography>
            </CustomIconButton>
          </ShortIconBox>
          <ShortIconBox>
            <CustomIconButton>
              <MailIcon fontSize="medium"></MailIcon>
              <Typography>E-Commerce</Typography>
            </CustomIconButton>
          </ShortIconBox>
          <ShortIconBox>
            <CustomIconButton>
              <TroubleshootIcon fontSize="medium"></TroubleshootIcon>
              <Typography>Invoice</Typography>
            </CustomIconButton>
          </ShortIconBox>
        </CustomGrid>
      ) : (
        <CustomGrid
          item
          xs={2}
          sx={{
            display: "flex",
            borderRight: "0.1px dashed grey",

            background: "#F9FAFB",
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
          <IconBox>
            <CustomIconButton>
              <AccountBalanceIcon fontSize="medium"></AccountBalanceIcon>
              <IconsText>Banking</IconsText>
            </CustomIconButton>
          </IconBox>

          <IconBox>
            <CustomIconButton>
              <ShoppingBagIcon fontSize="medium"></ShoppingBagIcon>
              <IconsText>E-Commerce</IconsText>
            </CustomIconButton>
          </IconBox>

          <IconBox>
            <CustomIconButton>
              <InsertDriveFileIcon fontSize="medium"></InsertDriveFileIcon>
              <IconsText>File</IconsText>
            </CustomIconButton>
          </IconBox>

          <IconBox>
            <CustomIconButton>
              <MailIcon fontSize="medium"></MailIcon>
              <IconsText>Mail Us</IconsText>
            </CustomIconButton>
          </IconBox>
          <IconBox>
            <CustomIconButton>
              <DryCleaningIcon fontSize="medium"></DryCleaningIcon>
              <IconsText>Products</IconsText>
              <ArrowForwardIosIcon
                fontSize="small"
                sx={{ marginLeft: "3rem" }}
              ></ArrowForwardIosIcon>
            </CustomIconButton>
          </IconBox>
          <IconBox>
            <CustomIconButton>
              <ShoppingCartIcon fontSize="medium"></ShoppingCartIcon>
              <IconsText>Store</IconsText>
            </CustomIconButton>
          </IconBox>
          <IconBox>
            <CustomIconButton>
              <TroubleshootIcon fontSize="medium"></TroubleshootIcon>{" "}
              <IconsText>Invoice</IconsText>
            </CustomIconButton>
          </IconBox>
        </CustomGrid>
      )}
    </>
  );
}
