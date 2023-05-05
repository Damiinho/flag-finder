import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";

const TitleBox = () => {
  const { isGame, setIsGame } = useContext(AppContext);
  const [hover, setHover] = useState(false);

  const handleTitleBox = () => {
    setIsGame(!isGame);
  };

  const handleHover = (value) => {
    setHover(value);
  };

  return (
    <div
      className={`header__title-box ${isGame ? "game" : ""}`}
      onClick={handleTitleBox}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      {isGame ? (
        <>{hover ? "Włącz „znajdź flagę”" : "Czyja to flaga? – gra"}</>
      ) : (
        <>{hover ? "Włącz grę" : "Znajdź flagę"}</>
      )}
    </div>
  );
};

export default TitleBox;
