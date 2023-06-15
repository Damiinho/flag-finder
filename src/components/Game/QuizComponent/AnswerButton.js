import { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext";
import { AppContext } from "../../../contexts/AppContext";

const AnswerButton = (props) => {
  const {
    selectedAnswer,
    correctAnswer,
    setSelectedAnswer,
    setScore,
    score,
    currentTime,
    setTimerRunning,
    currentMistakes,
    setCurrentMistakes,
    setCurrentGameItemList,
    currentGameItemList,
    gameItemList,
    setCurrentItemCounter,
    settingsFormat,
  } = useContext(GameContext);
  const { isGame } = useContext(AppContext);

  const handleAnswerClick = (value) => {
    if (currentTime !== 0) {
      if (!selectedAnswer) {
        setSelectedAnswer(value.name);

        if (value.name === correctAnswer.name) {
          setScore(score + 1);
          setCurrentGameItemList(
            currentGameItemList.filter(
              (flag) => flag.name !== correctAnswer.name
            )
          );
          setCurrentItemCounter(
            currentGameItemList.filter(
              (flag) => flag.name !== correctAnswer.name
            ).length
          );
        } else {
          if (currentMistakes === 1) {
            setCurrentGameItemList([...gameItemList]);
          }
          setCurrentMistakes(currentMistakes - 1);
        }
      }
      setTimerRunning(false);
    }
  };

  const answerContent = () => {
    if (isGame === "flag") {
      if (settingsFormat.value === "flagToCountry") return props.item.name;
      if (settingsFormat.value === "countryToFlag")
        return (
          <img
            className="quiz__answers-item__button__img"
            src={props.item.img}
            alt="flag"
          />
        );
    } else if (isGame === "capital") {
      if (settingsFormat.value === "flagToCapital") {
        return props.item.capital.join(", ");
      }
      if (settingsFormat.value === "countryToCapital") {
        return props.item.capital.join(", ");
      }
      if (settingsFormat.value === "capitalToCountry") {
        return props.item.name;
      }
    } else return "błąd";
  };

  return (
    <div className={`quiz__answers-item`} key={props.index}>
      <button
        className={`quiz__answers-item__button ${
          settingsFormat.value === "countryToFlag" ? "countryToFlag" : ""
        } ${
          selectedAnswer &&
          (selectedAnswer === correctAnswer.name
            ? correctAnswer.name === props.item.name
              ? "correct"
              : ""
            : correctAnswer.name === props.item.name
            ? "correct"
            : selectedAnswer === props.item.name &&
              selectedAnswer !== correctAnswer.name
            ? "incorrect"
            : "")
        }`}
        onClick={() => handleAnswerClick(props.item)}
      >
        {answerContent()}
      </button>
    </div>
  );
};

export default AnswerButton;
