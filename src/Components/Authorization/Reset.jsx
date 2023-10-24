import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  CustomButton,
  CustomText,
  ErrorMessage,
  ResetDiv,
} from "../Layouts/custom";
import Rlogo from "../../assets/Rlogo.png";
import { Typography, TextField, Input, FormControl, Box } from "@mui/material";
import { Link } from "react-router-dom";
export default function Reset() {
  const [data, setData] = useState();
  const [formError, setFormError] = useState();
  const handleSubmit = () => {
    setFormError(validate(data));
  };
  const validate = (value) => {
    let error = "";
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!value) {
      error = "Email Is Required";
    } else if (!regex.test(value)) {
      error = "Email is Not Valid";
    }
    return error;
  };
  return (
    <>
      <ResetDiv
        sx={{
          width: {
            xs: "95vw",
            sm: "70vw",
            md: "30rem",
          },
          height: {
            xs: "60vh",
            md: "auto",
          },
        }}
      >
        <img src={Rlogo} alt="error" width="60px" />
        <Typography variant="h4" sx={{ margin: "30px 0 10px 0" }}>
          Forgot your password?
        </Typography>
        <CustomText>
          Please enter the email address associated with your account and We
          will email you a link to reset your password
        </CustomText>
        <TextField
          sx={{ width: "90%", margin: "40px 0 10px 0" }}
          label="Email address"
          variant="outlined"
          onChange={(e) => setData(e.target.value)}
        />{" "}
        <br />
        <ErrorMessage sx={{ float: "left", marginLeft: "1.2rem" }}>
          {formError}
        </ErrorMessage>
        <CustomButton onClick={handleSubmit}>Send Request</CustomButton>
        <Box
          sx={{
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArrowBackIosNewIcon fontSize="small"></ArrowBackIosNewIcon>
          <Link to="/">
            <CustomText>Return to sign in</CustomText>
          </Link>
        </Box>
      </ResetDiv>
    </>
  );
}
