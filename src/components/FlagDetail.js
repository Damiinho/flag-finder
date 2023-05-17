import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import wikipediaIMG from "../img/Wikipedia.svg";
import OSMapIMG from "../img/Openstreetmap.svg";
import GMapsIMG from "../img/Google_Maps.svg";
import TimezoneIMG from "../img/time-zone.png";

const FlagDetail = () => {
  const { selectedSmallOne } = useContext(AppContext);
  const [openStreetMapLink, setOpenStreetMapLink] = useState("");
  const [officialName, setOfficialName] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [time, setTime] = useState("");

  ///////////////////////////
  // restcountries section //
  ///////////////////////////
  useEffect(() => {
    if (selectedSmallOne && selectedSmallOne.alpha3 !== "") {
      const fetchData = async () => {
        if (selectedSmallOne) {
          try {
            const response = await fetch(
              `https://restcountries.com/v3/alpha/${encodeURIComponent(
                selectedSmallOne.alpha3
              )}`
            );
            const data = await response.json();
            const openStreetMap = data[0]?.maps?.openStreetMaps;
            setOpenStreetMapLink(openStreetMap || "");

            const getOfficialName = (data) => {
              const nativeNames = data[0]?.name.nativeName;
              if (nativeNames) {
                const officialName = Object.values(nativeNames).find(
                  (name) => typeof name === "object" && "official" in name
                );
                if (officialName) {
                  return officialName.official;
                }
              }
              return "";
            };
            const officialName = getOfficialName(data);
            setOfficialName(officialName);
          } catch (error) {
            console.error("Błąd pobierania danych po alpha3: ", error);
          }
        }
      };

      fetchData();
    } else {
      setOpenStreetMapLink("");
    }
  }, [selectedSmallOne, openStreetMapLink]);

  //////////////////////
  // TimeZone section //
  //////////////////////
  useEffect(() => {
    const geonamesUsername = "damiinho";
    if (selectedSmallOne) {
      if (selectedSmallOne.englishCapital.length > 0) {
        fetch(
          `http://api.geonames.org/searchJSON?formatted=true&q=${selectedSmallOne.englishCapital[0]}&maxRows=1&username=${geonamesUsername}`
        )
          .then((response) => response.json())
          .then((data) => {
            setLng(data.geonames[0].lng);
            setLat(data.geonames[0].lat);
          })
          .catch((error) => {
            setLat("");
            setLng("");
            console.log(
              "Błąd podczas pobierania danych z angielskiej nazwy miasta:",
              error
            );
          });
      } else if (selectedSmallOne.englishName) {
        fetch(
          `http://api.geonames.org/searchJSON?formatted=true&q=${selectedSmallOne.englishName}&maxRows=1&username=${geonamesUsername}`
        )
          .then((response) => response.json())
          .then((data) => {
            setLng(data.geonames[0].lng);
            setLat(data.geonames[0].lat);
          })
          .catch((error) => {
            setLat("");
            setLng("");
            console.log(
              "Błąd podczas pobierania danych z angielskiej nazwy kraju:",
              error
            );
          });
      } else {
        setLat("");
        setLng("");
      }

      if (lat !== "" && lng !== "") {
        fetch(
          `http://api.geonames.org/timezoneJSON?formatted=true&lat=${lat}&lng=${lng}&username=${geonamesUsername}`
        )
          .then((response) => response.json())
          .then((data) => {
            setTime(data.time);
          })
          .catch((error) => {
            console.log(
              "Wystąpił błąd podczas pobierania danych czasu:",
              error
            );
            setTime("");
          });
      } else setTime("");
    }
  }, [lat, lng, selectedSmallOne]);
  const TimeZone = () => {
    return (
      <div className="App__flag-detail__timezones">
        <div className="App__flag-detail__timezones-img">
          <img src={TimezoneIMG} alt="timezones" />
        </div>
        {time}
      </div>
    );
  };
  const Link = (props) => (
    <div className="App__flag-detail__link">
      <div className="App__flag-detail__link-img">
        <img src={props.img} alt={props.alt} />
      </div>
      <a href={props.link}>{props.title}</a>
    </div>
  );

  return (
    <>
      {selectedSmallOne ? (
        <div className="App__flag-detail">
          <h1>{selectedSmallOne.name}</h1>
          {officialName && <h4>{officialName}</h4>}
          <img src={selectedSmallOne.img} alt="" />
          {selectedSmallOne.capital.length !== 0 && (
            <p>stolica: {selectedSmallOne.capital.join(", ")}</p>
          )}

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
          {time && <TimeZone />}
          {/* dostęp do morza
          powierzchnia
          granice
          populacja
          strona drogi
          waluta
          onz
          domena
          z api geonames uzyskać kody lng i lat dla stolic, a jeśli nie ma, to dla krajów, a potem ustawić czas
           */}
        </div>
      ) : null}
    </>
  );
};

export default FlagDetail;
