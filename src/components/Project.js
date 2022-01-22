import React from 'react';
import handlePageChange from './Header';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case. Changing these styles will change styles in portfolio page
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
    width: 640,
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'lightyellow',
    padding: '0 20px',
    width: 600,
  },
  content: {
    padding: 20,
    width: 600,
  },
};


// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Project({project}) {
    const {name, description, imageData, gitLink} = project

  return (
    
<div style={styles.card} key={name}>
      <div style={styles.heading}>{
          name
      }</div>
       <div style={styles.content}>
        {description}
        
      </div>
      {/* {gitLink} */}
      {/* <a href="#cart" ><button className='toCart' >Add to cart</button></a> */}
      {gitLink}
      <br />
      {imageData}
      {/* <a href="https://github.com/umnovjp/everNegativeBudget/"><img src={imageData} alt="Budget Tracker Screenshot" width="350" /></a> */}

    </div>
      
    
  );
}

export default Project;
