import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';
import { withRouter, RouteComponentProps } from 'react-router';
import { createBrowserHistory as history } from 'history';
import { useHistory } from 'react-router-dom';

interface Props {
  handleNickName: React.ChangeEventHandler<HTMLInputElement>;
  login: string;
}

const Login: React.FC<Props> = ({ login, handleNickName }) => {
  return (
    <div className={styles.loginContainer}>
      <h1> Wordcloud game</h1>
      <form className={styles.gameForm}>
        <input className={styles.nickInput} placeholder='Enter your nickname here...' value={login} onChange={handleNickName} />
        <Link to='/game'>
          <button disabled={login=== ''} type='submit' className='gameButton'>
            game
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
