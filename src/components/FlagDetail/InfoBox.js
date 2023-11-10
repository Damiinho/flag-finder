import Area from "./InfoBox/Area";
import Population from "./InfoBox/Population";
import LocalTime from "./InfoBox/LocalTime";
import LocalWeb from "./InfoBox/LocalWeb";
import Landlocked from "./InfoBox/Landlocked";
import UNMember from "./InfoBox/UNMember";
import CarSide from "./InfoBox/CarSide";
import Currency from "./InfoBox/Currency";
import Borders from "./InfoBox/Borders";
import LinkBox from "./LinkBox";
import { useContext } from "react";
import { FlagDetailContext } from "../../contexts/FlagDetailContext";

const InfoBox = () => {
  const { borders } = useContext(FlagDetailContext);
  return (
    <div className="App__flag-detail__land-box__info">
      <div style={{ fontSize: 15, padding: 3 }}>Informacje: </div>
      <div className="info__main">
        <Population />
        <Area />

        <LocalTime />
        <LocalWeb />
        <Landlocked />
        <UNMember />
        <CarSide />
        <Currency />
        <Borders />
        {borders.length > 0 && <LinkBox />}
      </div>
      {/* {selectedSmallOne.country && !(borders.length > 0) && (
        <div className="info__borders">
          <Borders />
        </div>
      )} */}
    </div>
  );
};

export default InfoBox;
