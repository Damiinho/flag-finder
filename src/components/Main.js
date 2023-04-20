import React, { useContext, useEffect } from "react";
import FullList from "./FullList";
import Detail from "./Detail";
import { AppContext } from "../contexts/AppContext";
import Select from "./Select";

const Main = () => {
  const { setFlags } = useContext(AppContext);

  useEffect(() => {
    fetch("data/flag.json")
      .then((res) => res.json())
      .then((flags) => {
        setFlags(flags);
      });
  }, [setFlags]);

  return (
    <div className="main">
      <div className="main-select">
        <div className="select-box">
          <div className="selectors">
            <Select />
          </div>
          <div className="detail-box">
            <Detail />
          </div>
        </div>
      </div>

      <div className="main-box">
        <div className="full-list">
          <FullList />
        </div>
      </div>
    </div>
  );
};

export default Main;
