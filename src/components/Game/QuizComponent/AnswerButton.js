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

  return (
    <div className="quiz__answers-item" key={props.index}>
      <button
        className={`quiz__answers-item__button ${
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
        {isGame === "flag"
          ? props.item.name
          : isGame === "capital"
          ? props.item.capital.join(",")
          : ""}
      </button>
    </div>
  );
};

export default AnswerButton;
