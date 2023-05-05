import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";

const Game = () => {
  const { flags } = useContext(AppContext);
  const [start, setStart] = useState(false);
  const [quizList, setQuizList] = useState([]);
  const [currentFlag, setCurrentFlag] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [lastScore, setLastScore] = useState(null);
  const [bestScore, setBestScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const gameFlagList = flags.filter((item) => item.country === true);

  const handleStartStop = (value) => {
    setStart(value);
    setSelectedAnswer(null);
    if (value) {
      generateQuizList();
      setScore(0);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    generateQuizList();
  };

  const handleRestart = () => {
    setSelectedAnswer(null);
    generateQuizList();
    setLastScore(score);
    if (score > bestScore) {
      setBestScore(score);
    }
    setScore(0);
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
    if (!selectedAnswer) {
      setSelectedAnswer(value.name);

      if (value.correct === true) {
        setScore(score + 1);
      }
    }
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
        <button
          className="main-game__start-button"
          onClick={() => handleStartStop(true)}
        >
          Rozpocznij
        </button>
      )}
      {start && (
        <div className="main-game__score-box">
          <div className="main-game__score-box__current">
            <p>wynik:</p>
            <p>{score}</p>
          </div>
          {bestScore || lastScore ? (
            <div className="main-game__score-box__second">
              {bestScore > 0 && (
                <div className="main-game__score-box__best-score">
                  najlepszy: {bestScore}
                </div>
              )}
              {lastScore !== null && (
                <div className="main-game__score-box__last-score">
                  ostatni: {lastScore}
                </div>
              )}
            </div>
          ) : null}
        </div>
      )}
      {selectedAnswer === currentFlag.name && (
        <div className="main-game__handle-box">
          <button onClick={handleNext}>Następna flaga</button>
        </div>
      )}
      {selectedAnswer && selectedAnswer !== currentFlag.name ? (
        <div className="main-game__handle-box">
          <button onClick={handleRestart}>Rozpocznij od nowa</button>
        </div>
      ) : null}

      {selectedAnswer === currentFlag.name && (
        <div className="main-game__result good">DOBRZE</div>
      )}
      {selectedAnswer && selectedAnswer !== currentFlag.name && (
        <div className={`main-game__result bad`}>BŁĄD</div>
      )}

      {start && quiz()}
      {start && (
        <>
          <button
            className="main-game__stop-button"
            onClick={() => handleStartStop(false)}
          >
            Przerwij
          </button>
        </>
      )}
    </div>
  );
};

export default Game;
