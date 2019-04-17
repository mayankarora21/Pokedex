import React from 'react';

import {connect} from 'react-redux';

import * as actions from '../../actions/actions';


class SearchBox extends React.Component{
    
    searchBoxChange=(event)=>{
        this.props.handleSearchBoxChange(event.target.value);
//        this.props.setPokemonListFiltered(event.target.value);
//        console.log(event.target.value)
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="Search Pokemon" className="pv3 ph4 ma3" onChange={this.searchBoxChange}></input>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
//    console.log('statess',state)
    return{
        searchField:state.handleSearchChangeReducer.searchField
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        handleSearchBoxChange:(event)=>{
            dispatch(actions.handleSearchBoxChange(event))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchBox);
