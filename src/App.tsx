import React, { useState } from 'react';
import './App.scss';
import Login from './components/Login/Login';
import Game from './components/Game/Game';
import Result from './components/Result/Result';
import 'bootstrap/dist/css/bootstrap.min.css';
import WordSet from './types/wordSet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  const [login, setLogin] = useState('');
  const [quessed, setQuessed] = useState(0);
  const [wrongGuess, setWrongGuess] = useState([] as string[]);
  const [goodUnmarked, setGoodUnmarked] = useState(0);
  const [finished, setFinished] = useState(false);
  const [wordSet, setWordSet] = useState({} as WordSet);

  const handleNickName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLogin(e.target.value);
  };

  return (
    <div className='App'>
      <Router>
        <div className='test'>
          <Switch>
            <Route path='/' exact render={() =>
              <Login
                setWordSet={setWordSet}
                login={login}
                handleNickName={handleNickName}
                />}
              />
            <Route
              path='/game'
              exact
              component={() => (
                <Game
                  finished={finished}
                  setFinished={setFinished}
                  setGoodUnmarked={setGoodUnmarked}
                  setWrongGuess={setWrongGuess}
                  wrongGuess={wrongGuess}
                  setQuessed={setQuessed}
                  wordSet={wordSet}
                />
              )}
            />
            <Route
              path='/result'
              exact
              component={() => (
                <Result 
                  setFinished={setFinished}
                  setLogin={setLogin}
                  goodUnmarked={goodUnmarked}
                  wrongGuess={wrongGuess}
                  quessed={quessed}
                  login={login}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
