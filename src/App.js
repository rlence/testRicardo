import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import LayOut from './layout/index';
import Home from './pages/home/home.js'
import Player from './pages/player/player.js';

function App() {

  return (
    <BrowserRouter>
      <LayOut>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id"  component={Player} /> 
        </Switch>
      </LayOut>
    </BrowserRouter>

  );
}

export default App;
