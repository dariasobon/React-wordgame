import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';
import getWords from '../../types/wordGameData';
import WordSet from '../../types/wordSet';

interface Props {
  handleNickName: React.ChangeEventHandler<HTMLInputElement>;
  login: string;
  setWordSet: (value: WordSet) => void;
}

const Login: React.FC<Props> = ({ login, handleNickName, setWordSet }) => {
  
    const fetchData = async() : Promise<void>=> {
      const response = await getWords();
      setWordSet(response);
    }
  return (
    <div className={styles.loginContainer}>
      <h1> Wordcloud game</h1>
      <form className={styles.gameForm}>
        <input className={styles.nickInput} placeholder='Enter your nickname here...' value={login} onChange={handleNickName} />
        <Link to='/game'>
          <button disabled={login=== ''} onClick={fetchData} type='submit' className='gameButton'>
            game
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
