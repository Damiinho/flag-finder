import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";

const FlagDetail = () => {
  const { selectedSmallOne } = useContext(AppContext);

  const API = "AIzaSyDXy8dIHe3_tMpWmOXAYGqbVgfXkd6_l-I";

  useEffect(() => {
    if (selectedSmallOne) {
      const fetchCoordinates = async () => {
        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${selectedSmallOne.name}&key=${API}`
          );
          const data = await response.json();

          // Pobranie współrzędnych geograficznych
          const { lat, lng } = data.results[0].geometry.location;
        } catch (error) {
          console.error("Błąd podczas pobierania danych:", error);
        }
      };

      fetchCoordinates();
    }
  }, [selectedSmallOne]);

  const fetchCountryInfo = async (countryName) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3/name/${encodeURIComponent(countryName)}`
      );
      const data = await response.json();

      // Sprawdź, czy istnieją dane dla podanej nazwy kraju
      if (response.ok && data.length > 0) {
        const country = data[0];
        console.log("Informacje o kraju:", country);
        // Tutaj możesz użyć pobranych danych do wyświetlenia informacji o kraju w aplikacji
      } else {
        console.error("Nie znaleziono informacji dla podanego kraju");
      }
    } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
    }
  };

  fetchCountryInfo("Polska"); // Przykład użycia dla kraju "Polska"

  return (
    <>
      {selectedSmallOne ? (
        <div className="App__flag-detail">
          {selectedSmallOne.name}
          <img src={selectedSmallOne.img} alt="" />
          <p>stolica: {selectedSmallOne.capital.join(", ")}</p>

          <a href={`https://pl.wikipedia.org/wiki/${selectedSmallOne.name}`}>
            Przeczytaj więcej na Wikipedii
          </a>
          <a
            href={`https://www.google.com/maps/place/${selectedSmallOne.name}`}
          >
            Znajdź na Google Maps
          </a>
        </div>
      ) : null}
    </>
  );
};

export default FlagDetail;
