import React, { useState, useContext } from 'react';
import './App.scss';
import Login from './components/Login/Login';
import Game from './components/Game/Game';
import Result from './components/Result/Result';
import 'bootstrap/dist/css/bootstrap.min.css';
import WordSet from './types/wordSet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppProvider from './providers/AppProvider';
import { AppContext } from './providers/AppProvider';

const App: React.FC = () => {
  const {
    login,
    setWordSet,
    handleNickName,
    finished,
    setFinished,
    setGoodUnmarked,
    setWrongGuess,
    wrongGuess,
    setQuessed,
    wordSet,
    setLogin,
    goodUnmarked,
    quessed,
  } = useContext(AppContext);
  

  return (
    
      <div className='App'>
        <Router>
          <div className='test'>
            <Switch>
            <AppProvider>
              <Route path='/' exact render={() => <Login />} />
              <Route
                path='/game'
                exact
                component={() => (
                  <Game />
                )}
              />
              <Route
                path='/result'
                exact
                component={() => (
                  <Result />
                )}
              />
              </AppProvider>
            </Switch>
          </div>
        </Router>
      </div>
    
  );
};

export default App;
