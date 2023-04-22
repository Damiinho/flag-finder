import React, { useContext } from "react";
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
      <p>regiony</p>
      <div className="region-buttons">
        <button
          className={`region europe ${region === "europe" ? "active" : ""}`}
          onClick={() => {
            setActiveRegion("europe");
          }}
        >
          <p>Europa</p>
        </button>
        <button
          className={`region asia ${region === "asia" ? "active" : ""}`}
          onClick={() => {
            setActiveRegion("asia");
          }}
        >
          <p>Azja</p>
        </button>
        <button
          className={`region oceania ${region === "oceania" ? "active" : ""}`}
          onClick={() => {
            setActiveRegion("oceania");
          }}
        >
          <p>Australia/Oceania</p>
        </button>
        <button
          className={`region africa ${region === "africa" ? "active" : ""}`}
          onClick={() => {
            setActiveRegion("africa");
          }}
        >
          <p>Afryka</p>
        </button>
        <button
          className={`region north-america ${
            region === "north-america" ? "active" : ""
          }`}
          onClick={() => {
            setActiveRegion("north-america");
          }}
        >
          <p>Ameryka Północna</p>
        </button>
        <button
          className={`region south-america ${
            region === "south-america" ? "active" : ""
          }`}
          onClick={() => {
            setActiveRegion("south-america");
          }}
        >
          <p>Ameryka Południowa</p>
        </button>

        <button
          className={`region carraibean ${
            region === "carraibean" ? "active" : ""
          }`}
          onClick={() => {
            setActiveRegion("carraibean");
          }}
        >
          <p>Karaiby</p>
        </button>
        <button
          className={`region antarctica ${
            region === "antarctica" ? "active" : ""
          }`}
          onClick={() => {
            setActiveRegion("antarctica");
          }}
        >
          <p>Antarktyka</p>
        </button>
      </div>
    </div>
  );
};

export default SelectRegion;
