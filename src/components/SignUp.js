import React from 'react';
import Component from 'react'

class Signup extends React.Component {

    state={
        inputUsername:"",
        inputEmail:"",
        inputPassword:""
     
    }
    handleChange=(event)=>{
      
       console.log(event.target.value)
       let key=event.target.id
        let value = event.target.value;
        this.setState({
         [key]:value
         
        })
    }
 
    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.click()
    }
    

    render() {
        return (
            <div class="text-center">
                <form class="form-signin" onSubmit={this.handleSubmit} >
                    <img class="mb-4" src="https://podunkmeetsparadise.files.wordpress.com/2016/12/bitmoji.png?w=538" alt="" width="100" height="100" />
                    <h1 class="h3 mb-3 font-weight-normal">Please sign up</h1>
                    <label for="inputUsername" class="sr-only">User name</label>
                    <input onChange={this.handleChange} type="text" id="inputUsername" class="form-control" placeholder="User name" required autofocus />
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input onChange={this.handleChange} type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                   
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input onChange={this.handleChange}type="password" id="inputPassword" class="form-control" placeholder="Password" required />
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