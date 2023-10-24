import { Box, Button, Grid, TextField, styled } from "@mui/material";

export const CustomMainPage = styled("div")({
  display: "flex",
  height: "100vh",
  // background: "#F9FAFB",
});
export const CustomImg = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "20px",
});
export const FormDiv = styled("div")({
  display: "flex",
  background: "white",
  justifyContent: "center",
  padding: "1rem",
  height: "100%",
});
export const FormBox = styled("div")({
  width: "80%",
  marginTop: "7rem",
});
export const CustomText = styled("p")({
  color: "black",
  fontFamily: "public Sans",
  fontWeight: "300",
  fontSize: "0.875rem",
});
export const CustomButton = styled(Button)({
  height: "2.9rem",
  width: "90%",
  background: "#263238",
  color: "white",
  "&:hover": {
    background: "#263638",
  },
  marginTop: "15px",
});
export const ResetDiv = styled("div")({
  height: "70vh",
  margin: "15vh auto",
  textAlign: "center",
  padding: "1rem",
});
export const ErrorMessage = styled("p")({
  color: "red",
  font: "8px",
});
export const AlertBox = styled("div")({
  minHeight: "2.5rem",
  width: "90%",
  borderRadius: "10px",
  padding: "1rem",
  lineHeight: "1.3rem",
});
export const CustomGrid = styled(Grid)({
  display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
});
export const IconBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  height: "3rem",
  marginRight: "1rem",
  borderRadius: "5px",
});
export const IconsText = styled("p")({
  color: "black",
  fontFamily: "public Sans",
  fontSize: "1rem",
  fontWeight: "800",
  marginLeft: "2rem",
});
