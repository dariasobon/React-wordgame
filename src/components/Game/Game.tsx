import React, { useState, useContext } from 'react';
import styles from './Game.module.scss';
import { Link } from 'react-router-dom';
import { AppContext } from '../../providers/AppProvider';

const Game: React.FC = () => {
  const [classItems, setClassItems] = useState([] as any);
  const [selected, setSelected] = useState<string[]>([]);
  const { finished, setQuessed, setGoodUnmarked, setWrongGuess, setFinished, wordSet, wrongGuess } = useContext(AppContext);

  const selectItem = (word: string, index: number): void => {
    if (!classItems.includes(index)) {
      setClassItems([...classItems, index]);
    } else {
      setClassItems([...classItems.filter((item: number) => item !== index)]);
    }
    const newSelected = selected.includes(word)
      ? selected.filter((wordd) => {
          return wordd !== word;
        })
      : [...selected, word];
    setSelected([...newSelected]);
  };

  const checkAnswers = (): void => {
    setClassItems([]);
    const quessed = wordSet.good_words.filter((element: string) => selected.includes(element));
    const goodUnmarkedAnswers = wordSet.good_words.filter((element: string) => !selected.includes(element));
    const wrongGuessed = selected.filter((element: string) => !wordSet.good_words.includes(element));
    setSelected(selected);
    setFinished(true);
    setWrongGuess(wrongGuessed);
    setGoodUnmarked(goodUnmarkedAnswers.length);
    setQuessed(quessed.length);
  };

  return (
    <div className={styles.gameWrapper}>
      <h1>{wordSet.question}</h1>
      <div>
        {wordSet.all_words &&
          wordSet.all_words.map((word, index) => {
            const checkedByUser = classItems.includes(index) ? `${styles.active}` : '';
            const goodClass = finished && wordSet.good_words.includes(word) ? `${styles.good}` : '';
            const wrongClass = finished && wrongGuess.includes(word) ? `${styles.wrong}` : '';
            return (
              <button
                disabled={finished}
                value={word}
                id={index.toString()}
                className={`${styles.wordButton} ${checkedByUser} ${goodClass} ${wrongClass}`}
                onClick={() => selectItem(word, index)}
                key={index}>
                {word}
              </button>
            );
          })}
      </div>
      {finished ? (
        <Link to='/result'>
          <button className='gameButton'>finish game</button>
        </Link>
      ) : (
        <button className='gameButton' onClick={checkAnswers}>
          check answer
        </button>
      )}
      {!finished && <h3>Your selection: {selected.join(', ')}</h3>}
      {wordSet && !wordSet.all_words && <p>if no data please use npx json-server --watch -p3001 data/db.json</p>}
    </div>
  );
};

export default Game;
