import React from "react";
import { Link } from "react-router-dom";
export default function DropDown() {
  return (
    <div
      style={{
        paddingLeft: "2rem",
        position: "fixed",
        right: "1rem",
        top: "5rem",
        border: "1px solid orange",
        background: "white",
        height: "7rem",
        width: "10rem",
        zIndex: "1000",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "start",
        color: "orange",
        flexDirection: "column",
      }}
    >
      <h4>
        <Link to="/home/list">List</Link>
      </h4>
      <h4>
        <Link to="/home/create">Create</Link>
      </h4>
      <h4>
        <Link to="/home/details">Details</Link>
      </h4>
      <h4>
        <Link to="/">Log Out</Link>
      </h4>
    </div>
  );
}
