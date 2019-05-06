import React from "react";
import { NavLink } from 'react-router-dom'
const Navigation=()=>{

    return (
 <div>    
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<NavLink exact to="/" activeStyle={{color:'green'}}>Home</NavLink>
<NavLink  to="/courses"activeStyle={{color:'green'}}>Courses</NavLink>
<NavLink  to="/startlearning"activeStyle={{color:'green'}}>Startlearning</NavLink>
</nav>
</div>  
    )
}

export default Navigation;