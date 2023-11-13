import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import detimg from "../../assets/detimg.jpg";
import { CustomButton } from ".././Layouts/custom";
import { useNavigate } from "react-router-dom";
export default function Demo() {
  const navigate = useNavigate();
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#F9FAFB",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            background: "#D3FCD2",
            height: "25vh",
            marginTop: "1rem",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2.5rem",
              },
            }}
            color="initial"
          >
            Minimal Clone Project
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={10}
          sx={{
            background: "#CAFDF5",
            height: "55vh",
            marginTop: "2rem",
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <CustomButton
            onClick={() => navigate("/home/create")}
            variant="contained"
            sx={{ maxWidth: "14rem" }}
          >
            Create Product
          </CustomButton>
          <CustomButton
            onClick={() => navigate("/home/list")}
            variant="contained"
            sx={{ maxWidth: "14rem" }}
          >
            List
          </CustomButton>
          <CustomButton
            onClick={() => navigate("/home/details")}
            variant="contained"
            sx={{ maxWidth: "14rem" }}
          >
            Details
          </CustomButton>
        </Grid>
      </Grid>
    </>
  );
}
