import IslandIMG from "../../../img/island_white.svg";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { FlagDetailContext } from "../../../contexts/FlagDetailContext";

const Borders = () => {
  const { selectedSmallOne } = useContext(AppContext);
  const { borders } = useContext(FlagDetailContext);

  if (selectedSmallOne.country) {
    if (!(borders.length > 0))
      return (
        <div
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffffff22",
            padding: "5px 10px",
            border: "1px solid black",
            boxShadow:
              "0px 3px 1px -2px rgba(0, 0, 0, 0.2),      0px 2px 2px 0px rgba(0, 0, 0, 0.14),      0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
          }}
        >
          <img style={{ width: 25 }} src={IslandIMG} alt="" />
        </div>
      );
    else
      return (
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 250,
            // backgroundColor: "#ffffff22",
            // padding: "5px 10px",
            // border: "1px solid black",
            // boxShadow:
            //   "0px 3px 1px -2px rgba(0, 0, 0, 0.2),      0px 2px 2px 0px rgba(0, 0, 0, 0.14),      0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
          }}
        >
          <span
            style={{
              width: 40,
              fontSize: 12,
              textAlign: "center",
            }}
          >
            granice lądowe:
          </span>{" "}
          {borders.join(", ")}
        </div>
      );
  }
};

export default Borders;
