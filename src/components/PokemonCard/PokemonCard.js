import React from 'react';
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';
//import Fab from '@material-ui/core/Fab';
//import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';

//const handleCompare=(ookemonID)=>{
//    const a=1;
//    console.log(a+1);
//}

class PokemonCard extends React.Component{
//    console.log(props.children[1])
    render(){
        const imageURL=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.children[1]+1}.png`;
        return(
                <div className="bg-red dib w-20 pa3 ba ba3 br3 ma2">
                    <p className="capitalizeFirstLetter">{this.props.name}</p><br></br><br></br>
                    <img src={imageURL} height="200px" alt="pokemonPic"></img><br></br><br></br>
                    <Link to={`/pokemondetails/${this.props.children[1]+1}`} style={{textDecoration:'none'}}><Button variant="contained" color='primary' onClick={()=>{this.props.clearSearchBox()}}>
                        Learn More
                    </Button>
                    </Link>
                </div>
        )
    }
}

//const mapStateToProps=(state)=>{
//    
//}
const mapDispatchToProps=(dispatch)=>{
    return{
        clearSearchBox:(text)=>{
            dispatch(actions.handleSearchBoxChange(''))
        }
    }
}
export default connect(null,mapDispatchToProps)(PokemonCard);