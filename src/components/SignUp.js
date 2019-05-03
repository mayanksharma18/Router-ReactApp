import React from 'react';
import Component from 'react'

class Signup extends React.Component {
    state={
        username:"",
        email:"",
        password:""
     
    }
    handleChange=(event)=>{
        let value=event.target.value
        this.setState({

        })
    }
 
    handleSubmit=()=>{
        this.props.click()
    }
    

    render() {
        return (
            <div class="text-center">
                <form class="form-signup" onSubmit={this.handleSubmit}>
                    <img class="mb-4" src="https://podunkmeetsparadise.files.wordpress.com/2016/12/bitmoji.png?w=538" alt="" width="100" height="100" />
                    <h1 class="h3 mb-3 font-weight-normal">Please sign up</h1>
                    <label for="inputUser" class="sr-only">User name</label>
                    <input type="text" id="username" class="form-control" placeholder="User name" required autofocus />
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input type="email" id="email" class="form-control" placeholder="Email address" required autofocus />
                   
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" id="password" class="form-control" placeholder="Password" required />
                    <div class="checkbox mb-3">
                      
                    </div>
                    <button  class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
                </form>

            </div>

        )
    }
}

export default Signup