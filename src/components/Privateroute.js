import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const Privateroute=({component:Comp,loggedin,...rest})=>
{
 return <Route {...rest} render={(props)=>loggedin==true?<Comp {...props}/>:<Redirect to="/signin"/>} />
}


export default Privateroute