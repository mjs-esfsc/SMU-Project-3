import React from 'react';
import pickup from '../assets/pickup.png';
import tenLarge from '../assets/10Large.png';
import fifteenLarge from '../assets/14Large.png';
import twentyLarge from '../assets/20Large.png';
import twenty6Large from '../assets/26Large.png';
import horse from '../assets/horse.jpg';
import manual from '../assets/manualTruck.jpeg';
import Project from '../Project';
const projectData = [{name: 'horse and wagon $25/hour', description: 'This option fits amish community', imageData: <img src={horse} width={300} alt={"horse image"}/>, gitLink: <a href="https://github.com/umnovjp/everNegativeBudget/">GitHub Link</a> }, {name: 'push cart $5/hour', description: 'This option is for savers', imageData: <img src={manual} width={300} alt={"manual cart image"}/>, gitLink: <a href="https://github.com/umnovjp/everNegativeBudget/">GitHub Link</a> }, {name: 'Pickup Truck $50/hour', description: 'This option is for small local movers', imageData: <img src={pickup} width={300} alt={"pickup image"}/>, gitLink: <a href="https://github.com/umnovjp/everNegativeBudget/">GitHub Link</a> }, {name: '10ft truck $60/hour', description: 'This one is for 1 bedroom moves', imageData: <img src={tenLarge} width={300} alt={"ecommerce app image"}/>, gitLink: <a href="https://github.com/umnovjp/ORM">E-Commerce Back End Github</a> }, {name: '15 ft truck $70/hour', description: 'this one is for 2 bedrooms.', imageData: <img src={fifteenLarge} width={300} alt={"15 feet truck image"}/>, gitLink: <a href="https://github.com/umnovjp/FitnessXpress">Fitness Tracker Github</a>}, {name: '20 feet truck $80/hour', description: 'This one is good for a bigger house', imageData: <img src={twentyLarge} width={300} alt={"20 feet image"}/>, gitLink: <a className='listItem' href="https://github.com/umnovjp/Work_Day_Scheduler">Work Day Scheduler Github</a>}, {name: '26 feet truck $90/hour', description: 'This option is for a very big house', imageData: <img src={twenty6Large} width={300} alt={"large truck image"}/>, gitLink: <a href="https://github.com/umnovjp/everNegativeBudget/">GitHub Link</a> } ];

export default function Portfolio() {
  return (
    <div>
      <h1>Our Fleet</h1>
     {projectData.map(
       project => (
        <Project project={project} />
       )
     ) }
     
    </div>
   
  );
}
