import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [flags, setFlags] = useState([]);
  const [regions, setRegions] = useState([]);
  const [isCountrySelected, setIsCountrySelected] = useState(false);
  const [selectedSmallOne, setSelectedSmallOne] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedShapes, setSelectedShapes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [isGame, setIsGame] = useState(false);
  const [isCapitalGame, setIsCapitalGame] = useState(false);
  const [isSelectors, setIsSelectors] = useState(false);

  const providerValue = {
    flags,
    setFlags,
    regions,
    setRegions,
    isCountrySelected,
    setIsCountrySelected,
    selectedSmallOne,
    setSelectedSmallOne,
    searchTerm,
    setSearchTerm,
    inputValue,
    setInputValue,
    windowWidth,
    setWindowWidth,
    windowHeight,
    setWindowHeight,
    selectedColors,
    setSelectedColors,
    selectedShapes,
    setSelectedShapes,
    isGame,
    setIsGame,
    isCapitalGame,
    setIsCapitalGame,
    isSelectors,
    setIsSelectors,
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
