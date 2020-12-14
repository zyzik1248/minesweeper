import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Minesweeper from './pages/Minesweeper'
import MainPage from './pages/MainPage'
import Score from './pages/Score';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/game' component={Minesweeper} />
          <Route exact path='/score' component={Score} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
