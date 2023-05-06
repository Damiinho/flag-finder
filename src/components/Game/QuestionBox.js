import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import AnswerButton from "./AnswerButton";

const QuestionBox = () => {
  const { currentFlag, quizList } = useContext(GameContext);

  return (
    <div className="main-game__quiz">
      <div className="quiz__img-box">
        <img className="quiz__img-box__img" src={currentFlag.img} alt="flag" />
      </div>
      <div className="quiz__answers">
        {quizList.map((item, index) => (
          <AnswerButton key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default QuestionBox;
