import { useContext, useEffect, useRef } from "react";
import { GameContext } from "../../../contexts/GameContext";
import QuestionElement from "./QuestionBox/QuestionElement";
import AnswersElement from "./QuestionBox/AnswersElement";

const QuestionBox = () => {
  const { correctAnswer, additionalClass } = useContext(GameContext);

  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [correctAnswer]);

  return (
    <div className={`main-game__quiz ${additionalClass()}`}>
      <QuestionElement />
      <AnswersElement />
    </div>
  );
};

export default QuestionBox;
