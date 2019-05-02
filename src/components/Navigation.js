import React from "react";
import { NavLink } from 'react-router-dom'
const Navigation=()=>{

    return (
 <div>    

<NavLink exact to="/" activeStyle={{color:'green'}}>Home</NavLink>
<NavLink to="/about"activeStyle={{color:'green'}}>About</NavLink>
<NavLink to="/Contact"activeStyle={{color:'green'}}>Contact</NavLink>
</div>  
    )
}

export default Navigation;