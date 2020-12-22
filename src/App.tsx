import React, { lazy, Suspense } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

// import Minesweeper from './pages/Minesweeper'
import MainPage from './pages/MainPage'
// import Score from './pages/Score'
import Settings from './components/settings/Settings'
import { Wrapper } from './App.css'
import Loading from './components/Loading'

const Minesweeper = lazy(() => import('./pages/Minesweeper'));
const Score = lazy(() => import('./pages/Score'))

const App = () => {

  return (
    <Suspense fallback={<Loading />}>
      <Wrapper>
        <Settings />
        <HashRouter>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/game' component={Minesweeper} />
            <Route exact path='/score' component={Score} />
          </Switch>
        </HashRouter>
      </Wrapper>
    </Suspense>
  );
}

export default App;
