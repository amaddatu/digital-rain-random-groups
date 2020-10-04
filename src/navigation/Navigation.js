import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/randomizer">Randomizer</NavLink></li>
       </ul>
    );
}
 
export default Navigation;