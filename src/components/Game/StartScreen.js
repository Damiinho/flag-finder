import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import SelectVariants from "./StartScreen/SelectVariants";
import SelectTime from "./StartScreen/SelectTime";
import SelectMistakes from "./StartScreen/SelectMistakes";

const StartScreen = () => {
  const { handleStartStop } = useContext(GameContext);
  return (
    <div className="main-game__wrapper">
      <button
        className="main-game__start-button"
        onClick={() => handleStartStop(true)}
      >
        Rozpocznij
      </button>

      <div className="main-game__settings-box">
        <div className="main-game__settings-box__title">Ustawienia</div>
        <div className="main-game__settings-box__mode">
          Wybierz tryb: własny, łatwy, średni, trudny, ekstremalny
        </div>

        <SelectVariants />
        <SelectTime />
        <div className="main-game__settings-box__continents">Kontynenty</div>

        <SelectMistakes />
      </div>
    </div>
  );
};

export default StartScreen;
