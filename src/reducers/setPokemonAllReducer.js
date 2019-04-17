import * as actionTypes from '../actions/actionTypes';
export default (state={},action)=>{
//    console.log('reducer called',action)
    switch(action.type){
        case actionTypes.SET_POKEMON_LIST:
            return{
                ...state,pokemonList:action.payload
            }
            
        default:
            return state;
    }
};