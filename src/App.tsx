import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Minesweeper from './pages/Minesweeper'
import MainPage from './pages/MainPage'
import Score from './pages/Score'
import Settings from './components/settings/Settings'

const App = () => {

  return (
    <div>
      <Settings />
      <HashRouter>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/game' component={Minesweeper} />
          <Route exact path='/score' component={Score} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
