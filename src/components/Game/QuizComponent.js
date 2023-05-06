import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import ScoreComponent from "./ScoreComponent";
import QuestionBox from "./QuestionBox";

const QuizComponent = () => {
  const {
    currentFlag,
    handleStartStop,
    selectedAnswer,
    handleNext,
    handleRestart,
  } = useContext(GameContext);

  const HandleButton = (props) => (
    <div className="main-game__handle-box">
      <button onClick={props.click}>{props.name}</button>
    </div>
  );

  const ResultBox = (props) => (
    <div className={`main-game__result ${props.result}`}>
      {props.result === "good" ? "DOBRZE" : "BŁĄD"}
    </div>
  );

  return (
    <>
      <ScoreComponent />
      {selectedAnswer === currentFlag.name && (
        <>
          <HandleButton click={handleNext} name="Następna flaga" />
          <ResultBox result="good" />
        </>
      )}
      {selectedAnswer && selectedAnswer !== currentFlag.name ? (
        <>
          <HandleButton click={handleRestart} name="Rozpocznij od nowa" />
          <ResultBox result="bad" />
        </>
      ) : null}
      <QuestionBox />
      <button
        className="main-game__stop-button"
        onClick={() => handleStartStop(false)}
      >
        Przerwij
      </button>
    </>
  );
};

export default QuizComponent;
