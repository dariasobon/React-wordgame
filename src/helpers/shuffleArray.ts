import { WordSet } from "../types/wordSet";

const shuffleAnswers = (array: WordSet[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export default shuffleAnswers