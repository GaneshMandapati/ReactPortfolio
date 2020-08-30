import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import education from './components/education'
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render(){
    return (
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/contact' component={Contact}></Route>
            <Route path='/resume' component={education}></Route>
            
          </Switch>          
        </div>
    );
  }
}

export default App;
