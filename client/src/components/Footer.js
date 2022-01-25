import React from 'react';
// Here we are importing a CSS file as a dependency
import './styles/Header.css';
import GitHubCat from './assets/GitHubCat.png'
import LinkedInLogo from './assets/LinkedIn_logo_initials.png'

function Footer() {
  return (
    <footer className="">
      {/* <a href="https://www.github.com/umnovjp"><img src={GitHubCat} alt="GitHub Logo" width="38.5" height="38.5" className = 'center'/></a> */}
      <p>martin's home address here protected by copyright</p>
    </footer>
  );
}

export default Footer;
