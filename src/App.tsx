import React from 'react';
import './App.scss';
import Login from './components/Login/Login';
import Game from './components/Game/Game';
import Result from './components/Result/Result';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppProvider from './providers/AppProvider';

const App: React.FC = () => {

  return (
    
      <div className='App'>
        <Router>
          <div className='appWrapper'>
            <Switch>
            <AppProvider>
              <Route path='/' exact render={() => <Login />} />
              <Route path='/game' exact component={() => <Game />} />
              <Route path='/result' exact component={() => <Result />} />
            </AppProvider>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
