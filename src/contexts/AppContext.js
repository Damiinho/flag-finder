import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [flags, setFlags] = useState([]);
  const [red, setRed] = useState(false);
  const [white, setWhite] = useState(false);
  const [black, setBlack] = useState(false);
  const [yellow, setYellow] = useState(false);
  const [blue, setBlue] = useState(false);
  const [navyBlue, setNavyBlue] = useState(false);
  const [green, setGreen] = useState(false);
  const [orange, setOrange] = useState(false);
  const [claret, setClaret] = useState(false);
  const [verticalStripes, setVerticalStripes] = useState(false);
  const [horizontalStripes, setHorizontalStripes] = useState(false);
  const [otherShapes, setOtherShapes] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [region, setRegion] = useState("");
  const [isCountrySelected, setIsCountrySelected] = useState(false);
  const [selectedSmallOne, setSelectedSmallOne] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [searchTerm, setSearchTerm] = useState("");
  // const [selectedColors, setSelectedColors] = useState([]);

  const providerValue = {
    flags,
    setFlags,
    red,
    setRed,
    claret,
    setClaret,
    white,
    setWhite,
    black,
    setBlack,
    yellow,
    setYellow,
    blue,
    setBlue,
    navyBlue,
    setNavyBlue,
    green,
    setGreen,
    orange,
    setOrange,
    verticalStripes,
    setVerticalStripes,
    horizontalStripes,
    setHorizontalStripes,
    otherShapes,
    setOtherShapes,
    symbols,
    setSymbols,
    region,
    setRegion,
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
    // selectedColors,
    // setSelectedColors,
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
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