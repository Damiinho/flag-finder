import { createContext, useContext, useState } from "react";
import { AppContext } from "./AppContext";
import { useEffect } from "react";

export const CapitalGameContext = createContext();

export const CapitalGameProvider = ({ children }) => {
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
  const { flags } = useContext(AppContext);
  const [gameCapitalList, setGameCapitalList] = useState(
    flags.filter((item) => item.capital.length > 0)
  );

  const [start, setStart] = useState(false);
  const [quizList, setQuizList] = useState([]);
  const [correctCapital, setCorrectCapital] = useState(null);
  const [settingsRegions, setSettingsRegions] = useState([]);
  const [settingsVariants, setSettingsVariants] = useState(4);
  const [settingsDependentCapitals, setSettingsDependentCapitals] =
    useState(false);
  const [currentGameCapitalList, setCurrentGameCapitalList] = useState(
    flags.filter((item) => item.capital.length > 0)
  );

  useEffect(() => {
    let newCapitalList = [];

    if (settingsDependentCapitals) {
      newCapitalList = flags.filter((item) => item.capital.length > 0);
    } else {
      newCapitalList = flags
        .filter((item) => item.capital.length > 0)
        .filter((item) => item.country === true);
    }

    setGameCapitalList(newCapitalList);
    setCurrentGameCapitalList(newCapitalList);
  }, [flags, settingsDependentCapitals]);

  const generateQuizList = () => {
    const randomIndexes = [];
    const availableIndexes = [];

    // dodaj wszystkie indeksy do listy dostępnych indeksów
    for (let i = 0; i < gameCapitalList.length; i++) {
      availableIndexes.push(i);
    }

    // wylosuj indeks dla poprawnej flagi
    const randomCurrentIndex = Math.floor(
      Math.random() * currentGameCapitalList.length
    );
    const randomCurrentFlag = currentGameCapitalList[randomCurrentIndex];
    randomIndexes.push(
      gameCapitalList.findIndex((flag) => flag.name === randomCurrentFlag.name)
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
      return { name: gameCapitalList[index].name };
    });

    // ustaw stan komponentu
    setQuizList(newQuizList);
    setCorrectCapital(randomCurrentFlag);
  };

  const providerValue = {
    polishCharsMap,
    start,
    setStart,
    flags,
    gameCapitalList,
    setGameCapitalList,
    currentGameCapitalList,
    setCurrentGameCapitalList,
    settingsRegions,
    setSettingsRegions,
    settingsDependentCapitals,
    setSettingsDependentCapitals,
    quizList,
    setQuizList,
    correctCapital,
    setCorrectCapital,
    settingsVariants,
    setSettingsVariants,
    generateQuizList,
  };

  return (
    <CapitalGameContext.Provider value={providerValue}>
      {children}
    </CapitalGameContext.Provider>
  );
};

export default CapitalGameProvider;
