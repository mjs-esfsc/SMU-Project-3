// MB: THIS IS THE NAV BAR. IF USER NOT LOGGED IN, BAR WILL DISPLAY SIGN-UP AND LOGIN. IF USER IS LOGGED IN, BAR WILL DISPLAY LOGOUT

import React from "react";
import { Layout, Button, Row, Col } from "antd";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
//import { LinearGradient } from "expo-linear-gradient";
import "./styles/Header.css";

// =======
// navigation switches between tabs in header

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="flex-row">
          {/* <li className="mx-1"> */}
          <Button>
            <Link href="/" onClick={() => Auth.logout()}>
              Logout
            </Link>
          </Button>
          {/* </li> */}
        </div>
      );
    } else {
      return (
        <div>
          <Button>
            <Link to="/signup">Signup</Link>
          </Button>{" "}
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      );
    }
  }

  return (
    <Row className="gradient">
      <Col span={12}>
        <h1 className="navTitle">
          <Link style={{ color: "white" }} to="/">
            Two Men and a Horse Moving Company
          </Link>
        </h1>
      </Col>
      <Col span={12}>
        <nav>{showNavigation()}</nav>
      </Col>
    </Row>
  );
}

export default Nav;

// function Navigation({ currentPage, handlePageChange }) {
//   return (
//     <span className="">
//       <Button>
//         <a
//           href="#cart"
//           onClick={() => handlePageChange("Cart")}
//           // This is a conditional (ternary) operator that checks to see if the current page is "cart"
//           // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//           className={currentPage === "Cart" ? "nav-link active" : "nav-link"}
//         >
//           Cart
//         </a>
//       </Button>
//       <button className="">
//         <a
//           href="#signup"
//           onClick={() => handlePageChange("Signup")}
//           // Check to see if the currentPage is `Signup`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === "SignUp" ? "nav-link active" : "nav-link"}
//         >
//           Signup
//         </a>
//       </button>
//       <button className="">
//         <a
//           href="#portfolio"
//           onClick={() => handlePageChange("Portfolio")}
//           // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === "Fleet" ? "nav-link active" : "nav-link"}
//         >
//           Our Fleet
//         </a>
//       </button>
//       <button className="">
//         <a
//           href="#login"
//           onClick={() => handlePageChange("Login")}
//           // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === "Login" ? "nav-link active" : "nav-link"}
//         >
//           Login
//         </a>
//       </button>
//     </span>
//   );
// }

// export default Navigation;
