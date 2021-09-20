import React, {useState, useEffect} from 'react'
import {Link } from 'react-router-dom';
import styles from "./Result.module.scss"

interface Props {
  login: string,
  quessed: number;
  goodUnmarked: number;
  wrongGuess: string[];
  setLogin: (val: string) => void;
  setFinished: (val: boolean) => void;
}

const Result: React.FC<Props> = ({setFinished, login, quessed, goodUnmarked, wrongGuess, setLogin}) => {

  const [score, setScore] = useState(0)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const countScore = () : number => {
      const score = (quessed * 2) - (wrongGuess.length + goodUnmarked)
      setScore(score)
      return score
    }
    countScore()
  })

  useEffect(() => {
    const message = score <= 0 ? 'You should practice, ' : (score > 2 && score < 4) ? 'Not bad, ' : 'Congrats, '
    setMessage(message)
  }, [score])

  const resetLogin = () : void => {
    setLogin('')
    setFinished(false)
  }

  const formatPoints = () : string => {
    return score < 1 && score < -1 ? 'points' : 'point'
  }

  return (
    <div className={styles.resultWrapper}>
      <h1>{message} {login}!</h1>
      <h4>your score:</h4>
      <h2 className={styles.score}> {score} {formatPoints()}</h2>
      <Link to="/"><button className="gameButton" onClick={resetLogin}>Once again</button></Link>
    </div>
  )
}

export default Result
