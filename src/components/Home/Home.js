import React from 'react';
import './Home.css';

import {Link } from 'react-router-dom';

const Home=()=>{
    return(
        <div className="pokemonBackground white">
            <h1 className="noMargin">Welcome to Pokedex</h1>
            <br></br>
            <br></br>
            <p>This app lets you find information about each pokemon. This app uses a free api POKEAPI to fetch the details of various pokemons.</p>
            <br></br>
            <br></br>
            <Link to="/PokemonList" className="yellow">Click Here</Link> to explore out all pokemons
            
        </div>
    )
}

export default Home;