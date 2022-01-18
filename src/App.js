import React from 'react';
// import Navbar from './components/Navbar';
import Header from './components/Header';
//import Card from './components/Card';
import Footer from './components/Footer';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
// I can place <Navbar /> and  <Card /> inside that <div> in return below but they are deleted for npw
function App() {
  return (
    <>
    <div>
      <Header /> 
      
    </div>
    <Footer />
    </>
  );
}

export default App;
