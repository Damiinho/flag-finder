import { useContext, useEffect } from "react";
import { GameContext } from "../../contexts/GameContext";
import SelectVariants from "./StartScreen/SelectVariants";
import SelectTime from "./StartScreen/SelectTime";
import SelectMistakes from "./StartScreen/SelectMistakes";
import SelectMode from "./StartScreen/SelectMode";
import { AppContext } from "../../contexts/AppContext";
import SelectRegions from "./StartScreen/SelectRegions";
import SelectFormat from "./StartScreen/SelectFormat";

const StartScreen = () => {
  const {
    handleStartStop,
    currentGameItemList,
    wrongStart,
    settingsVariants,
    settingsFormat,
    startPossibility,
    setStartPossibility,
  } = useContext(GameContext);
  const { isGame, setIsGame } = useContext(AppContext);

  const handleBackClick = () => {
    setIsGame(false);
  };

  useEffect(() => {
    if (currentGameItemList.length > 0) {
      if (
        !(currentGameItemList.length < settingsVariants) ||
        settingsVariants === 7
      ) {
        if (
          settingsFormat.value === "countryToFlag" &&
          settingsVariants === 7
        ) {
          setStartPossibility(false);
        }
        setStartPossibility(true);
      } else setStartPossibility(false);
    } else setStartPossibility(false);
  }, [
    currentGameItemList,
    setStartPossibility,
    settingsVariants,
    settingsFormat,
  ]);

  return (
    <div className="main-game__wrapper">
      <div className="main-game__settings-box">
        <div className="main-game__settings-box__title">
          Ustawienia (
          {isGame === "flag"
            ? "flag:"
            : isGame === "capital"
            ? "stolic:"
            : "elementów:"}{" "}
          {currentGameItemList.length})
        </div>
        <SelectMode />
        <SelectFormat />
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
          startPossibility ? "" : "banned"
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
