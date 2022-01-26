// import React, { useState } from "react";
// // import React from 'react';
// // Here we are importing a CSS file as a dependency
// import "./styles/Header.css";
// import Navigation from "./Nav";
// import Cart from "../components/Cart";
// import Signup from "../pages/Signup";
// import Portfolio from "../pages/Portfolio-notUsed";
// import Login from "../pages/Login";

// export default function PortfolioContainer() {
//   const [currentPage, setCurrentPage] = useState("Signup");

//   // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
//   const renderPage = () => {
//     if (currentPage === "Cart") {
//       return <Cart />;
//     }
//     if (currentPage === "Signup") {
//       return <Signup />;
//     }
//     if (currentPage === "Portfolio") {
//       return <Portfolio />;
//     }
//     return <Login />;
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div className="">
//       <h1>Two men and a horse moving company</h1>
//       {/* We are passing the currentPage from state and the function to update it */}
//       <Navigation
//         currentPage={currentPage}
//         handlePageChange={handlePageChange}
//       />
//       {/* Here we are calling the renderPage method which will return a component  */}
//       {renderPage()}
//     </div>
//   );
// }
