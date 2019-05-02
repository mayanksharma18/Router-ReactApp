import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
       <Route path="/" component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      </header>
    </div>
    </Router>
  );
}

export default App;
