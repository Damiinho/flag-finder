import { useContext } from "react";
import InfoComponent from "./InfoComponent";
import { FlagDetailContext } from "../../../contexts/FlagDetailContext";
import roadIMG from "../../../img/road2.png";
import carIMG from "../../../img/car.png";

const CarSide = () => {
  const { carSide } = useContext(FlagDetailContext);

  if (carSide) {
    return (
      <div
        style={{
          position: "relative",
          backgroundColor: "#ffffff22",
          border: "1px solid black",
          boxShadow:
            "0px 3px 1px -2px rgba(0, 0, 0, 0.2),      0px 2px 2px 0px rgba(0, 0, 0, 0.14),      0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
          padding: "3px 5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img style={{ width: 30, height: 30 }} src={roadIMG} alt="road" />
        <img
          style={{
            position: "absolute",
            top: 8,
            left: carSide === "left" ? 5 : "auto",
            right: carSide === "right" ? 5 : "auto",
            height: 20,
          }}
          src={carIMG}
          alt="car"
        />
      </div>
    );
  }
};

export default CarSide;
