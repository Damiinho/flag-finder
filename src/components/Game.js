import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";

const Game = () => {
  const { flags } = useContext(AppContext);
  const [start, setStart] = useState(false);
  const [quizList, setQuizList] = useState([]);
  const [currentFlag, setCurrentFlag] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const gameFlagList = flags.filter((item) => item.country === true);

  const handleStartStop = (value) => {
    setStart(value);
    setSelectedAnswer(null);
    if (value) {
      generateQuizList();
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    generateQuizList();
  };

  const generateQuizList = () => {
    const randomIndexes = [];
    while (randomIndexes.length < 4) {
      const randomIndex = Math.floor(Math.random() * gameFlagList.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }

    const randomCurrentIndex = Math.floor(Math.random() * randomIndexes.length);
    const newQuizList = randomIndexes.map((index, i) => {
      const isCorrect = i === randomCurrentIndex;
      return { name: gameFlagList[index].name, correct: isCorrect };
    });

    setQuizList(newQuizList);
    const randomCurrentFlag = gameFlagList[randomIndexes[randomCurrentIndex]];
    setCurrentFlag({
      name: randomCurrentFlag.name,
      img: randomCurrentFlag.img,
    });
  };

  const handleAnswerClick = (value) => {
    setSelectedAnswer(value.name);

    if (value.correct === true) {
      setScore(score + 1);
    } else setScore(score);
  };

  const AnswerButton = (props) => {
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

  const quiz = () => {
    return (
      <div className="main-game__quiz">
        <div className="quiz__img-box">
          <img
            className="quiz__img-box__img"
            src={currentFlag.img}
            alt="flag"
          />
        </div>
        <div className="quiz__answers">
          {quizList.map((item, index) => (
            <AnswerButton key={index} item={item} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="main-game">
      {!start && (
        <button onClick={() => handleStartStop(true)}>Rozpocznij</button>
      )}

      {start && <h1>Wynik: {score}</h1>}
      {start && quiz()}
      {start && (
        <>
          <button onClick={() => handleStartStop(false)}>Zatrzymaj</button>
          <button onClick={handleNext}>Następna flaga</button>
        </>
      )}
    </div>
  );
};

export default Game;
