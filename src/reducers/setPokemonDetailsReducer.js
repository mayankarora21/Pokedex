import * as actionTypes from '../actions/actionTypes';

const setPokemonDetailsReducer=(state={},action)=>{
//    console.log('action',action)
    switch(action.type){
        case actionTypes.SET_POKEMON_DETAILS:
            return{
                ...state,pokemonDetails:action.payload
            }
        default:
            return state;
    }
}

export default setPokemonDetailsReducer;