import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import SelectVariants from "./StartScreen/SelectVariants";
import SelectTime from "./StartScreen/SelectTime";
import SelectMistakes from "./StartScreen/SelectMistakes";
import SelectMode from "./StartScreen/SelectMode";
import { AppContext } from "../../contexts/AppContext";

const StartScreen = () => {
  const { handleStartStop } = useContext(GameContext);
  const { windowHeight } = useContext(AppContext);
  return (
    <div className="main-game__wrapper">
      <div className="main-game__settings-box">
        <div className="main-game__settings-box__title">Ustawienia</div>
        {/* <div className="main-game__settings-box__mode">
          Wybierz tryb: własny, łatwy, średni, trudny, ekstremalny
        </div> */}
        <SelectMode />
        <SelectVariants />
        <SelectTime />
        <SelectMistakes />
        {/* <div className="main-game__settings-box__continents">Kontynenty</div> */}
      </div>
      <button
        className="main-game__start-button"
        onClick={() => handleStartStop(true)}
      >
        Rozpocznij
      </button>
      {windowHeight < 831 && (
        <button className="main-game__back-button">powrót</button>
      )}
    </div>
  );
};

export default StartScreen;
