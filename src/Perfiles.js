import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import ElPerfil from './ElPerfil';
function Perfiles(){
    return(
        <React.Fragment>
        <h2>Hola soy el Perfil</h2>
        <ul>
        <li> <NavLink to="/profiles/perfil/1"> Perfil 1</NavLink></li>
        <li> <NavLink to="/profiles/perfil/2"> Perfil 2</NavLink></li>
        <li> <NavLink to="/profiles/perfil/3"> Perfil 3</NavLink></li>
    </ul>

    <Route path="/profiles/perfil/:id" component={ElPerfil} />
    </React.Fragment>
    )
}

export default Perfiles;