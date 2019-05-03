import React from 'react';
import logo from './logo.svg';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Users from './components/Users';
import Signup from'./components/SignUp'
import Signin from './components/SignIn'
import Error from './components/Error'
import Privateroute from './components/Privateroute';

class App extends React.Component {
state={
      loggedin:false
}
handleLogin=()=>{
    
  this.setState({
    loggedin:true
  })
  
}

  render(){
  return (
    <Router>
      <Navigation/>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" render={props=><Home {...props} click={this.handleLogin}/>} />
            <Privateroute loggedin={this.state.loggedin}   path='/about' component={About} />
            <Privateroute   loggedin={this.state.loggedin}       path='/contact' component={Contact} />
            <Route path="/anything" render={()=><h1>anything</h1>}/>
            <Route path="/users/:username" component={Users}/>
            <Route path='/signup'render={props=><Signup{...props} click={this.handleLogin} />}/>
            <Route component={Error} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}
}
export default App;
