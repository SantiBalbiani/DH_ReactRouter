// Este es el componente mas común, su ruta es la que se comparte con todos, así que el 
// componente route tiene que tener la prop exact.

import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import ElPerfil from './ElPerfil';
function Home(){
    return(
        <React.Fragment>
        <h2>Hola soy el Home</h2>


        </React.Fragment>
    )
}

export default Home;