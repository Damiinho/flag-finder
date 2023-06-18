import { useContext, useEffect, useRef } from "react";
import { GameContext } from "../../../contexts/GameContext";
import QuestionElement from "./QuestionBox/QuestionElement";
import AnswersElement from "./QuestionBox/AnswersElement";

const QuestionBox = () => {
  const { correctAnswer, settingsFormat } = useContext(GameContext);

  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [correctAnswer]);

  const additionalClass = () => {
    if (settingsFormat.value === "countryToFlag") return "countryToFlag";
    else if (settingsFormat.value === "countryToCapital")
      return "countryToCapital";
  };

  return (
    <div className={`main-game__quiz ${additionalClass()}`}>
      <QuestionElement />
      <AnswersElement />
    </div>
  );
};

export default QuestionBox;
