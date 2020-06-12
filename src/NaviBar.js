import React from 'react';
import { Link, Route } from 'react-router-dom';
const NaviBar = () => {
    return(
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
        <ul>
          <li>
          <Link to='/about'> About </Link></li>
          <li><Link to='/profiles'> Perfiles </Link> </li>
          <li> <Link to='/'> Inicio </Link> </li>
        </ul>
      </nav>
      </React.Fragment>
    )

}

export default NaviBar;