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
    <div className="App__flag-detail__info-box">
      <div style={{ fontSize: 15, padding: 3, width: "100%" }}>
        Informacje:{" "}
      </div>
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
  );
};

export default InfoBox;
