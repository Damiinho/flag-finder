import { useContext } from "react";
import { FlagDetailContext } from "../../contexts/FlagDetailContext";
import TimezoneIMG from "../../img/time-zone.png";

const TimeZone = () => {
  const { time } = useContext(FlagDetailContext);

  if (time) {
    const [date, hour] = time.split(" ");
    const parts = date.split("-");
    const formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;

    return (
      <div className="App__flag-detail__timezones">
        <img
          className="App__flag-detail__timezones-img"
          src={TimezoneIMG}
          alt="timezones"
        />
        <div className="App__flag-detail__timezones-description">
          <p>data i czas lokalny:</p>
          <p>
            {formattedDate}, {hour}
          </p>
        </div>
      </div>
    );
  }
};

export default TimeZone;
