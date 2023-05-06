import React, { useContext, useEffect, useState } from "react";
import FullList from "./FullList";
import { AppContext } from "../contexts/AppContext";
import SelectionBox from "./SelectionBox";
import Game from "./Game";
import GameProvider from "../contexts/GameContext";

const Main = () => {
  const { setFlags, windowWidth, selectedSmallOne, isGame } =
    useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isSelectors, setIsSelectors] = useState(false);

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

  const handleSelectClick = () => {
    setIsSelectors(!isSelectors);
  };

  return (
    <>
      {isGame ? (
        <GameProvider>
          <Game />
        </GameProvider>
      ) : (
        <div
          className={`main ${
            selectedSmallOne && windowWidth < 550 ? "flag-selected" : ""
          }`}
        >
          {windowWidth > 670 ? (
            <div className="main__select">
              <div className="main__select-box">
                <SelectionBox />
              </div>
            </div>
          ) : (
            <div
              className="main__select"
              style={
                selectedSmallOne && windowWidth < 550 ? { top: "170px" } : null
              }
              onClick={handleSelectClick}
            >
              {isSelectors ? "pokaż listę krajów" : "pokaż opcje wyboru"}
            </div>
          )}
          <div className="main-list">
            {isSelectors && !(windowWidth > 670) ? (
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
      )}
    </>
  );
};

export default Main;
