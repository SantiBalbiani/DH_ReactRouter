import React from 'react';
import {NavLink,  Link, Route, Switch } from 'react-router-dom';
import AboutHistory from './AboutHistory';
import News from './News';
import Something from './Something';
function About(){
    return(
        <React.Fragment>
        <h2>Hola soy el about</h2>
        <NavLink to="/about/history"> Our History</NavLink>
        <NavLink to="/about/news"> Our news</NavLink>
        <NavLink to="/about/something"> Our something</NavLink>
    <Switch>
        <Route path="/about/history" component={ AboutHistory } />
        <Route path="/about/news" component={ News } />
        <Route path="/about/something" component={ Something } />
    </Switch>

        </React.Fragment>
    )
}

export default About;