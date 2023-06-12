import React, { useContext, useEffect, useState } from "react";
import FullList from "./Main/FullList";
import { AppContext } from "../contexts/AppContext";
import SelectionBox from "./SelectionBox";
import Game from "./Game";
import GameProvider from "../contexts/GameContext";

const Main = () => {
  const { setFlags, windowWidth, isGame, isSelectors } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("data/flag.json")
      .then((res) => res.json())
      .then((flags) => {
        setFlags(flags);
      });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setFlags]);

  if (isGame) {
    return (
      <GameProvider>
        <Game />
      </GameProvider>
    );
  }

  return (
    <div className="main">
      {windowWidth > 669 && (
        <div className="main__select">
          <div className="main__select-box">
            <SelectionBox />
          </div>
        </div>
      )}
      <div className="main-list">
        {isSelectors && !(windowWidth > 669) ? (
          <SelectionBox />
        ) : (
          <div className="main-list__full-list">
            {isLoading ? (
              <div className="full-list__preloader-box">
                <div className="full-list__preloader-box-preloader"></div>
              </div>
            ) : (
              <FullList />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
