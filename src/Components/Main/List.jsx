import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function List() {
  const CurrDate = Date().toLocaleString();
  const [data, setdata] = useState([]);
  const getDbData = async () => {
    const res = await axios.get("http://localhost:8000/products");
    setdata(res.data);
  };
  useEffect(() => {
    getDbData();
  }, []);
  console.log(CurrDate);
  return (
    <div>
      <TableContainer component={Paper} sx={{ width: "auto" }}>
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
            {data.map((d) => (
              <TableRow key={d.id}>
                <TableCell>{d.product}</TableCell>
                <TableCell>{CurrDate.slice(3, 15)}</TableCell>
                <TableCell>${d.price}</TableCell>
                <TableCell>{d.publish}</TableCell>
                <TableCell>
                  <button style={{ background: "red" }}>delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
