import React, { useState } from 'react';
// import React from 'react';
// Here we are importing a CSS file as a dependency
import './styles/Header.css';
import Navigation from './Navigation';
import Resume from './pages/Resume';
import Signup from './pages/Signup';
import Portfolio from './pages/Portfolio';
import Login from './pages/Login';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'About') {
      return <Signup />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Login />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='bigHeader'>
      <h1>Two men and a horse moving company</h1>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
