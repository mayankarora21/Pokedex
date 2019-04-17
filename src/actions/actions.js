import * as actionTypes from './actionTypes';
//import store from '../store/store';

export function setPokemonList(){  //action creator
//    console.log('setpokemon listall')
    const pokemonList=fetch('https://pokeapi.co/api/v2/pokemon?limit=200').then(response=>response.json())
            .then(data=>{
//            console.log(data);
                return data
        });
//    promiseMiddleware is working here
    
//    fetch('https://pokeapi.co/api/v2/pokemon?limit=20').then(response=>response.json())
//            .then(data=>{
////            console.log(data);
//            pokemonList=data;
//        });
    return{
        type:actionTypes.SET_POKEMON_LIST,
        payload:pokemonList
    }
}

export function handleSearchBoxChange(text){
//    console.log(event.target.value)
    return {
        type:actionTypes.SEARCH_BOX_CHANGE,
        payload:text
    }
}

export function setPokemonDetails(pokemonID){
//    console.log('set pokemon details called',pokemonID)
    const pokemonDetails=fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`).then(response=>response.json())
        .then(details=>{
            return details
        });
//    console.log('details in action',pokemonDetails)
    return{
        type:actionTypes.SET_POKEMON_DETAILS,
        payload:pokemonDetails
    }
}