import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import GameIMG from "../../img/game.svg";
import miniFlagIMG from "../../img/miniFlag.svg";
import capitolIMG from "../../img/capitol-building.svg";

const SelectGame = () => {
  const { setIsGame, setIsCapitalGame } = useContext(AppContext);
  const [buttonActive, setButtonActive] = useState(false);

  const handleActive = () => {
    setButtonActive(!buttonActive);
  };
  const handleClick = (prop) => {
    if (prop === "flag") {
      setIsGame(true);
    }
    if (prop === "capital") {
      setIsCapitalGame(true);
    }
  };
  return (
    <div className={`selectors__game`}>
      <div
        className={`selectors__game-img ${buttonActive ? "active" : ""}`}
        onClick={handleActive}
      >
        <img src={GameIMG} alt="game" />
        {buttonActive ? "" : <p>gry</p>}
      </div>
      {buttonActive ? (
        <div className="selectors__game__button-box">
          <button
            className="selectors__game__button-box-button"
            onClick={() => handleClick("flag")}
          >
            <img src={miniFlagIMG} alt="flag" />
            flagi
          </button>
          <button
            className="selectors__game__button-box-button"
            onClick={() => handleClick("capital")}
          >
            <img src={capitolIMG} alt="capital" />
            stolice
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SelectGame;
