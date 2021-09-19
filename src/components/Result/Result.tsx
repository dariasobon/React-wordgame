import React, {useState, useEffect} from 'react'
import {Link } from 'react-router-dom';
import styles from "./Result.module.scss"

interface Props {
  login: string,
  quessed: number;
  goodUnmarked: number;
  wrongGuess: number;
}

const Result: React.FC<Props> = ({login, quessed, goodUnmarked, wrongGuess}) => {

  const [score, setScore] = useState(0)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const countScore = () : number => {
      const score = (quessed * 2) - (wrongGuess + goodUnmarked)
      setScore(score)
      return score
    }
    countScore()
  }, [score])

  useEffect(() => {
    const message = score <= 0 ? 'You should pracice, ' : (score > 2 && score < 4) ? 'Not bad, ' : 'Congrats, '
    setMessage(message)
  }, [score])

 

  const formatPoints = () => {
    return score < 1 && score < -1 ? 'points' : 'point'
  }
  return (
    <div className={styles.resultWrapper}>
      <h1>{message} {login}!</h1>
      <h4>your score:</h4>
      <h2 className={styles.score}> {score} {formatPoints()}</h2>
    </div>
  )
}

export default Result
