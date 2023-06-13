import { createContext, useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const { flags, isGame } = useContext(AppContext);
  const [start, setStart] = useState(false);
  const [quizList, setQuizList] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [lastScore, setLastScore] = useState(null);
  const [bestScore, setBestScore] = useState(0);
  const [settingsFormat, setSettingsFormat] = useState("");
  const [settingsRegions, setSettingsRegions] = useState([]);
  const [settingsDependentItems, setSettingsDependentItems] = useState(false);
  const [settingsVariants, setSettingsVariants] = useState(4);
  const [settingsTime, setSettingsTime] = useState(10);
  const [settingsMistakes, setSettingsMistakes] = useState(2);
  const [currentMistakes, setCurrentMistakes] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [timerRunning, setTimerRunning] = useState(true);
  const [settingsMode, setSettingsMode] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [wrongStart, setWrongStart] = useState(false);
  const [gameItemList, setGameItemList] = useState(
    flags.filter((item) => item.country === true)
  );
  const [currentGameItemList, setCurrentGameItemList] = useState([
    ...gameItemList,
  ]);
  const [currentItemCounter, setCurrentItemCounter] = useState(
    gameItemList.length
  );
  const [isEmpty, setIsEmpty] = useState(false);

  const [inputAnswer, setInputAnswer] = useState("");

  const generateQuizList = () => {
    const randomIndexes = [];
    const availableIndexes = [];

    // dodaj wszystkie indeksy do listy dostępnych indeksów
    for (let i = 0; i < gameItemList.length; i++) {
      availableIndexes.push(i);
    }

    // wylosuj indeks dla poprawnej flagi
    const randomCurrentIndex = Math.floor(
      Math.random() * currentGameItemList.length
    );
    const randomCurrentItem = currentGameItemList[randomCurrentIndex];
    randomIndexes.push(
      gameItemList.findIndex((flag) => flag.name === randomCurrentItem.name)
    );
    availableIndexes.splice(randomIndexes[0], 1); // usuń indeks wylosowanej poprawnej flagi z listy dostępnych indeksów

    // sprawdź warunek dla settingsVariants
    if (settingsVariants !== 7) {
      // wylosuj pozostałe indeksy
      while (randomIndexes.length < settingsVariants) {
        const randomIndex = Math.floor(Math.random() * availableIndexes.length);
        randomIndexes.push(availableIndexes[randomIndex]);
        availableIndexes.splice(randomIndex, 1); // usuń indeks z listy dostępnych indeksów
      }
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
      return gameItemList[index];
    });

    // ustaw stan komponentu
    setQuizList(newQuizList);
    setCorrectAnswer(randomCurrentItem);
  };

  useEffect(() => {
    let newFlags = flags;
    if (isGame === "capital") {
      newFlags = newFlags.filter((item) => item.capital.length > 0);
    }
    if (settingsRegions.length === 0) {
      if (settingsDependentItems) {
        setGameItemList(newFlags);
        setCurrentGameItemList(newFlags);
        setCurrentItemCounter(newFlags.length);
      } else {
        setGameItemList(newFlags.filter((item) => item.country === true));
        setCurrentGameItemList(
          newFlags.filter((item) => item.country === true)
        );
        setCurrentItemCounter(
          newFlags.filter((item) => item.country === true).length
        );
      }
    } else {
      if (settingsRegions.length > 0) {
        let newFlags = flags;

        if (!settingsDependentItems) {
          newFlags = newFlags.filter((item) => item.country === true);
        }
        newFlags = newFlags.filter((item) =>
          settingsRegions.some((region) => item.regions.includes(region.value))
        );

        setGameItemList(newFlags);
        setCurrentGameItemList(newFlags);
        setCurrentItemCounter(newFlags.length);
      }
    }
  }, [settingsRegions, flags, settingsDependentItems, isGame]);

  const handleStartStop = (value) => {
    setStart(false);
    if (
      currentGameItemList.length > 0 &&
      !(currentGameItemList.length < settingsVariants)
    ) {
      setStart(value);
    }
    setSelectedAnswer(null);
    setCurrentMistakes(settingsMistakes);
    if (!value) {
      setCurrentGameItemList([...gameItemList]);
    }
    if (value) {
      if (
        currentGameItemList.length > 0 &&
        (!(currentGameItemList.length < settingsVariants) ||
          settingsVariants === 7)
      ) {
        setStart(value);
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
      } else {
        setWrongStart("zero");
        if (currentGameItemList.length > 0) {
          setWrongStart("tooFew");
        }

        setTimeout(() => {
          setWrongStart(false);
        }, 2000);
      }
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
    gameItemList,
    setGameItemList,
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
    currentGameItemList,
    setCurrentGameItemList,
    correctAnswer,
    setCorrectAnswer,
    isEmpty,
    setIsEmpty,
    currentItemCounter,
    setCurrentItemCounter,
    settingsRegions,
    setSettingsRegions,
    settingsFormat,
    setSettingsFormat,
    wrongStart,
    setWrongStart,
    settingsDependentItems,
    setSettingsDependentItems,
  };

  return (
    <GameContext.Provider value={providerValue}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
