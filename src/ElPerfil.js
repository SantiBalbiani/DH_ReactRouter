import React from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';

const users = [
    {id: 1, name:"juan"},
    {id: 2, name:"juana"},
    {id: 3, name:"juanb"}
]
// El unico parametro que recibe es props, pero en este ejemplo solo me traigo el objeto match
const ElPerfil = ( {match}) => {
// console.log(props.match)


let chosen = users.find( usr => usr.id === Number(match.params.id));
/* console.log('me pidieron el id ' + chosen.id)
console.log(chosen) */
if(chosen){
    return(
        <React.Fragment>
           
            <h2> Estas viendo el perfil de {chosen.name} </h2>
        </React.Fragment>
    )
}else{
    return( 
// Redirijo al about si no existe el perfil
        <Redirect to="/about" />

    )
}
}

export default ElPerfil;