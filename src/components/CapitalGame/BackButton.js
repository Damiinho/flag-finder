import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const BackButton = () => {
  const { setIsCapitalGame } = useContext(AppContext);

  const handleClick = () => {
    setIsCapitalGame(false);
  };
  return <button onClick={handleClick}>wróć</button>;
};

export default BackButton;
