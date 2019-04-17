import React from 'react';
import './PokemonList.css'
import PokemonCard from '../PokemonCard/PokemonCard';
import SearchBox from '../SearchBox/SearchBox';
import Loading from '../Loading/Loading';

import * as actions from '../../actions/actions'

import {connect} from 'react-redux';

//import Grid from '@material-ui/core/Grid';


class PokemonList extends React.Component{
    
    componentWillMount(){
//        total:964
//        console.log('mounting pokemon list')
        this.props.setPokemonList();
//        this.props.setPokemonListFiltered();
    }
//    componentWillUnmount(){
//        console.log('unmounting pokemon list')
//    }
    
    render(){
//        console.log('props',this.props);
//        console.log('filtered',this.props.pokemonListFiltered)
        if(this.props.pokemonList){
            const pokemonList=this.props.pokemonList.results;
//            console.log('searchfield',this.props.searchField)
            if(this.props.searchField)
            {
                const filteredPokemonList=pokemonList.filter((pokemon,i)=>{
//                    console.log('searchfield',this.props.searchFieldText)
                    if(pokemon.name.toLowerCase().includes(this.props.searchField.toLowerCase()))
                        return true;
                    else return false;
                })
                filteredPokemonList.forEach((pokemon,i)=>{
                    pokemonList.forEach((p,j)=>{
                        if(pokemon.name===p.name)
                        {
//                            console.log('mathced',j)
                            pokemon.id=j;
                        }
                    })
                })
//                console.log('filteredlist',filteredPokemonList)
                const PokemonCardArray=filteredPokemonList.map((pokemon,i)=>{
                    return(<PokemonCard name={pokemon.name} imageURL={pokemon.url} key={pokemon.id}> pokemonID={pokemon.id}</PokemonCard>)
                })
                return(
                    <div className='blackBackground'>
                        Pokelist<br></br>
                        <SearchBox/>
                        {PokemonCardArray}
                    </div>
                );
            }   
            else {
//                console.log('pokemon unfiltered list ',pokemonList)
                const PokemonCardArray=pokemonList.map((pokemon,i)=>{
                return(<PokemonCard name={pokemon.name} imageURL={pokemon.url} key={i}> pokemonID={i}</PokemonCard>)
                })
                return(
                    <div className='blackBackground'>
                        Pokelist<br></br>
                        <SearchBox/>
                        {PokemonCardArray}
                    </div>
                );
            }
            
        }
        else return <Loading/>;
        
    }
}

const mapStateToProps=(state)=>{ 
//    console.log('mapState to props',state)
    return{
       pokemonList:state.setPokemonAllReducer.pokemonList,
       searchField:state.handleSearchChangeReducer.searchField
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        setPokemonList:()=>{
            dispatch(actions.setPokemonList());
        },
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(PokemonList);