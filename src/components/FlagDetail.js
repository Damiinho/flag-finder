import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import wikipediaIMG from "../img/Wikipedia.svg";
import OSMapIMG from "../img/Openstreetmap.svg";
import GMapsIMG from "../img/Google_Maps.svg";
import TimezoneIMG from "../img/time-zone.png";

const FlagDetail = () => {
  const { selectedSmallOne } = useContext(AppContext);
  const [wikipediaData, setWikipediaData] = useState(null);
  const [openStreetMapLink, setOpenStreetMapLink] = useState("");
  const [officialName, setOfficialName] = useState("");
  const [UNMember, setUNMember] = useState(false);
  const [landlocked, setLandlocked] = useState(false);
  const [area, setArea] = useState(0);
  const [borders, setBorders] = useState([]);
  const [population, setPopulation] = useState(0);
  const [carSide, setCarSide] = useState("");
  const [currencies, setCurrencies] = useState("");
  const [tld, setTld] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [time, setTime] = useState("");

  ///////////////////////
  // Wikipedia section //
  ///////////////////////
  useEffect(() => {
    const page = selectedSmallOne.name;
    const apiURL = `https://pl.wikipedia.org/api/rest_v1/page/summary/${page}`;
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        if (data.title === "Not found.") {
          setWikipediaData(null);
        } else setWikipediaData(data);
      })
      .catch((error) => {
        setWikipediaData(null);
        console.error("Błąd pobierania z Wikipedii", error);
      });
  }, [selectedSmallOne]);

  console.log(wikipediaData);

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
            setUNMember(data[0]?.UNMember || false);
            setLandlocked(data[0]?.landlocked || "brak danych");
            setArea(data[0]?.area || 0);

            const getBorders = async (data) => {
              const countryCodes = data[0]?.borders || [];
              let countryNames = [];

              if (countryCodes.length > 0) {
                try {
                  for (const item of countryCodes) {
                    let name = "";
                    const response = await fetch(
                      `https://restcountries.com/v3/alpha/${item}`
                    );

                    if (response.ok) {
                      const responseData = await response.json();
                      name = responseData[0].name?.common || "";
                      countryNames.push(name);
                    } else {
                      setBorders([]);
                      throw new Error("Error fetching country data");
                    }
                  }

                  setBorders(countryNames);
                } catch (error) {
                  console.error(error);
                }
              } else setBorders([]);

              return countryNames;
            };

            getBorders(data);

            setPopulation(data[0]?.population || 0);
            setCarSide(data[0]?.car?.side || "");
            setTld(data[0]?.tld || "");
            const getCurrencies = (data) => {
              const currency = data[0]?.currencies;
              let currencyName = null;
              let currencyObject = null;
              let returnValue = null;

              if (currency) {
                for (const [key, value] of Object.entries(currency)) {
                  if (typeof value === "object" && "name" in value) {
                    currencyName = key;
                    currencyObject = value;

                    returnValue = {
                      key: currencyName,
                      name: currencyObject?.name,
                      symbol: currencyObject?.symbol,
                    };
                    break;
                  }
                }
              }

              return returnValue;
            };

            const currencies = getCurrencies(data);
            setCurrencies(currencies);
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
          <div>
            Granice?{" "}
            {borders.length > 0
              ? borders.join(", ")
              : selectedSmallOne.country === true
              ? "bez granic lądowych"
              : "to nie państwo"}
          </div>
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

          <div>Członek ONZ?: {UNMember ? "tak" : "nie"}</div>
          <div>
            Dostęp do morza?:{" "}
            {landlocked
              ? landlocked === "brak danych"
                ? "brak danych"
                : "nie"
              : "tak"}
          </div>
          <div>Powierzchnia? {area > 0 ? area : "brak danych"}</div>
          <div>Populacja? {population > 0 ? population : "brak danych"}</div>
          <div>Strona drogi? {carSide ? carSide : "brak danych"}</div>
          <div>Domena internetowa? {tld ? tld : "brak danych"}</div>
          <div>
            Waluta?{" "}
            {currencies ? (
              <>
                <p>Key: {currencies.key}</p>
                <p>Currency Name: {currencies.name}</p>
                <p>Symbol: {currencies.symbol}</p>
              </>
            ) : (
              "brak danych"
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FlagDetail;
