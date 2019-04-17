import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import {Link} from 'react-router-dom';

const styles = {
      root: {
        flexGrow: 1,
      },
      grow: {
        flexGrow: 1,
      },
      menuButton: {
        marginLeft: -12,
        marginRight: 20,
      },
    redBackground:{
        background:'#e53935'
    },
    blackBackground:{
        background:'#000000',
        color:'#FFFFFF'
    },
    drawerRoot:{
        background:'#000000',
//        width:'25%'
    },
    listItemWhite:{
        color:'white'
    }
  };

class ButtonAppBar extends React.Component{
    state={
        left:false
    }

    toggleDrawer = (side, open) => () =>  {
        this.setState({
          [side]: open
        });
    };
  render(){
  
    const { classes } = this.props;
//    const style={
//        appbar:{
//            background:'red',
//        }
//    }
    const sideList = (
      <div className={classes.list}>
        <List >
          {['Home', 'Pokemon List'].map((text, index) => {
            if(index===0){
                return(
                    <Link to="/" key={text}>
                        <ListItem button >
                            <ListItemText primary={text} classes={{primary:classes.listItemWhite}}/>
                        </ListItem>
                    </Link>
                )                       
            }
            else{
                return(
                    <Link to="/pokemonlist" key={text}>
                        <ListItem button >
                            <ListItemText primary={text} classes={{primary:classes.listItemWhite}}/>
                        </ListItem>
                    </Link>
                )
            }
                
            })}
        </List>
        <Divider />
      </div>
    );
    const myTheme = createMuiTheme({
        palette: {
          primary: {
            main:"#e53935"
          }
          ,
          secondary: {
            main: "#000000"
          }
        }
        ,
        typography: {
          fontSize: 20,
          fontFamily: "Algerian"
        }
      });
      
  return (
      <div className=''>
          <MuiThemeProvider theme={myTheme}>
        <div className={`${classes.root} tl`}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                POKEDEX
                </Typography>
            </Toolbar>
          </AppBar>
          </div>
              </MuiThemeProvider>
          <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
              classes={{paper:classes.drawerRoot}}
          >
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
              >
                {sideList}
              </div>
        </Drawer>
      </div>
    );
  }
  
}

//onOpen removed

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);