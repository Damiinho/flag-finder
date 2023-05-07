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
  const [settingsMode, setSettingsMode] = useState(null);

  const [inputAnswer, setInputAnswer] = useState("");
  const gameFlagList = flags.filter((item) => item.country === true);
  const [currentGameFlagList, setCurrentGameFlagList] = useState([
    ...gameFlagList,
  ]);
  // const [currentGameFlagList, setCurrentGameFlagList] = useState([
  //   {
  //     id: 0,
  //     active: true,
  //     name: "Andora",
  //     colors: ["navyblue", "yellow", "red"],
  //     shapes: ["vertical", "emblem"],
  //     img: "./assets/ad.png",
  //     regions: ["europe"],
  //     verticalStripes: true,
  //     horizontalStripes: false,
  //     otherShapes: false,
  //     symbols: true,
  //     country: true,
  //   },
  // ]);
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
      const isCorrect = i === 0;
      return { name: gameFlagList[index].name, correct: isCorrect };
    });

    // ustaw stan komponentu
    setQuizList(newQuizList);
    setCurrentFlag({
      name: randomCurrentFlag.name,
      img: randomCurrentFlag.img,
    });
    setCurrentGameFlagList(
      currentGameFlagList.filter((flag) => flag.name !== randomCurrentFlag.name)
    );
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
      setInputAnswer("");
      if (score > bestScore) {
        setBestScore(score);
      }
    }
  };

  const polishCharsMap = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
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
    settingsMode,
    setSettingsMode,
    inputAnswer,
    setInputAnswer,
    polishCharsMap,
    currentGameFlagList,
    setCurrentGameFlagList,
  };

  return (
    <GameContext.Provider value={providerValue}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
