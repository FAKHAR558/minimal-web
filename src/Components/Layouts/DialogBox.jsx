import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
var i;
export default function DialogBox(props) {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  // Start Menue Code

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (value) => {
    navigate(value);
    setAnchorEl(null);
  };

  //End Menue Code
  //Start Dialog Code
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  //End Dialog Code
  const handleDelete = () => {
    axios.delete("http://localhost:8000/products/" + props.id);

    setAnchorEl(null);
    setOpenDialog(false);

    props.fun(props.id);
  };
  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        // onMouseOut={() => setAnchorEl(null)}
      >
        <MoreVertIcon></MoreVertIcon>
      </IconButton>
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
          horizontal: "-1",
        }}
        onMouseLeave={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => handleClose("/home/details")}>
          Details
        </MenuItem>
        <MenuItem onClick={() => handleClose("/home/create")}>Create</MenuItem>
        <MenuItem onClick={() => setOpenDialog(true)}>Delete</MenuItem>
      </Menu>

      <Dialog
        fullWidth="25%"
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are You Sure to Delete ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <h3>{props.Title}</h3>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleCloseDialog}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
