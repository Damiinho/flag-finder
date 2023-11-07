import { useContext } from "react";
import Area from "./InfoBox/Area";
import Population from "./InfoBox/Population";
import { AppContext } from "../../contexts/AppContext";
import { FlagDetailContext } from "../../contexts/FlagDetailContext";
import LocalTime from "./InfoBox/LocalTime";
import LocalWeb from "./InfoBox/LocalWeb";
import PeopleIMG from "../../img/group.svg";
import TerrainIMG from "../../img/terrain_white_24dp.svg";
import InfoComponent from "./InfoBox/InfoComponent";
import TimezoneIMG from "../../img/schedule_white_24dp.svg";
import Landlocked from "./InfoBox/Landlocked";
import UNMember from "./InfoBox/UNMember";
import CarSide from "./InfoBox/CarSide";
import Currency from "./InfoBox/Currency";
import Borders from "./InfoBox/Borders";

const InfoBox = () => {
  const { selectedSmallOne } = useContext(AppContext);
  const { borders, population, area, time } = useContext(FlagDetailContext);

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
