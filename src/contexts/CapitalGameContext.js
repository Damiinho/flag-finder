import { createContext, useContext, useState } from "react";
import { AppContext } from "./AppContext";

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
    flags.filter((item) => item.country === true)
  );
  const [start, setStart] = useState(false);
  const [settingsRegions, setSettingsRegions] = useState([]);
  const [settingsDependentCapitals, setSettingsDependentCapitals] =
    useState(false);

  const providerValue = {
    polishCharsMap,
    start,
    setStart,
    flags,
    gameCapitalList,
    setGameCapitalList,
    settingsRegions,
    setSettingsRegions,
    settingsDependentCapitals,
    setSettingsDependentCapitals,
  };

  return (
    <CapitalGameContext.Provider value={providerValue}>
      {children}
    </CapitalGameContext.Provider>
  );
};

export default CapitalGameProvider;
