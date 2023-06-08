import { createContext, useContext, useState } from "react";
import { AppContext } from "./AppContext";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const { flags } = useContext(AppContext);
  const [start, setStart] = useState(false);
  const [quizList, setQuizList] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [lastScore, setLastScore] = useState(null);
  const [bestScore, setBestScore] = useState(0);
  const [settingsRegions, setSettingsRegions] = useState([]);
  const [settingsVariants, setSettingsVariants] = useState(4);
  const [settingsTime, setSettingsTime] = useState(10);
  const [settingsMistakes, setSettingsMistakes] = useState(2);
  const [currentMistakes, setCurrentMistakes] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [timerRunning, setTimerRunning] = useState(true);
  const [settingsMode, setSettingsMode] = useState(null);
  const [correctFlag, setCorrectFlag] = useState(null);
  const gameFlagList = flags.filter((item) => item.country === true);
  const [currentGameFlagList, setCurrentGameFlagList] = useState([
    ...gameFlagList,
  ]);
  const [currentFlagCounter, setCurrentFlagCounter] = useState(
    gameFlagList.length
  );
  const [isEmpty, setIsEmpty] = useState(false);

  const [inputAnswer, setInputAnswer] = useState("");

  const generateQuizList = () => {
    const randomIndexes = [];
    const availableIndexes = [];

    // dodaj wszystkie indeksy do listy dostępnych indeksów
    for (let i = 0; i < gameFlagList.length; i++) {
      availableIndexes.push(i);
    }

    // wylosuj indeks dla poprawnej flagi
    const randomCurrentIndex = Math.floor(
      Math.random() * currentGameFlagList.length
    );
    const randomCurrentFlag = currentGameFlagList[randomCurrentIndex];
    randomIndexes.push(
      gameFlagList.findIndex((flag) => flag.name === randomCurrentFlag.name)
    );
    availableIndexes.splice(randomIndexes[0], 1); // usuń indeks wylosowanej poprawnej flagi z listy dostępnych indeksów

    // wylosuj pozostałe indeksy
    while (randomIndexes.length < settingsVariants) {
      const randomIndex = Math.floor(Math.random() * availableIndexes.length);
      randomIndexes.push(availableIndexes[randomIndex]);
      availableIndexes.splice(randomIndex, 1); // usuń indeks z listy dostępnych indeksów
    }

    // wymieszaj indeksy
    for (let i = randomIndexes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomIndexes[i], randomIndexes[j]] = [
        randomIndexes[j],
        randomIndexes[i],
      ];
    }

    // utwórz nową listę pytań
    const newQuizList = randomIndexes.map((index, i) => {
      return { name: gameFlagList[index].name };
    });

    // ustaw stan komponentu
    setQuizList(newQuizList);
    setCorrectFlag(randomCurrentFlag);
  };

  const handleStartStop = (value) => {
    setStart(value);
    setSelectedAnswer(null);
    setCurrentMistakes(settingsMistakes);
    if (!value) {
      setCurrentGameFlagList([...gameFlagList]);
    }
    if (value) {
      generateQuizList();
      setLastScore(score);
      setScore(0);
      setTimerRunning(true);
      setCurrentTime(settingsTime);
      setInputAnswer("");
      setIsEmpty(false);
      if (score > bestScore) {
        setBestScore(score);
      }
      setCurrentFlagCounter(gameFlagList.length);
    }
  };

  const polishCharsMap = {
    ą: "a",
    å: "a",
    ã: "a",
    ć: "c",
    ç: "c",
    ę: "e",
    é: "e",
    í: "i",
    ł: "l",
    ń: "n",
    ñ: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
    ʻ: "'",
  };

  const providerValue = {
    start,
    setStart,
    quizList,
    setQuizList,
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
    settingsMode,
    setSettingsMode,
    inputAnswer,
    setInputAnswer,
    polishCharsMap,
    currentGameFlagList,
    setCurrentGameFlagList,
    correctFlag,
    setCorrectFlag,
    isEmpty,
    setIsEmpty,
    currentFlagCounter,
    setCurrentFlagCounter,
    settingsRegions,
    setSettingsRegions,
  };

  return (
    <GameContext.Provider value={providerValue}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
