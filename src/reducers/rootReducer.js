import {combineReducers} from 'redux';
import setPokemonAllReducer from './setPokemonAllReducer';
import handleSearchChangeReducer from './handleSearchChangeReducer'
import setPokemonDetailsReducer from './setPokemonDetailsReducer'
const rootReducer=combineReducers({
    setPokemonAllReducer,
    handleSearchChangeReducer,
    setPokemonDetailsReducer
});

export default rootReducer;