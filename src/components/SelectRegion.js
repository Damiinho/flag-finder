import React, { useContext } from "react";
import "../style/SelectRegion.css";
import { AppContext } from "../contexts/AppContext";

const SelectRegion = () => {
  const { region, setRegion } = useContext(AppContext);

  const setActiveRegion = (item) => {
    if (item === region) {
      setRegion("");
    } else setRegion(item);
  };

  return (
    <div className="region">
      <button
        className={`region europe ${region === "europe" ? "active" : ""}`}
        onClick={() => {
          setActiveRegion("europe");
        }}
      >
        Europa
      </button>
      <button
        className={`region asia ${region === "asia" ? "active" : ""}`}
        onClick={() => {
          setActiveRegion("asia");
        }}
      >
        Azja
      </button>
      <button
        className={`region oceania ${region === "oceania" ? "active" : ""}`}
        onClick={() => {
          setActiveRegion("oceania");
        }}
      >
        Australia/Oceania
      </button>
      <button
        className={`region north-america ${
          region === "north-america" ? "active" : ""
        }`}
        onClick={() => {
          setActiveRegion("north-america");
        }}
      >
        Ameryka Północna
      </button>
      <button
        className={`region south-america ${
          region === "south-america" ? "active" : ""
        }`}
        onClick={() => {
          setActiveRegion("south-america");
        }}
      >
        Ameryka Południowa
      </button>
      <button
        className={`region africa ${region === "africa" ? "active" : ""}`}
        onClick={() => {
          setActiveRegion("africa");
        }}
      >
        Afryka
      </button>
      <button
        className={`region carraibean ${
          region === "carraibean" ? "active" : ""
        }`}
        onClick={() => {
          setActiveRegion("carraibean");
        }}
      >
        Karaiby
      </button>
      <button
        className={`region antarctica ${
          region === "antarctica" ? "active" : ""
        }`}
        onClick={() => {
          setActiveRegion("antarctica");
        }}
      >
        Antarktyka
      </button>
    </div>
  );
};

export default SelectRegion;
