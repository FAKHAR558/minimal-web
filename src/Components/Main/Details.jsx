import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import {
  Rating,
  FormControlLabel,
  Radio,
  RadioGroup,
  MenuItem,
  Select,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { CustomImg, CustomText } from "../Layouts/custom";
import { CustomDiv } from "../Layouts/custom";
import detimg from "../../assets/detimg.jpg";
import { Link } from "react-router-dom";
import QuantityInput from "../Layouts/QuantityPicker";
export default function Details() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid container>
      <Grid xs={12} md={7} item sx={{ height: "90vh" }}>
        <Link to="/home/list">
          <Typography variant="h6" color="initial">
            Back
          </Typography>
        </Link>
        <CustomImg sx={{ marginTop: "2rem" }} src={detimg}></CustomImg>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "90vh",
          background: "white",
          paddingLeft: "2rem",
          paddingTop: "1rem",
          marginTop: "3rem",
        }}
      >
        <CustomDiv>NEW</CustomDiv>
        <CustomText sx={{ fontWeight: "400", color: "green" }}>
          IN STOCK
        </CustomText>
        <CustomText
          sx={{ fontSize: "1.5rem", fontWeight: "700", fontStyle: "bold" }}
        >
          Foundations Matte Flip Flop
        </CustomText>
        <Box
          sx={{
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Rating
            sx={{ float: "left" }}
            name="half-rating"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
          <CustomText>( 9.12k reveiews )</CustomText>
        </Box>
        <Typography variant="h4">$97.14</Typography>
        <CustomText sx={{ maxWidth: "60%" }}>
          Featuring the original ripple design inspired by Japanese bullet
          trains, the Nike Air Max 97 lets you push your style full-speed ahead
        </CustomText>
        <Box
          sx={{
            display: "flex",
            // background: "aqua",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CustomText>Colors</CustomText>
          <RadioGroup row>
            <FormControlLabel value="Black" control={<Radio />} label="Black" />
            <FormControlLabel value="White" control={<Radio />} label="White" />
          </RadioGroup>
        </Box>
        <Box
          sx={{
            display: "flex",
            // background: "green",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CustomText>Size</CustomText>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ width: "6rem", height: "3rem" }}
          >
            <MenuItem value="">
              <em>8</em>
            </MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={6.5}>6.5</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={7.5}>7.5</MenuItem>
          </Select>
        </Box>
        <Box
          sx={{
            display: "flex",
            // background: "Blue",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CustomText>Quantity</CustomText>
          <QuantityInput />
        </Box>
        <Box
          sx={{
            display: "flex",
            // padding: "0 15%",
            justifyContent: "space-around",
            margin: "1rem 0",
          }}
        >
          <Button
            disabled
            variant="contained"
            sx={{ width: "35%", height: "3rem" }}
          >
            Add To Cart
          </Button>
          <Button
            disabled
            variant="contained"
            sx={{ width: "35%", height: "3rem" }}
          >
            Buy Now
          </Button>
        </Box>
        <Box
          sx={{
            // background: "yellow",
            height: "3rem",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "0 20%",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AddIcon></AddIcon>
            <CustomText
              sx={{
                ":hover": {
                  textDecoration: "underline",
                },
                fontWeight: "600",
                marginLeft: "1px",
              }}
            >
              Compare
            </CustomText>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FavoriteIcon></FavoriteIcon>
            <CustomText
              sx={{
                ":hover": {
                  textDecoration: "underline",
                },
                fontWeight: "600",
                marginLeft: "1px",
              }}
            >
              Favourite
            </CustomText>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ShareIcon></ShareIcon>
            <CustomText
              sx={{
                ":hover": {
                  textDecoration: "underline",
                },
                fontWeight: "600",
                marginLeft: "1px",
              }}
            >
              Share
            </CustomText>
          </Box>
        </Box>
      </Grid>
      <Grid
        container
        xs={12}
        sx={{
          height: {
            sx: "100vh",
            md: "20vh",
          },
          // background: "green",
          display: "flex",
          justifyContent: {
            sx: "center",
            md: "space-around",
          },

          marginTop: "6rem",
          marginBottom: "3rem",
        }}
      >
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            // background: "orange",
            // width: "25vw",
          }}
        >
          <GppGoodIcon></GppGoodIcon>
          <Typography variant="h6">100% Original</Typography>
          <CustomText sx={{ maxWidth: "60%" }}>
            Chocolate bar candy canes ice cream toffee cookie halvah
          </CustomText>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            minHeight: "7rem",

            // background: "red",
            // width: "25vw",
          }}
        >
          <AccessTimeIcon></AccessTimeIcon>
          <Typography variant="h6">10 Day Replacement</Typography>
          <CustomText sx={{ maxWidth: "60%" }}>
            Marshmallow biscuit donuting dragée fruitcake wafer
          </CustomText>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",

            alignItems: "center",
            // background: "pink",
            // width: "25vw",
          }}
        >
          <GppGoodIcon></GppGoodIcon>
          <Typography variant="h6">Year Warranty</Typography>
          <CustomText sx={{ maxWidth: "70%" }}>
            Cotton candy gingerbread cake Ifgh love sugar sweet.
          </CustomText>
        </Grid>
      </Grid>
    </Grid>
  );
}
