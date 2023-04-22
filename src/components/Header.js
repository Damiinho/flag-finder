import React from "react";

import Detail from "./Detail";

const Header = () => {
  return (
    <header>
      <div className="title">
        <div className="title-box">Znajdź flagę</div>
      </div>
      <div className="detail">
        <div className="detail-box">
          <Detail />
        </div>
      </div>
    </header>
  );
};

export default Header;
