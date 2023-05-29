import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";

import LinkBox from "./FlagDetail/LinkBox";
import { FlagDetailContext } from "../contexts/FlagDetailContext";
import MoreInfoBox from "./FlagDetail/MoreInfoBox";
import InfoBox from "./FlagDetail/InfoBox";
import NameSection from "./FlagDetail/NameSection";
import MainFlag from "./FlagDetail/MainFlag";
import TimeZone from "./FlagDetail/TimeZone";
import Capital from "./FlagDetail/Capital";
import Exit from "./FlagDetail/Exit";

const FlagDetail = () => {
  const {
    openStreetMapLink,
    setOpenStreetMapLink,
    setWikipediaData,
    setOfficialName,
    setUNMember,

    setLandlocked,
    setArea,
    setBorders,
    setPopulation,

    setCarSide,

    setCurrencies,

    setTld,
    lat,
    setLat,
    lng,
    setLng,
    setTime,
  } = useContext(FlagDetailContext);
  const { selectedSmallOne } = useContext(AppContext);

  ///////////////////////
  // region translator //
  ///////////////////////

  //////////////////////
  // Wikipedia effect //
  //////////////////////
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
  }, [selectedSmallOne, setWikipediaData]);

  // console.log(wikipediaData);

  //////////////////////////
  // restcountries effect //
  //////////////////////////
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

            // console.log(data);
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
  }, [
    selectedSmallOne,
    openStreetMapLink,
    setArea,
    setBorders,
    setCarSide,
    setCurrencies,
    setLandlocked,
    setOfficialName,
    setOpenStreetMapLink,
    setPopulation,
    setTld,
    setUNMember,
  ]);

  /////////////////////
  // TimeZone effect //
  /////////////////////
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
  }, [lat, lng, selectedSmallOne, setLat, setLng, setTime]);

  return (
    <>
      {selectedSmallOne ? (
        <>
          <div className="App__flag-detail">
            <Exit />
            <NameSection />
            <MainFlag />
            <Capital />

            <div className="App__flag-detail__land-box">
              <InfoBox />
              <MoreInfoBox />
            </div>

            <LinkBox />
          </div>
        </>
      ) : null}
    </>
  );
};

export default FlagDetail;
