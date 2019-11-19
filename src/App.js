import React, {Component} from 'react';
import {Router} from '@reach/router'
import './App.css';
import Profile from './pages/profile';
import Pokemon from './pages/pokemon';
import Login from './pages/login';
import Home from './pages/home';
import NotFound from './pages/notfound';

class App extends Component {
  render(){
  return(
      <>
        <Router>
          <Home path="/" />
          <Login path="/login"/>
          <Profile path="/users/:username"/>
          <Pokemon path="/pokemons/:name"/>
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
