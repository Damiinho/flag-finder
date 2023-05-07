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
  const [settingsVariants, setSettingsVariants] = useState(4);
  const [settingsTime, setSettingsTime] = useState(10);
  const [settingsMistakes, setSettingsMistakes] = useState(0);
  const [currentMistakes, setCurrentMistakes] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [timerRunning, setTimerRunning] = useState(true);
  const gameFlagList = flags.filter((item) => item.country === true);
  const generateQuizList = () => {
    const randomIndexes = [];
    while (randomIndexes.length < settingsVariants) {
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
    setCurrentMistakes(settingsMistakes);
    if (value) {
      generateQuizList();
      setLastScore(score);
      setScore(0);
      setTimerRunning(true);
      setCurrentTime(settingsTime);
      if (score > bestScore) {
        setBestScore(score);
      }
    }
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
    settingsVariants,
    settingsTime,
    setSettingsTime,
    setSettingsVariants,
    currentTime,
    setCurrentTime,
    timerRunning,
    setTimerRunning,
    settingsMistakes,
    setSettingsMistakes,
    currentMistakes,
    setCurrentMistakes,
  };

  return (
    <GameContext.Provider value={providerValue}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
