import React, { useContext, useEffect } from "react";
import FullList from "./FullList";
import Detail from "./Detail";
import SelectColor from "./SelectColor";
import SelectStripes from "./SelectStripes";
import SelectRegion from "./SelectRegion";
import SelectOther from "./SelectOther";
import "../style/Main.css";
import { AppContext } from "../contexts/AppContext";

const Main = () => {
  const { flags, setFlags } = useContext(AppContext);

  useEffect(() => {
    fetch("data/flag.json")
      .then((res) => res.json())
      .then((flags) => {
        setFlags(flags);
      });
  }, []);

  return (
    <div className="main">
      <div className="main-select">
        <div className="select-box">
          <div className="selectors">
            <SelectColor />
            <SelectStripes />
            <SelectRegion />
            <SelectOther />
          </div>
          <div className="detail-box">{/* <Detail /> */}</div>
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
