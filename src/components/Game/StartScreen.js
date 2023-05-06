import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import SelectVariants from "./StartScreen/SelectVariants";

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

        <div className="main-game__settings-box__continents">Kontynenty</div>
        <div className="main-game__settings-box__time">
          Czas: 3 sekundy 5 sekund, 10 sekund, brak
        </div>
        <div className="main-game__settings-box__wrong">
          Dopuszczalne błędy: 0, 1, 2, 3, 4, 5
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
