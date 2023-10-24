import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import {
  CustomText,
  FormDiv,
  FormBox,
  CustomButton,
  ErrorMessage,
} from "../Layouts/custom";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formError, setFormError] = useState({});
  const [isVisible, setIsVisible] = useState(true);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    setFormError(validate(data));
  };
  const validate = (value) => {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const errors = {};
    if (!value.firstName) {
      errors.Name = "Full Name Is Requird";
    }
    if (!value.lastName) {
      errors.Name = "Full Name Is Requird";
    }
    if (!value.email) {
      errors.email = "Email Is Requird";
    } else if (!regex.test(value.email)) {
      errors.email = "Email is Not Valid";
    }

    if (!value.password) {
      errors.password = "Password Is Requird";
    } else if (value.password[0].length < 4) {
      errors.password = "Password Should be Greater than 4";
    } else if (value.password[0].length > 8) {
      errors.password = "Password Should be Less than 8";
    }
    return errors;
  };
  return (
    <>
      <FormDiv
        sx={{
          width: {
            xs: "90vw",
            sm: "80vw",
            md: "70vw",
            lg: "37vw",
          },
        }}
      >
        <FormBox>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "700",
              marginBottom: "10px",
            }}
          >
            Get started absolutely free
          </Typography>
          <CustomText sx={{ float: "left", marginRight: "5px" }}>
            Already have an account?
          </CustomText>
          <Link to="/">
            <CustomText
              className="green"
              sx={{ color: "rgb(0, 167, 111)", fontWeight: "700" }}
            >
              SignIn
            </CustomText>
          </Link>

          <Box
            sx={{
              height: "4rem",
              // background: "#1de9b6",
              width: "90%",
              marginTop: "35px",
              borderRadius: "10px",
              opacity: "0.9",
              paddingTop: "auto",
            }}
          >
            <TextField
              label="First name"
              variant="outlined"
              autoComplete="off"
              sx={{ width: "47%", marginRight: "5%" }}
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
            />
            {/* <ErrorMessage>{formError.firstName}</ErrorMessage> */}
            <TextField
              label="Last name"
              variant="outlined"
              autoComplete="off"
              sx={{ width: "47%" }}
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
            />
            <ErrorMessage>{formError.Name}</ErrorMessage>
          </Box>
          <TextField
            sx={{ width: "90%", margin: "20px 0 10px 0" }}
            label="Email address"
            variant="outlined"
            autoComplete="off"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <ErrorMessage>{formError.email}</ErrorMessage>

          <TextField
            type={isVisible ? "password" : "text"}
            sx={{ width: "90%", margin: "20px 0 20px 0" }}
            label="Password"
            variant="outlined"
            autoComplete="off"
            name="password"
            value={data.password}
            onChange={handleChange}
            InputProps={{
              endAdornment: isVisible ? (
                <IconButton onClick={() => setIsVisible(!isVisible)}>
                  <VisibilityIcon />
                </IconButton>
              ) : (
                <IconButton onClick={() => setIsVisible(!isVisible)}>
                  <VisibilityOffIcon />{" "}
                </IconButton>
              ),
            }}
          />
          <ErrorMessage>{formError.password}</ErrorMessage>

          <CustomButton onClick={handleSubmit}>Create Account</CustomButton>
        </FormBox>
      </FormDiv>
    </>
  );
}
