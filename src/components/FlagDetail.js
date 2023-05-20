import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import wikipediaIMG from "../img/Wikipedia.svg";
import OSMapIMG from "../img/Openstreetmap.svg";
import GMapsIMG from "../img/Google_Maps.svg";
import TimezoneIMG from "../img/time-zone.png";
import capitolIMG from "../img/capitol-building.svg";
import seaIMG from "../img/Blue_sea_wave.svg";
import roadIMG from "../img/road2.png";
import carIMG from "../img/car.png";
import UNIMG from "../img/UN_emblem_blue.svg";
import IslandIMG from "../img/Island_with_Trees_Flat_Icon_Vector.svg";
import CurrenciesIMG from "../img/currencies.svg";
import PopulationIMG from "../img/population.svg";
import WebIMG from "../img/web-icon.svg";
import XIMG from "../img/x.svg";

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

  let region = "";
  if (selectedSmallOne) {
    if (selectedSmallOne.regions[0] === "europe") {
      region = "Europa";
    } else if (selectedSmallOne.regions[0] === "south-america") {
      region = "Ameryka Południowa";
    } else if (selectedSmallOne.regions[0] === "north-america") {
      region = "Ameryka Północna";
    } else if (selectedSmallOne.regions[0] === "asia") {
      region = "Azja";
    } else if (selectedSmallOne.regions[0] === "africa") {
      region = "Afryka";
    } else if (selectedSmallOne.regions[0] === "oceania") {
      region = "Australia/Oceania";
    } else if (selectedSmallOne.regions[0] === "carraibean") {
      region = "Karaiby";
    } else if (selectedSmallOne.regions[0] === "antarctica") {
      region = "Antarktyka";
    }
  }

  ///////////////////////
  // Wikipedia section //
  ///////////////////////
  useEffect(() => {
    if (selectedSmallOne) {
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
    }
  }, [selectedSmallOne]);

  // console.log(wikipediaData);

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
            setUNMember(data[0]?.unMember);
            setLandlocked(
              data[0]?.hasOwnProperty("landlocked")
                ? data[0].landlocked
                : "brak danych"
            );

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
                      name = responseData[0].translations?.pol?.common || "";
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
      setOfficialName("");
      setUNMember(false);
      setLandlocked("brak danych");
      setArea(0);
      setBorders([]);
      setPopulation(0);
      setCarSide("");
      setTld("");
      setCurrencies("");
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
            <p>data i godzina:</p>
            <p>
              {formattedDate}, {hour}
            </p>
          </div>
        </div>
      );
    }
  };
  const Link = (props) => (
    <a
      href={props.link}
      target="blank"
      className="App__flag-detail__linkbox-link"
    >
      <div className="App__flag-detail__linkbox-link__img">
        <img src={props.img} alt={props.alt} />
      </div>
      <p>{props.title}</p>
    </a>
  );
  const Linkbox = () => (
    <div className="App__flag-detail__linkbox">
      <div className="App__flag-detail__linkbox-title">zobacz więcej:</div>
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
  );

  const Capital = () => {
    if (selectedSmallOne.capital.length !== 0) {
      return (
        <div className="App__flag-detail__capital">
          <img
            className="App__flag-detail__capital-img"
            src={capitolIMG}
            alt="capital"
          />
          <div className="App__flag-detail__capital-description">
            <p>{selectedSmallOne.capital.join(", ")}</p>
          </div>
        </div>
      );
    }
  };

  const MainFlag = () => (
    <img
      className="App__flag-detail__img-flag"
      src={selectedSmallOne.img}
      alt=""
    />
  );

  const Borders = () => (
    <>
      {selectedSmallOne.country ? (
        <div className="App__flag-detail__borders">
          {borders.length > 0 ? (
            <div className="App__flag-detail__borders-full">
              <div className="App__flag-detail__borders-full__content">
                granice: {borders.join(", ")}
              </div>
            </div>
          ) : (
            <>
              <div className="App__flag-detail__borders-empty">
                <img src={IslandIMG} alt="island" />
                <p>wyspy</p>
              </div>
            </>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );

  const UnitedNations = () => (
    <div className="App__flag-detail__un">
      <img
        className={`App__flag-detail__un-img ${UNMember ? "" : "non-member"}`}
        src={UNIMG}
        alt="un"
      />
      <div className="App__flag-detail__un-detail">
        <p>{UNMember ? "należy do ONZ" : "nie należy do ONZ"}</p>
      </div>
    </div>
  );

  const Landlocked = () => (
    <>
      {landlocked === "brak danych" ? (
        ""
      ) : (
        <div className="App__flag-detail__landlocked">
          <div className="App__flag-detail__landlocked-img">
            <img src={seaIMG} alt="sea" />
            {landlocked ? <img src={XIMG} alt="" /> : null}
          </div>
          <div className="App__flag-detail__landlocked-description">
            {landlocked ? "brak dostępu do morza" : "dostęp do morza"}
          </div>
        </div>
      )}
    </>
  );

  const Area = () => (
    <>
      {area > 0 ? (
        <div className="App__flag-detail__area">
          <p>
            powierzchnia:{" "}
            {area < 1000
              ? area
              : `${(((area / 1000) * 10) / 10).toFixed(1)} tys.`}{" "}
            km²
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
  const Population = () => (
    <>
      {population > 0 ? (
        <div className="App__flag-detail__population">
          <img src={PopulationIMG} alt="population" />
          <p>
            ludność:{" "}
            {population < 100000
              ? population < 1000
                ? `${population}`
                : `${(((population / 1000) * 10) / 10).toFixed(1)} tys. `
              : `${(((population / 1000000) * 10) / 10).toFixed(1)} mln `}
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
  const CarSide = () => (
    <>
      {carSide ? (
        <div className="App__flag-detail__carside">
          <div className="App__flag-detail__carside-wrapper">
            <img
              className="App__flag-detail__carside-road"
              src={roadIMG}
              alt="road"
            />
            <img
              className={`App__flag-detail__carside-car ${
                carSide === "left" ? "left" : ""
              } ${carSide === "right" ? "right" : ""}`}
              src={carIMG}
              alt="car"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
  const TLD = () => (
    <>
      {tld ? (
        <div className="App__flag-detail__tld">
          <img src={WebIMG} alt="www" />
          <p>{tld[0]}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
  const Currencies = () => (
    <>
      {currencies ? (
        <div className="App__flag-detail__currencies">
          <div className="currencies-wrapper">
            <img src={CurrenciesIMG} alt="currencies" />
            <div className="currencies-wrapper__box">
              <p>{currencies.key}</p>
              <p>{currencies.symbol}</p>
            </div>
          </div>
          {/* <p>{currencies.name}</p> */}
        </div>
      ) : (
        ""
      )}
    </>
  );

  return (
    <>
      {selectedSmallOne ? (
        <div className="App__flag-detail">
          <h1>{selectedSmallOne.name}</h1>
          {officialName && <h4>{officialName}</h4>}
          <h4>{region}</h4>
          <MainFlag />
          <div className="App__flag-detail__capital-box">
            <Capital />
          </div>
          <TimeZone />
          <div className="App__flag-detail__land-box">
            <div className="App__flag-detail__land-box__info">
              <Population />
              <Area />
            </div>
            <UnitedNations />
            <Landlocked />

            <Currencies />
            <CarSide />
            <TLD />
          </div>

          <Borders />
          <Linkbox />
        </div>
      ) : null}
    </>
  );
};

export default FlagDetail;
