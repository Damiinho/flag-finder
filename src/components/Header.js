import React, { useContext } from "react";

import { AppContext } from "../contexts/AppContext";
import TitleBox from "./Header/TitleBox";

const Header = () => {
  const { windowHeight, isGame } = useContext(AppContext);

  return (
    <header className="App__header">
      {isGame ? (
        windowHeight > 829 && <TitleBox />
      ) : (
        <>
          <div className="header__title">
            <TitleBox />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
