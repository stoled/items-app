import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';

class App extends Component {
  render() {
    return ( 
      <Router>
        <Route exact path = "/" component = { Home }/>
        <Route path = "/about" component = { About }/>
        <Route path = "/catalog" component = { Catalog }/>
      </Router>
    );
  }
}

export default App;
