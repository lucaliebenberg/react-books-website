import React from "react";
import { Link, Outlet } from "react-router-dom";

// import logo from "../logo.svg";
import logo from "../assets/bookslogo.svg";

import "../styles/Header.css";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "10px",
        paddingRight: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          //   backgroundColor: "yellow",
        }}
      >
        <div
          style={{
            // backgroundColor: "yellow",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="logo" />
        </div>
        <Link to="/">
          <h1>React js Books</h1>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          //   backgroundColor: "green",
        }}
      >
        <div>
          <Link to="/">
            <h1>Home</h1>
          </Link>
        </div>
        <div>
          <Link to="/contacts">
            <h1>Contacts</h1>
          </Link>
        </div>
        <div>
          <Link to="/about">
            <h1>About</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
