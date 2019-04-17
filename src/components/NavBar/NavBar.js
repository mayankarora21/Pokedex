import React from 'react'
import AppBar from '../AppBar/AppBar';
import AppBarSlider from '../AppBarSlider/AppBarSlider';


const toggleSlider=()=>{
    return 
}
class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isSliderOpen:false
        }
    }
    
    toggleSlider=()=>{
        this.setState({isSliderOpen:!this.state.isSliderOpen});
    }
    render(){
        return(
            <div>
                <AppBar></AppBar>
                <AppBarSlider isSliderOpen={this.state.isSliderOpen}></AppBarSlider>
            </div>
        );
    }
    
}

export default NavBar;