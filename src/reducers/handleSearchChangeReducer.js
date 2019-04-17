import * as actionTypes from '../actions/actionTypes';
export default (state={},action)=>{
    switch(action.type){
        case actionTypes.SEARCH_BOX_CHANGE:
//            console.log(action.payload)
            return{
                ...state,searchField:action.payload
            }
        default:
            return state;
    }
};