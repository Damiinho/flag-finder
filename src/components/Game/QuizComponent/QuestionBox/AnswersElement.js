import { useContext } from "react";
import { GameContext } from "../../../../contexts/GameContext";
import AnswerButton from "../AnswerButton";

const AnswersElement = () => {
  const { settingsVariants, quizList } = useContext(GameContext);

  if (!(settingsVariants === 7)) {
    return (
      <div
        className={`quiz__answers ${settingsVariants > 5 ? "many" : "little"}`}
      >
        {quizList.map((item, index) => {
          return <AnswerButton key={index} item={item} />;
        })}
      </div>
    );
  } else return "";
};

export default AnswersElement;
