import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
// import Select from "react-select";

const SelectColor = () => {
  const {
    red,
    setRed,
    claret,
    setClaret,
    white,
    setWhite,
    black,
    setBlack,
    yellow,
    setYellow,
    blue,
    setBlue,
    navyBlue,
    setNavyBlue,
    green,
    setGreen,
    orange,
    setOrange,
    // selectedColors,
    // setSelectedColors,
  } = useContext(AppContext);

  // const styles = {
  //   input: (provided) => ({
  //     ...provided,
  //     color: "#999",
  //   }),
  //   control: (provided) => ({
  //     ...provided,
  //     backgroundColor: "#7e78a35e",
  //     borderColor: "#ccc",
  //     borderRadius: "4px",
  //     boxShadow: "none",
  //     minHeight: "40px",
  //     cursor: "pointer",
  //     "&:hover": {
  //       borderColor: "#999",
  //     },
  //   }),
  //   multiValue: (provided, state) => ({
  //     ...provided,
  //     backgroundColor: (() => {
  //       if (state.data.value === "green") return "green";
  //       else if (state.data.value === "yellow") return "yellow";
  //       else if (state.data.value === "white") return "white";
  //       else if (state.data.value === "black") return "black";
  //       else if (state.data.value === "orange") return "orange";
  //       else if (state.data.value === "blue") return "blue";
  //       else if (state.data.value === "red") return "red";
  //       else return "white"; // domyślny kolor tła dla innych wartości
  //     })(),

  //     color: "#fff",
  //     borderRadius: "4px",
  //     padding: "2px 6px",
  //   }),
  //   option: (provided, state) => ({
  //     ...provided,
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     padding: "5px",
  //     color: "#999",
  //     backgroundColor: state.isSelected
  //       ? "#201e3b"
  //       : state.isFocused
  //       ? "#201e3b"
  //       : "#3d386e",
  //     cursor: "pointer",
  //   }),
  //   menu: (provided) => ({
  //     ...provided,
  //     padding: 0,
  //     borderRadius: "15px",
  //   }),
  //   menuList: (provided) => ({
  //     ...provided,
  //     padding: 0,
  //     backgroundColor: "#3d386e",
  //     borderRadius: "10px",
  //     display: "grid",
  //     gridTemplateColumns: "repeat(7, 1fr)",
  //   }),
  // };

  // const options = [
  //   { value: "white", label: "Biały" },
  //   { value: "black", label: "Czarny" },
  //   { value: "red", label: "Czerwony" },
  //   { value: "yellow", label: "Żółty" },
  //   { value: "blue", label: "Niebieski" },
  //   { value: "green", label: "Zielony" },
  //   { value: "orange", label: "Pomorańczowy" },
  // ];

  // const handleSelect = (item) => {
  //   setSelectedColors(item);
  // };

  // const formatOptionLabel = ({ value }) => (
  //   <div
  //     style={{
  //       backgroundColor: value,
  //       height: "20px",
  //       width: "20px",
  //       borderRadius: "10px",
  //     }}
  //   />
  // );

  return (
    <div className="selectors__colors">
      <p className="selectors__colors-description">wybierz kolory</p>

      {/* <Select
        isMulti
        placeholder="wszystkie"
        styles={styles}
        value={selectedColors}
        options={options}
        onChange={(item) => handleSelect(item)}
        formatOptionLabel={formatOptionLabel}
      /> */}

      <div className="selectors__colors__button-box">
        <button
          className={`color white ${white ? "active" : ""}`}
          onClick={() => {
            setWhite(!white);
          }}
        ></button>
        <button
          className={`color black ${black ? "active" : ""}`}
          onClick={() => {
            setBlack(!black);
          }}
        ></button>
        <button
          className={`color red ${red ? "active" : ""}`}
          onClick={() => {
            setRed(!red);
          }}
        ></button>
        <button
          className={`color claret ${claret ? "active" : ""}`}
          onClick={() => {
            setClaret(!claret);
          }}
        ></button>
        <button
          className={`color yellow ${yellow ? "active" : ""}`}
          onClick={() => {
            setYellow(!yellow);
          }}
        ></button>
        <button
          className={`color blue ${blue ? "active" : ""}`}
          onClick={() => {
            setBlue(!blue);
          }}
        ></button>
        <button
          className={`color navyblue ${navyBlue ? "active" : ""}`}
          onClick={() => {
            setNavyBlue(!navyBlue);
          }}
        ></button>
        <button
          className={`color green ${green ? "active" : ""}`}
          onClick={() => {
            setGreen(!green);
          }}
        ></button>
        <button
          className={`color orange ${orange ? "active" : ""}`}
          onClick={() => {
            setOrange(!orange);
          }}
        ></button>
      </div>
    </div>
  );
};

export default SelectColor;
