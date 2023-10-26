import { Box, Button, MenuItem, Menu } from "@mui/material";
import React from "react";

export default function MenuPop() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ m: "10rem 20rem" }}>
      <Button
        variant="contained"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Click
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "end",
        }}
      >
        <MenuItem onClick={() => alert("Home")}>Home</MenuItem>
        <MenuItem onClick={() => alert("Home")}>Type</MenuItem>
        <MenuItem onClick={() => alert("Home")}>Slash</MenuItem>
      </Menu>
      <></>
    </Box>
  );
}
