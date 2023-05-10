import React, { useContext } from "react";

import Detail from "./Detail";
import { AppContext } from "../contexts/AppContext";
import TitleBox from "./TitleBox";

const Header = () => {
  const { selectedSmallOne, windowWidth, windowHeight, isGame } =
    useContext(AppContext);

  return (
    <header className="App__header">
      {isGame ? (
        windowHeight > 1000 && <TitleBox />
      ) : (
        <>
          {windowWidth < 900 && selectedSmallOne ? null : (
            <div className="header__title">
              <TitleBox />
            </div>
          )}
          {windowWidth < 900 && !selectedSmallOne ? null : (
            <div className="header__detail">
              <div className="header__detail-box">
                <Detail />
              </div>
            </div>
          )}
        </>
      )}
    </header>
  );
};

export default Header;
