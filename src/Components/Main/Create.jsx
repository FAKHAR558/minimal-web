import {
  Grid,
  Typography,
  Box,
  InputAdornment,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import  from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    product: "",
    price: "",
    publish: "Nill",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: [e.target.value],
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/products", data);
    navigate("/home/list");
  };
  return (
    <Grid container>
      <Grid item xs={12} md={4} sx={{ height: "25vh", padding: "10px" }}>
        <Typography variant="h5" color="initial">
          Create New Product
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "90%",
            justifyContent: "space-around",
            flexWrap: "wrap",
            // background: "orange",
          }}
        >
          <Link to="/home">
            <Typography>Dashboard</Typography>
          </Link>
          <Link to="/home/list">
            <Typography>Product</Typography>
          </Link>

          <Typography>New Product</Typography>
        </Box>
        <Typography variant="h5" color="initial" sx={{ marginTop: "2rem" }}>
          Details
        </Typography>
        <Typography>Title,short,image</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          // background: "yellow",
          marginTop: "20vh",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "80vh",

            padding: "2rem",
          }}
        >
          <TextField
            label="Product Name"
            fullWidth
            required
            name="product"
            value={data.product}
            onChange={handleChange}
          ></TextField>
          <TextField
            // id="outlined-multiline-static"
            label="Sub Description"
            multiline
            rows={4}
            // defaultValue="Default Value"
          ></TextField>
          Image
          <TextField type="file" required></TextField>
          <TextField
            id="standard-basic"
            label="Price"
            variant="outlined"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            type="number"
            // required
            sx={{ width: "40%" }}
            name="price"
            value={data.price}
            onChange={handleChange}
          />
          <FormControl required>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Publish
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                name="publish"
                value="Yes"
                control={<Radio />}
                label="Yes"
                onChange={handleChange}
              />
              <FormControlLabel
                name="publish"
                value="No"
                control={<Radio />}
                label="No"
                onChange={handleChange}
              />
            </RadioGroup>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            sx={{
              height: "3rem",
              alignSelf: "flex-end",
              background: "rgb(23,23,23)",
            }}
          >
            Create Product
          </Button>
          {/* <button type="submit">A</button> */}
        </form>
      </Grid>
    </Grid>
  );
}
