import React, { useContext } from "react";

import { AppContext } from "../contexts/AppContext";
import TitleBox from "./Header/TitleBox";
import ResetButton from "./Header/ResetButton";

const Header = () => {
  const { windowWidth, isGame, isSelectors } = useContext(AppContext);

  return (
    <header className="App__header">
      {isGame ? (
        ""
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
