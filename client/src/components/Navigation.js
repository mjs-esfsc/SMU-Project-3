import React from 'react';


function Navigation({ currentPage, handlePageChange }) {
    return (
      <span className="nav-tabs">
        <button className="nav-item">
          <a
            href="#cart"
            onClick={() => handlePageChange('Cart')}
            // This is a conditional (ternary) operator that checks to see if the current page is "cart"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Cart' ? 'nav-link active' : 'nav-link'}
          >
            Cart
          </a>
        </button>
        <button className="nav-item">
          <a
            href="#signup"
            onClick={() => handlePageChange('Signup')}
            // Check to see if the currentPage is `Signup`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'SignUp' ? 'nav-link active' : 'nav-link'}
          >
            Signup
          </a>
        </button>
        <button className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Fleet' ? 'nav-link active' : 'nav-link'}
          >
            Our Fleet
          </a>
        </button>
        <button className="nav-item">
          <a
            href="#login"
            onClick={() => handlePageChange('Login')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
          >
            Login
          </a>
        </button>
      </span>
    );
  }
  
  export default Navigation;
