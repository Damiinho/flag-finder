import React, { useContext } from "react";

import Detail from "./Header/Detail";
import { AppContext } from "../contexts/AppContext";
import TitleBox from "./Header/TitleBox";

const Header = () => {
  const { selectedSmallOne, windowWidth, windowHeight, isGame } =
    useContext(AppContext);

  return (
    <header className="App__header">
      {isGame ? (
        windowHeight > 829 && <TitleBox />
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
