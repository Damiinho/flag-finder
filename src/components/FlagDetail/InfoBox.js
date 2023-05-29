import { useContext } from "react";
import Borders from "./Borders";
import Area from "./InfoBox/Area";
import Population from "./InfoBox/Population";
import { AppContext } from "../../contexts/AppContext";
import { FlagDetailContext } from "../../contexts/FlagDetailContext";

const InfoBox = () => {
  const { selectedSmallOne } = useContext(AppContext);
  const { borders } = useContext(FlagDetailContext);

  return (
    <div className="App__flag-detail__land-box__info">
      <div className="info__main">
        <Population />
        <Area />
      </div>
      {selectedSmallOne.country && !(borders.length > 0) && (
        <div className="info__borders">
          <Borders />
        </div>
      )}
    </div>
  );
};

export default InfoBox;
