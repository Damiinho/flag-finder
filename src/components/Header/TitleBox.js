import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const TitleBox = () => {
  const { isGame, windowWidth, setIsSelectors, isSelectors } =
    useContext(AppContext);

  const handleClick = () => {
    if (!(windowWidth > 669)) {
      if (isSelectors) {
        setIsSelectors(false);
      } else setIsSelectors(true);
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`header__title-box ${
          isGame ? "game" : !(windowWidth > 669) ? "switcher" : ""
        } ${
          !isGame && !(windowWidth > 669) && !isSelectors ? "show-settings" : ""
        }`}
      >
        {isGame
          ? "Czyja to flaga? – gra"
          : !(windowWidth > 669)
          ? isSelectors
            ? "pokaż flagi"
            : "ustawienia"
          : "Znajdź flagę"}
      </div>
    </>
  );
};

export default TitleBox;
