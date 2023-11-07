import { useContext } from "react";
import { FlagDetailContext } from "../../../contexts/FlagDetailContext";

const Currency = () => {
  const { currencies } = useContext(FlagDetailContext);

  if (currencies) {
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
        {currencies.symbol ? (
          <div style={{ fontSize: 20 }}>{currencies.symbol}</div>
        ) : (
          ""
        )}
        {/* {currencies.name ? <div>{currencies.name}</div> : ""} */}
        {currencies.key ? <div>{currencies.key}</div> : ""}
      </div>
    );
  }
};

export default Currency;
