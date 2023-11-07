import { useContext } from "react";
import wikipediaIMG from "../../img/Wikipedia.svg";
import OSMapIMG from "../../img/Openstreetmap.svg";
import GMapsIMG from "../../img/Google_Maps.svg";
import Link from "./LinkBox/Link";
import { FlagDetailContext } from "../../contexts/FlagDetailContext";
import { AppContext } from "../../contexts/AppContext";

const LinkBox = () => {
  const { openStreetMapLink } = useContext(FlagDetailContext);
  const { selectedSmallOne } = useContext(AppContext);

  return (
    <div className="App__flag-detail__linkbox">
      <div style={{ fontSize: 15, padding: 3 }}>Linki:</div>
      <div style={{ display: "flex", gap: 5 }}>
        <Link
          img={wikipediaIMG}
          alt="wikipedia"
          link={`https://pl.wikipedia.org/wiki/${selectedSmallOne.name}`}
          title="Wikipedia"
        />
        <Link
          img={GMapsIMG}
          alt="google"
          link={`https://www.google.com/maps/place/${selectedSmallOne.name}`}
          title="Google Maps"
        />

        {openStreetMapLink && (
          <Link
            img={OSMapIMG}
            alt="osmap"
            link={openStreetMapLink}
            title="OpenStreetMap"
          />
        )}
      </div>
    </div>
  );
};

export default LinkBox;
