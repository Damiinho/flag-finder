import { createContext, useContext, useState } from "react";
import { AppContext } from "./AppContext";

export const FlagDetailContext = createContext();

export const FlagDetailProvider = ({ children }) => {
  const { selectedSmallOne } = useContext(AppContext);
  const [openStreetMapLink, setOpenStreetMapLink] = useState("");
  const [wikipediaData, setWikipediaData] = useState(null);
  const [officialName, setOfficialName] = useState("");
  const [UNMember, setUNMember] = useState(false);
  const [landlocked, setLandlocked] = useState(false);
  const [area, setArea] = useState(0);
  const [borders, setBorders] = useState([]);
  const [population, setPopulation] = useState(0);
  const [carSide, setCarSide] = useState("");
  const [currencies, setCurrencies] = useState("");
  const [tld, setTld] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [time, setTime] = useState("");
  const [moreInfoShow, setMoreInfoShow] = useState(false);
  let region = "";
  if (selectedSmallOne) {
    if (selectedSmallOne.regions[0] === "europe") {
      region = "Europa";
    } else if (selectedSmallOne.regions[0] === "south-america") {
      region = "Ameryka Południowa";
    } else if (selectedSmallOne.regions[0] === "north-america") {
      region = "Ameryka Północna";
    } else if (selectedSmallOne.regions[0] === "asia") {
      region = "Azja";
    } else if (selectedSmallOne.regions[0] === "africa") {
      region = "Afryka";
    } else if (selectedSmallOne.regions[0] === "oceania") {
      region = "Australia/Oceania";
    } else if (selectedSmallOne.regions[0] === "carraibean") {
      region = "Karaiby";
    } else if (selectedSmallOne.regions[0] === "antarctica") {
      region = "Antarktyka";
    }
  }

  const providerValue = {
    openStreetMapLink,
    setOpenStreetMapLink,
    wikipediaData,
    setWikipediaData,
    officialName,
    setOfficialName,
    UNMember,
    setUNMember,
    landlocked,
    setLandlocked,
    area,
    setArea,
    borders,
    setBorders,
    population,
    setPopulation,
    carSide,
    setCarSide,
    currencies,
    setCurrencies,
    tld,
    setTld,
    lat,
    setLat,
    lng,
    setLng,
    time,
    setTime,
    moreInfoShow,
    setMoreInfoShow,
    region,
  };

  return (
    <FlagDetailContext.Provider value={providerValue}>
      {children}
    </FlagDetailContext.Provider>
  );
};

export default FlagDetailProvider;
