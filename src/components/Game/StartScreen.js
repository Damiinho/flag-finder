import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import SelectVariants from "./StartScreen/SelectVariants";
import SelectTime from "./StartScreen/SelectTime";
import SelectMistakes from "./StartScreen/SelectMistakes";
import SelectMode from "./StartScreen/SelectMode";
import { AppContext } from "../../contexts/AppContext";
import SelectRegions from "./StartScreen/SelectRegions";

const StartScreen = () => {
  const { handleStartStop, currentGameItemList, wrongStart, settingsVariants } =
    useContext(GameContext);
  const { setIsGame } = useContext(AppContext);

  const handleBackClick = () => {
    setIsGame(false);
  };
  return (
    <div className="main-game__wrapper">
      <div className="main-game__settings-box">
        <div className="main-game__settings-box__title">
          Ustawienia (flag: {currentGameItemList.length})
        </div>
        <SelectMode />
        <SelectRegions />
        <SelectVariants />
        <SelectTime />
        <SelectMistakes />
        {wrongStart ? (
          <div className="main-game__settings-box__wrong-info">
            {wrongStart === "zero"
              ? "Musisz wybrać co najmniej jedną flagę"
              : wrongStart === "tooFew"
              ? "Zmniejsz liczbę wariantów odpowiedzi"
              : ""}
          </div>
        ) : (
          ""
        )}
      </div>
      <button
        className={`main-game__start-button ${
          currentGameItemList.length > 0 &&
          (!(currentGameItemList.length < settingsVariants) ||
            settingsVariants === 7)
            ? ""
            : "banned"
        }`}
        onClick={() => handleStartStop(true)}
      >
        Rozpocznij
      </button>

      <button onClick={handleBackClick} className="main-game__back-button">
        powrót
      </button>
    </div>
  );
};

export default StartScreen;
