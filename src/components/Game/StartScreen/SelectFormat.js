import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { GameContext } from "../../../contexts/GameContext";

const SelectFormat = () => {
  const { isGame } = useContext(AppContext);
  const { setSettingsFormat } = useContext(GameContext);

  const handleButton = (item) => {
    setSettingsFormat(item);
  };

  return (
    <div className="main-game__settings-box__format">
      <div className="main-game__settings-box__format-title">
        <p>Wybierz format:</p>
      </div>
      <div className="main-game__settings-box__format-buttons">
        {isGame === "flag" ? (
          <>
            <button onClick={() => handleButton("countryToFlag")}>
              państwo -) flaga
            </button>
            <button onClick={() => handleButton("flagToCountry")}>
              flaga -) państwo
            </button>
          </>
        ) : isGame === "capital" ? (
          <>
            <button onClick={() => handleButton("flagToCapital")}>
              flaga -) stolica
            </button>
            <button onClick={() => handleButton("countryToCapital")}>
              państwo -) stolica
            </button>
            <button onClick={() => handleButton("capitalToCountry")}>
              stolica -) państwo
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SelectFormat;
