import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import GameIMG from "../../img/game.svg";
import miniFlagIMG from "../../img/miniFlag.svg";
import capitolIMG from "../../img/capitol-building.svg";

const SelectGame = () => {
  const { setIsGame } = useContext(AppContext);
  const [buttonActive, setButtonActive] = useState(false);

  const handleActive = () => {
    setButtonActive(!buttonActive);
  };
  const handleClick = () => {
    setIsGame(true);
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
            onClick={handleClick}
          >
            <img src={miniFlagIMG} alt="flaga" />
            flagi
          </button>
          <button
            className="selectors__game__button-box-button"
            onClick={handleClick}
          >
            <img src={capitolIMG} alt="flaga" />
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
