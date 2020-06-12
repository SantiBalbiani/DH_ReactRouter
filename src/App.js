import React from 'react';
import logo from './logo.svg';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import NaviBar from './NaviBar';
import About from './About';
import Perfiles from './Perfiles';
import Home from './Home';
import NotFinded from './NotFinded';

function App() {
  return (
    <div className="App">
       <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        < NaviBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/about" component={About} />
        <Route  path="/profiles" component={Perfiles} />
        <Route component={NotFinded} />  
        </Switch>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         React Router Example
        </a>
        </header>

    </div>
  
  );
}

export default App;
