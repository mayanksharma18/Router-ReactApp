import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Courses from './components/Courses'
import Startlearning from './components/Startlearning'
import Navigation from './components/Navigation'
import Users from './components/Users';
import Signup from'./components/SignUp'
import Signin from './components/SignIn'
import Error from './components/Error'
import Privateroute from './components/Privateroute';

const Content=({match})=>{
 return <h2>{match.params.course}</h2>
 
}

class App extends React.Component {
state={
      loggedin:false
}
handleLogin=()=>{
    
  this.setState({
    loggedin:true
  })
  
}
registerhandleLogin=()=>{
    
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
            {/* <Privateroute loggedin={this.state.loggedin}  path='/courses' component={Courses}/> */}
            <Privateroute loggedin={this.state.loggedin} exact path='/startlearning' component={Startlearning}/>
            {/* <Privateroute loggedin={this.state.loggedin}   path='/about' component={About} /> */}
            {/* <Privateroute   loggedin={this.state.loggedin}       path='/contact' component={Contact} /> */}
            <Route exact path='/courses' component={Courses}/>
            <Route path="/anything" render={()=><h1>anything</h1>}/>
            <Route path="/users/:username" component={Users}/>
            <Route path='/signup'render={props=><Signup {...props} click={this.registerhandleLogin} />}/>
            <Route path='/signin' render={(props)=><Signin {...props} click={this.registerhandleLogin}/>}/>
            <Route  path="/courses/:course" component={Content }/>
            <Route component={Error} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}
}
export default App;
