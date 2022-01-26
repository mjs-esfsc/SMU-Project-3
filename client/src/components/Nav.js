// MB: THIS IS THE NAV BAR. IF USER NOT LOGGED IN, BAR WILL DISPLAY SIGN-UP AND LOGIN. IF USER IS LOGGED IN, BAR WILL DISPLAY LOGOUT

import React from "react";
import { Button } from "antd";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

// =======
// navigation switches between tabs in header

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">MOVING-EXPRESS</Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
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
