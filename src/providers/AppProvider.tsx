import React, { createContext, useState, useEffect } from 'react';
import WordSet from '../types/wordSet'
// import { ThemeProvider } from 'styled-components';
// import planetsData from '../assets/data.json';
// import GlobalStyles from '../globals/GlobalStyles';

export const AppContext = createContext({} as ContextType);

type ContextType = {
    login: string
    setLogin: (val: string) => void,
    quessed: number,
    setQuessed: (val: number) => void,
    wrongGuess: string[],
    setWrongGuess: (value: (string[] | [])) => void,
    goodUnmarked: number,
    setGoodUnmarked: (val: number) => void,
    finished: boolean,
    setFinished : (val: boolean) => void,
    wordSet: WordSet,
    setWordSet: (value: WordSet) => void,
    handleNickName: React.ChangeEventHandler<HTMLInputElement>;
}

const AppProvider: React.FC= ({ children}) => {
  // const [isMenuOpened, setIsMenuOpened] = useState(false);
  // const [currentPlanet, setCurrentPlanet] = useState(planetsData[0]);
  const [login, setLogin] = useState('');
  const [quessed, setQuessed] = useState(0);
  const [wrongGuess, setWrongGuess] = useState([] as string[]);
  const [goodUnmarked, setGoodUnmarked] = useState(0);
  const [finished, setFinished] = useState(false);
  const [wordSet, setWordSet] = useState({} as WordSet);
  const handleNickName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLogin(e.target.value);
  };

  const value: ContextType = {
    login,
    setLogin,
    quessed,
    setQuessed,
    wrongGuess,
    setWrongGuess,
    goodUnmarked,
    setGoodUnmarked,
    finished,
    setFinished,
    wordSet,
    setWordSet,
    handleNickName
  };
  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  );
};

export default AppProvider;