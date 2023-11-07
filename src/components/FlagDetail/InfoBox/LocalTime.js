import { useContext } from "react";

import TimezoneIMG from "../../../img/schedule_white_24dp.svg";
import { FlagDetailContext } from "../../../contexts/FlagDetailContext";
import InfoComponent from "./InfoComponent";
const LocalTime = () => {
  const { time } = useContext(FlagDetailContext);

  if (time) {
    const [date, hour] = time.split(" ");
    const parts = date.split("-");
    const formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;

    return (
      <InfoComponent img={TimezoneIMG} text={`${formattedDate}, ${hour}`} />
    );
  }
};

export default LocalTime;
