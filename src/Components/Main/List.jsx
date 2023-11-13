import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Grid,
  Box,
  Typography,
  Button,
  TablePagination,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import detimg from "../../assets/detimg.jpg";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CustomText } from "../Layouts/custom";
import DialogBox from "../Layouts/DialogBox";
export default function List() {
  const [change, setChange] = useState({});
  const [page, changePage] = useState(0);
  const [rowPerPage, changeRowPerPage] = useState(5);
  const navigate = useNavigate();
  const CurrDate = Date().toLocaleString();
  const [data, setdata] = useState([]);
  const [search, setSearch] = useState([]);

  const getDbData = async () => {
    const res = await axios.get("http://localhost:8000/products");
    setdata(res.data);
    setSearch(res.data);
  };
  useEffect(() => {
    getDbData();
  }, []);
  useEffect(() => {
    getDbData();
  }, [change]);

  const handlePageChange = (event, newpage) => {
    changePage(newpage);
  };
  const handleRowsPerPageChange = (event) => {
    changeRowPerPage(event.target.value);
    changePage(0);
  };
  const FilteredArray = (value) => {
    const newData = data.filter((d) =>
      d.product[0].toLowerCase().includes(value.toLowerCase())
    );
    setSearch(newData);
  };
  const handleFilter = (e) => {
    FilteredArray(e.target.value);
  };

  return (
    <>
      <Grid
        item
        xs
        sx={{
          display: "flex",
          justifyContent: "space-between",
          // background: "green",
          height: "15vh",
          flexDirection: "row",
        }}
      >
        <Box sx={{ width: "50%", padding: "1rem" }}>
          <Typography variant="h5">List</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Link to="/home">
              <Typography>Dashboard</Typography>
            </Link>
            <Link to="/home/details">
              <CustomText sx={{ m: "0 1rem" }}>Details</CustomText>
            </Link>
            <CustomText>List</CustomText>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            width: "50%",
          }}
        >
          <Button
            onClick={() => navigate("/home/create")}
            variant="contained"
            sx={{
              width: {
                xs: "100%",
                sm: "30%",
              },

              background: "rgb(23,23,23)",
            }}
          >
            + Create Product
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <TextField placeholder="Search" fullWidth onChange={handleFilter} />
        <TableContainer component={Paper} sx={{ width: "100%" }}>
          <Table>
            <TableHead>
              <TableRow sx={{ background: "grey" }}>
                <TableCell>Product</TableCell>
                <TableCell>Create at</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Publish</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {search
                .slice(page * rowPerPage, page * rowPerPage + rowPerPage)
                .map((d, index) => (
                  <>
                    <TableRow key={d.id}>
                      <TableCell>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <img
                            style={{ borderRadius: "5px" }}
                            src={detimg}
                            alt="Eror"
                            width="100px"
                            height="90px"
                          />{" "}
                          <h3 style={{ marginLeft: "5px" }}>{d.product}</h3>
                        </Box>
                      </TableCell>
                      <TableCell>{CurrDate.slice(3, 15)}</TableCell>
                      <TableCell>${d.price}</TableCell>
                      <TableCell>{d.publish}</TableCell>
                      <TableCell>
                        <DialogBox
                          id={d.id}
                          Title={d.product}
                          fun={setChange}
                        />
                      </TableCell>
                    </TableRow>
                  </>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[3, 5, 10]}
          rowsPerPage={rowPerPage}
          page={page}
          count={data.length}
          component="div"
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        ></TablePagination>
      </Grid>
    </>
  );
}
