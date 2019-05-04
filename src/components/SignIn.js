import React from 'react';
import Component from 'react'


const users = [
    {
        inputUsername: "Mayank18",
        inputEmail: "mmayank.sharma18@gmail.com",
        inputPassword: "mayank@123"
    },
    // {
    //     inputUsername:"Dienigma",
    //     inputEmail:"mmayank.sharma18@gmail.com",
    //     inputPassword:"mayank@123"   
    // },
    // {
    //     inputUsername:"",
    //     inputEmail:"mmayank.sharma18@gmail.com",
    //     inputPassword:"mayank@123"   
    // },

]

class Signin extends React.Component {

    state = {
        inputEmail: "",
        inputPassword: ""
    }
    handleChange = (event) => {
        let key = event.target.id
        let value = event.target.value;
        this.setState({
            [key]: value

        })
    }
    handleLogin = (event) => {
        console.log(users)
        event.preventDefault()
        users.map((i)=>{
            if(i.inputEmail==this.state.inputEmail && i.inputPassword==this.state.inputPassword){
                alert("Credentials passed");
                this.props.click()
            }
            else{
                alert("Credentials do not match")
            }
        })
        // 
}

render() {
    return (
        <div class="text-center">
            <form class="form-signin" onSubmit={this.handleLogin} >
                <img class="mb-4" src="https://podunkmeetsparadise.files.wordpress.com/2016/12/bitmoji.png?w=538" alt="" width="100" height="100" />
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input onChange={this.handleChange} type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />

                <label for="inputPassword" class="sr-only">Password</label>
                <input onChange={this.handleChange} type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                <div class="checkbox mb-3">

                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>
                <p class="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
            </form>

        </div>

    )
}
}

export default Signin