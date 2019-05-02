import React from 'react'


const Error=({location})=>{
    return <h2>Page not found <code>{location.pathname}</code></h2>
}
export default Error;