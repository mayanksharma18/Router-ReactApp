import React from 'react';
import logo from './logo.svg';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './components/home'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Error from './components/Error'
function App() {
  return (
    <Router>
      <Navigation/>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route component={Error} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
