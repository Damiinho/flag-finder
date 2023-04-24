import React, { useContext } from "react";

import Detail from "./Detail";
import { AppContext } from "../contexts/AppContext";

const Header = () => {
  const { selectedSmallOne, windowWidth } = useContext(AppContext);

  return (
    <header className="App__header">
      {windowWidth < 900 && selectedSmallOne ? null : (
        <div className="header__title">
          <div className="header__title-box">Znajdź flagę</div>
        </div>
      )}
      {windowWidth < 900 && !selectedSmallOne ? null : (
        <div className="header__detail">
          <div className="header__detail-box">
            <Detail />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
