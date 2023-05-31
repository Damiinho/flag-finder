import React, { useContext } from "react";

import { AppContext } from "../contexts/AppContext";
import TitleBox from "./Header/TitleBox";
import ResetButton from "./Header/ResetButton";

const Header = () => {
  const { windowHeight, windowWidth, isGame, isSelectors } =
    useContext(AppContext);

  return (
    <header className="App__header">
      {isGame ? (
        windowHeight > 829 && <TitleBox />
      ) : (
        <>
          <div className="header__title">
            <TitleBox />
            {windowWidth < 670 && !isSelectors && <ResetButton />}
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
