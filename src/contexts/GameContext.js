import { createContext, useContext, useState } from "react";
import { AppContext } from "./AppContext";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const { flags } = useContext(AppContext);
  const [start, setStart] = useState(false);
  const [quizList, setQuizList] = useState([]);
  const [currentFlag, setCurrentFlag] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [lastScore, setLastScore] = useState(null);
  const [bestScore, setBestScore] = useState(0);
  const gameFlagList = flags.filter((item) => item.country === true);
  const generateQuizList = () => {
    const randomIndexes = [];
    while (randomIndexes.length < 4) {
      const randomIndex = Math.floor(Math.random() * gameFlagList.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }

    const randomCurrentIndex = Math.floor(Math.random() * randomIndexes.length);
    const newQuizList = randomIndexes.map((index, i) => {
      const isCorrect = i === randomCurrentIndex;
      return { name: gameFlagList[index].name, correct: isCorrect };
    });

    setQuizList(newQuizList);
    const randomCurrentFlag = gameFlagList[randomIndexes[randomCurrentIndex]];
    setCurrentFlag({
      name: randomCurrentFlag.name,
      img: randomCurrentFlag.img,
    });
  };

  const handleStartStop = (value) => {
    setStart(value);
    setSelectedAnswer(null);
    if (value) {
      generateQuizList();
      setScore(0);
    }
  };
  const handleNext = () => {
    setSelectedAnswer(null);
    generateQuizList();
  };
  const handleRestart = () => {
    setSelectedAnswer(null);
    generateQuizList();
    setLastScore(score);
    if (score > bestScore) {
      setBestScore(score);
    }
    setScore(0);
  };

  const providerValue = {
    start,
    setStart,
    quizList,
    setQuizList,
    currentFlag,
    setCurrentFlag,
    selectedAnswer,
    setSelectedAnswer,
    score,
    setScore,
    lastScore,
    setLastScore,
    bestScore,
    setBestScore,
    gameFlagList,
    generateQuizList,
    handleStartStop,
    handleNext,
    handleRestart,
  };

  return (
    <GameContext.Provider value={providerValue}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
