import React from 'react';
import {Route,Switch} from 'react-router-dom';


//components
import Home from '../Home/Home';
import PokemonList from '../PokemonList/PokemonList';
import PokemonDetails from '../PokemonDetails/PokemonDetails';

import AppBar from '../AppBar/AppBar';


class Routes extends React.Component{
    
    render(){
        return(
            <div>
                <AppBar></AppBar>
                <Switch>
                    <Route path={'/pokemonlist'} component={PokemonList} ></Route>
                    <Route path={'/pokemondetails/:id'} component={PokemonDetails}></Route>
                    <Route path={'/'} exact component={Home}></Route>
                    <Route render={()=><div>404 Page Not Found!!</div>}></Route>
                </Switch>
            </div>
        );
        
    }
}



export default Routes;