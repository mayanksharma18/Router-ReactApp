import React from 'react';



const Users=({match})=>{

    return (
        <h2>Welcome{match.params.username}</h2>
    )
}

export default Users;