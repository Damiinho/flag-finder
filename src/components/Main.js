import React, { useContext, useEffect, useState } from "react";
import FullList from "./FullList";
import Detail from "./Detail";
import { AppContext } from "../contexts/AppContext";
import Select from "./Select";

const Main = () => {
  const { setFlags } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className="main">
      <div className="main-select">
        <div className="select-box">
          <div className="selectors">
            <Select />
          </div>
          {/* <div className="detail-box">
            <Detail />
          </div> */}
        </div>
      </div>

      <div className="main-box">
        <div className="full-list">
          {isLoading ? <div class="preloader"></div> : <FullList />}
        </div>
      </div>
    </div>
  );
};

export default Main;
