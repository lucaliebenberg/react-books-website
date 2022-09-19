// import React from "react";
// import { Link, Outlet } from "react-router-dom";

// // import logo from "../logo.svg";
// import logo from "../assets/bookslogo.svg";

// import "../styles/Header.css";

// export default function Header() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         backgroundColor: "black",
//         justifyContent: "space-between",
//         alignItems: "center",
//         paddingLeft: "10px",
//         paddingRight: "10px",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           //   backgroundColor: "yellow",
//         }}
//       >
//         <div
//           style={{
//             // backgroundColor: "yellow",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <img src={logo} alt="logo" />
//         </div>
//         <Link to="/">
//           <h1>React js Books</h1>
//         </Link>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           //   backgroundColor: "green",
//         }}
//       >
//         <div>
//           <Link to="/">
//             <h1>Home</h1>
//           </Link>
//         </div>
//         <div>
//           <Link to="/contacts">
//             <h1>Contacts</h1>
//           </Link>
//         </div>
//         <div>
//           <Link to="/about">
//             <h1>About</h1>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import "../styles/Header.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        React Books
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contacts">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
