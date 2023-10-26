import { AppBar, Box, Drawer, Grid } from "@mui/material";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    // <Box display="inline-flex" width="100%">
    //   <Box
    //     sx={{
    //       display: { xs: "none", md: "flex" },
    //       maxWidth: "333px",
    //       width: "100%",
    //       height: "100vh",
    //     }}
    //   >
    //     Sidebars
    //   </Box>
    //   <Box width="100%">
    //     <Box bgcolor={"#005bae"}>Nav</Box>
    //     <Grid container mt={3}>
    //       {children}
    //     </Grid>
    //   </Box>
    // </Box>
    <Grid container>
      <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
        {" "}
        sidebar
      </Grid>
      <Grid item xs={12} md={9}>
        <Grid item xs={12}>
          Header
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeLayout;
