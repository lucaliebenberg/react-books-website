import React from "react";

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
        <h1>React js Books</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          //   backgroundColor: "green",
        }}
      >
        <div>
          <h1>Home</h1>
        </div>
        <div>
          <h1>Contacts</h1>
        </div>
        <div>
          <h1>About</h1>
        </div>
      </div>
    </div>
  );
}
