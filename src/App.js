import React, { Component } from 'react';
import './App.css';

import {BrowserRouter} from 'react-router-dom';

import 'tachyons';

import Routes from './components/Routes/Routes';

//import CssBaseline from '@material-ui/core/Css';  //normalize css

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
              <Routes></Routes>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
