import React from 'react'
import {Route , Redirect} from 'react-router-dom'

const Privateroute=({component:Component,loggedin})=>{


return <Route 
        render={(props)=> loggedin ==true 
        ? <Component {...props}/>
        :<Redirect to='/login'/>
        }
/>


}

export default Privateroute