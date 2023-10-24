import React, { useState, useEffect } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import {
  Typography,
  TextField,
  IconButton,
  useEventCallback,
} from "@mui/material";
import {
  CustomText,
  FormDiv,
  FormBox,
  CustomButton,
  ErrorMessage,
  AlertBox,
} from "../Layouts/custom";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [formError, setFormError] = useState({});
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: [e.target.value],
    });
  };
  const handleSubmit = () => {
    setFormError(validate(data));
    data.email == "abc@gmail.com" && data.password == "123456"
      ? setIsValid(true)
      : setIsError(true);
  };

  const validate = (value) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!value.email) {
      errors.email = "Email Is Required";
    } else if (!regex.test(value.email)) {
      errors.email = "Email is Not Valid";
    }

    if (!value.password) {
      errors.password = "Password Is Required";
    } else if (value.password[0].length < 4) {
      errors.password = "Password Should be Greater than 4";
    } else if (value.password[0].length > 8) {
      errors.password = "Password Should be Less than 8";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0 && isError === true) {
      setIsHidden(false);
    }
    if (Object.keys(formError).length === 0 && isValid === true) {
      navigate("/home");
    }
  }, [formError, isError, isValid]);
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
            sx={{ fontWeight: "700", marginBottom: "10px" }}
          >
            Sign in to Minimal
          </Typography>
          <CustomText sx={{ float: "left", marginRight: "5px" }}>
            New User?
          </CustomText>
          <Link to="signup">
            <CustomText className="green" sx={{ color: "rgb(0, 167, 111)" }}>
              Create an account
            </CustomText>
          </Link>
          <AlertBox
            sx={{
              // height: "4.5rem",
              background: "rgb(202, 253, 245)",
              marginTop: "35px",
              overflow: "auto",
            }}
          >
            <ReportGmailerrorredIcon
              sx={{ float: "left", marginRight: "1rem" }}
            ></ReportGmailerrorredIcon>
            <CustomText sx={{ float: "left" }}>Use email: </CustomText>
            <CustomText sx={{ fontWeight: "900", float: "left" }}>
              abc@gmail.com
            </CustomText>
            <CustomText sx={{ float: "left" }}>/ Password :</CustomText>
            <CustomText sx={{ fontWeight: "900", float: "left" }}>
              123456
            </CustomText>
          </AlertBox>
          {!isHidden ? (
            <AlertBox
              sx={{
                background: "rgb(255, 233, 213)",
                margin: "1rem 0 -.5rem 0",
                overflow: "auto",
              }}
            >
              <ReportGmailerrorredIcon
                sx={{
                  float: "left",
                  marginRight: "1rem",
                }}
              ></ReportGmailerrorredIcon>
              Email/Password Error
            </AlertBox>
          ) : null}
          <TextField
            sx={{ width: "90%", margin: "20px 0 10px 0" }}
            label="Email address"
            variant="outlined"
            name="email"
            autoComplete="off"
            value={data.email}
            onChange={handleChange}
          />
          <ErrorMessage>{formError.email}</ErrorMessage>{" "}
          <TextField
            type={isVisible ? "password" : "text"}
            sx={{ width: "90%", margin: "20px 0 10px 0" }}
            label="Password"
            autoComplete="off"
            variant="outlined"
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
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <ErrorMessage>{formError.password}</ErrorMessage>
          <Link to="/reset">
            <CustomText
              sx={{
                marginTop: "15px",
                float: "right",
                marginRight: {
                  lg: "2.3rem",
                  md: "4rem",
                  sm: "3rem",
                  xs: "2rem",
                },
                textDecoration: "underline",
              }}
            >
              Forgot password ?
            </CustomText>
          </Link>
          <CustomButton onClick={handleSubmit}>Login</CustomButton>
        </FormBox>
      </FormDiv>
    </>
  );
}
