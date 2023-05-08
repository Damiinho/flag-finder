import { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext";

const AnswerButton = (props) => {
  const {
    selectedAnswer,
    correctFlag,
    setSelectedAnswer,
    setScore,
    score,
    currentTime,
    setTimerRunning,
    currentMistakes,
    setCurrentMistakes,
    setCurrentGameFlagList,
    currentGameFlagList,
    gameFlagList,
    setCurrentFlagCounter,
  } = useContext(GameContext);

  const handleAnswerClick = (value) => {
    if (currentTime !== 0) {
      if (!selectedAnswer) {
        setSelectedAnswer(value.name);

        if (value.name === correctFlag.name) {
          setScore(score + 1);
          setCurrentGameFlagList(
            currentGameFlagList.filter((flag) => flag.name !== correctFlag.name)
          );
          setCurrentFlagCounter(
            currentGameFlagList.filter((flag) => flag.name !== correctFlag.name)
              .length
          );
        } else {
          if (currentMistakes === 1) {
            setCurrentGameFlagList([...gameFlagList]);
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
          (selectedAnswer === correctFlag.name
            ? correctFlag.name === props.item.name
              ? "correct"
              : ""
            : correctFlag.name === props.item.name
            ? "correct"
            : selectedAnswer === props.item.name &&
              selectedAnswer !== correctFlag.name
            ? "incorrect"
            : "")
        }`}
        onClick={() => handleAnswerClick(props.item)}
      >
        {props.item.name}
      </button>
    </div>
  );
};

export default AnswerButton;
