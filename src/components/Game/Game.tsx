import React, { useEffect, useState } from 'react';
import WordSet from '../../types/wordSet';
import getWords from '../../types/wordGameData';
import styles from './Game.module.scss';

interface Props {
  finished: boolean
  
}

const Game: React.FC<Props> = ({finished}) => {
  const [wordSet, setWordSet] = useState({} as WordSet);
  const [classItems, setClassItems] = useState([] as any)
  const [selected, setSelected] = useState<string[]>([]);


  const selectItem = (word: string, index: number) => {
    
        const button = (document.getElementById(index.toString()) as HTMLInputElement).value;
        console.log(button, 'button')
        if (!classItems.includes(index)) {
          setClassItems([...classItems,  index])
        } else {
          setClassItems([...classItems.filter((item:number)=> item !== index) ])
        }
        const hey = selected.includes(word)
          ? selected.filter((wordd) => {
              return wordd !== word;
            })
          : [...selected, word];
        setSelected([...hey]);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await getWords();
      setWordSet(response);
      // setRandom(Math.floor(Math.random() * response.length));
      console.log(wordSet);
    }
    fetchData();
  }, []);
  return (
    <div className={styles.gameWrapper}>
      <h1>{wordSet.question}</h1>
      <div className={styles.test}>
        {wordSet && wordSet.all_words.map((word, index)=> {
          console.log(word, 'word')
        })}
        {/* {wordSet && wordSet.all_words.map((word: string, index: number) => {
          console.log(wordSet, 'wordSet')
          // const checkedByUser = classItems.includes(index) ? `${styles.active}` : '';
          // return (
          //   <button
          //     disabled={finished}
          //     value={word}
          //     id={index.toString()}
          //     className={`${styles.wordButton} ${checkedByUser}`}
          //     onClick={() => selectItem(word, index)}
          //     key={index}>
          //     {word}
          //   </button>
          // );
        })} */}
      </div>
    </div>
  );
};

export default Game;

// import React, { useEffect, useState } from 'react';
// import getWords from '../../types/wordGameData';
// import WordSet from '../../types/wordSet';
// import { Link } from 'react-router-dom';
// import styles from './Game.module.scss'
// import shuffleAnswers from '../../helpers/shuffleArray'

// interface Props {
//   login: string;
//   quessed: number;
//   setQuessed: (val: number) => void;
//   setGoodUnmarked: any;
//   setWrongGuess: any;
//   finished: boolean;
//   setFinished: (val: boolean) => void
// }

// const Game: React.FC<Props> = ({login, quessed, setQuessed, setGoodUnmarked, setWrongGuess, finished, setFinished }) => {
//   const [wordCloud, setWourdCloud] = useState<WordSet[]>([]);
//   const [random, setRandom] = useState(0);
//   const [selected, setSelected] = useState<string[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [wordSet, setWordSet] = useState({} as WordSet)
//   // const [finished, setFinished] = useState(false);

//   const [classItems, setClassItems] = useState([] as any)

//   const checkAnswers = (event: any) => {
//     setClassItems([])

//     const intersection = wordSet.good_words.filter((element: string) => selected.includes(element));
//     const goodUnmarkedAnswers = wordSet.good_words.filter((element: string) => !selected.includes(element))
//     const wrongGuessed = selected.filter((element: string) => !wordSet.good_words.includes(element))
//     setSelected(selected)
//     setFinished(true);
//     setWrongGuess(wrongGuessed.length)
//     setGoodUnmarked(goodUnmarkedAnswers.length)
//     setQuessed(intersection.length);
//   };

//   // const test = (button: string, index: number) => {
//   //   wordCloud[random].all_words.filter((word: string) => {
//   //     console.log(checked, 'setChecked')
//   //     console.log(word === button, 'word === button')
//   //     return word === button && setChecked(index)
//   //   })
//   // }

//   const selectItem = (word: string, index: number) => {

//     const button = (document.getElementById(index.toString()) as HTMLInputElement).value;
//     console.log(button, 'button')
//     if (!classItems.includes(index)) {
//       setClassItems([...classItems,  index])
//     } else {
//       setClassItems([...classItems.filter((item:number)=> item !== index) ])
//     }
//     const hey = selected.includes(word)
//       ? selected.filter((wordd) => {
//           return wordd !== word;
//         })
//       : [...selected, word];
//     setSelected([...hey]);

//   return (
//     <div>
//       {
//         wordSet && <h1>{wordSet.question}</h1>
//         {quessed}

//       }
//     </div>
//   )
// }
// }

//     // <div className={styles.gameWrapper}>
//     //   {wordSet && (
//     //     return (
//     //       // {Object.entries(wordSet)}
//     //       <h1>{wordSet.question}</h1>
//     //       <div>
//     //         {wordSet.all_words.map((word: string, index: number) => {
//     //           const checkedByUser = classItems.includes(index) ? `${styles.active}` : '';
//     //           // const button = (document.getElementById(index.toString()) as HTMLInputElement).value;
//     //           // console.log(but)
//     //           const goodClass = finished && wordCloud[random].all_words.filter(element => wordCloud[random].good_words.includes(element)) ? `${styles.good}` : ''
//     //           console.log(goodClass, 'goodClass')
//     //           // filter((element: string) => element.includes(element)).includes('test')
//     //           // console.log(goodClass, 'goodClass')

//     //           return (
//     //             <button disabled={finished} value={word} id={index.toString()} className={`${styles.wordButton} ${checkedByUser}`} onClick={() => selectItem(word, index)} key={index}>

//     //               {word}
//     //             </button>
//     //           );
//     //         })}
//     //       </div>
//     //     )
//     //   )}

//       /* {wordCloud &&
//         wordCloud.map((wordSet: WordSet, index: number) => {

//           return (
//             <div key={index} className={styles.test}>
//               <h1>{wordSet.question}</h1>
//               <div>
//                 {wordSet.all_words.map((word: string, index: number) => {
//                   const checkedByUser = classItems.includes(index) ? `${styles.active}` : '';
//                   // const button = (document.getElementById(index.toString()) as HTMLInputElement).value;
//                   // console.log(but)
//                   const goodClass = finished && wordCloud[random].all_words.filter(element => wordCloud[random].good_words.includes(element)) ? `${styles.good}` : ''
//                   console.log(goodClass, 'goodClass')
//                   // filter((element: string) => element.includes(element)).includes('test')
//                   // console.log(goodClass, 'goodClass')

//                   return (
//                     <button disabled={finished} value={word} id={index.toString()} className={`${styles.wordButton} ${checkedByUser}`} onClick={() => selectItem(word, index)} key={index}>

//                       {word}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         })} */
//   //       {
//   //         (finished ?
//   //         <Link to='/result'><button className="gameButton">finish game</button></Link>
//   //        : <button className="gameButton" onClick={checkAnswers}>check answer</button>)
//   //       }
//   //     {!finished && <h3>Your selection: {selected.join(', ')}</h3> }
//   //     {/* {(
//   //       <div className={styles.warningMessage}>
//   //         No data. Please run npx json-server --watch -p3001 data/db.json
//   //       </div>
//   //     )} */}
//   //   </div>
//   // );
// // };

// export default Game;
