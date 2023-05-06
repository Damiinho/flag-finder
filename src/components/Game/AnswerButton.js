import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";

const AnswerButton = (props) => {
  const { selectedAnswer, currentFlag, setSelectedAnswer, setScore, score } =
    useContext(GameContext);

  const handleAnswerClick = (value) => {
    if (!selectedAnswer) {
      setSelectedAnswer(value.name);

      if (value.correct === true) {
        setScore(score + 1);
      }
    }
  };

  return (
    <div className="quiz__answers-item" key={props.index}>
      <button
        className={`quiz__answers-item__button ${
          selectedAnswer &&
          (selectedAnswer === currentFlag.name
            ? currentFlag.name === props.item.name
              ? "correct"
              : ""
            : currentFlag.name === props.item.name
            ? "correct"
            : selectedAnswer === props.item.name &&
              selectedAnswer !== currentFlag.name
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
