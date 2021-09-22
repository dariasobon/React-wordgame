import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';
import getWords from '../../types/wordGameData';
import { AppContext } from '../../providers/AppProvider';

const Login: React.FC = () => {
  const { handleNickName, login, setWordSet } = useContext(AppContext);

  const fetchData = async (): Promise<void> => {
    const response = await getWords();
    setWordSet(response);
  };
  return (
    <div className={styles.loginContainer}>
      <h1> Wordcloud game</h1>
      <form className={styles.gameForm}>
        <input className={styles.nickInput} placeholder='Enter your nickname here...' value={login} onChange={handleNickName} />
        <Link to='/game'>
          <button disabled={login === ''} onClick={fetchData} type='submit' className='gameButton'>
            game
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
