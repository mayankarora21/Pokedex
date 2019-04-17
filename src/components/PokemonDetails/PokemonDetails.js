import React from 'react';
import Loading from '../Loading/Loading';

import {connect} from 'react-redux';

import * as actions from '../../actions/actions';

import './PokemonDetails.css';

//import Grid from '@material-ui/core/Grid';



class PokemonDetails extends React.Component{
    componentWillMount(){
        const pokemonID=this.props.match.params.id;
//        console.log('props in component will mount',this.props);
        this.props.setPokemonDetails(pokemonID);
//        console.log('mounting')
    }
    render(){
//        console.log('props in render ',this.props)
//        console.log('pokemon details in render',this.props.pokemonDetails)
        const pokemonDetails=this.props.pokemonDetails;
        if(pokemonDetails){
            
//            const evolvesTo=pokemonDetails.;
            const pokemonID=this.props.match.params.id;
            const name=pokemonDetails.name;
            const baseExperience=pokemonDetails.base_experience;
            const types=pokemonDetails.types.map((type,i)=>{
                return type.type.name
            })
            
            const height=pokemonDetails.height/10;
            const weight=pokemonDetails.weight/10;
            const imageURL=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`;
            const stats=pokemonDetails.stats.map((stat,i)=>{
                return {
                    name:stat.stat.name,
                    baseStat:stat.base_stat
                }
            })
//            console.log(stats)
            const progressBarsStats=stats.map((stat,i)=>{
//                console.log(stat)
                return(
                        <div key={i} className="pa3 ma3">
                        {stat.name}
                                 <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: `${stat.baseStat}%`}} aria-valuenow={stat.baseStat} aria-valuemin="0" aria-valuemax="100">{stat.baseStat}%</div>
                                </div>
                        </div>
                    
                )
            })
            return(
                <div className="blackBackground pa2" >
                    <h2 className="noMargin capitalizeFirstLetter">{name}</h2><br/><br/>
                    <img src={imageURL} alt={`${name} pic`} height="250px"></img>
                    <p>Types: {types.map((type,i)=>(i!==types.length-1)?type+',':type)}</p>
                    <p>Base experience: {baseExperience}</p>
                    <p>Height: {height} meters</p>
                    <p>Weight: {weight} kilograms</p>
            
                    {progressBarsStats}
                </div>
            )
        }
        else
        return(
            <Loading/>
        )
    }
    
}

const mapStateToProps=(state)=>{
//    console.log('state in mapState to props in pokemon details',state)
    return{
        pokemonDetails:state.setPokemonDetailsReducer.pokemonDetails
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        setPokemonDetails:(pokemonID)=>{
            dispatch(actions.setPokemonDetails(pokemonID));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PokemonDetails);