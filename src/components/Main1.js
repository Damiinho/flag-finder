import React from "react";
import FullList from "./FullList";
import Detail from "./Detail";
import SelectColor from "./SelectColor";
import SelectStripes from "./SelectStripes";
import SelectRegion from "./SelectRegion";
import SelectOther from "./SelectOther";
import "../style/Main.css";

class Main extends React.Component {
  state = {
    flags: [],
    itemOnClick: {
      name: "",
      colors: "",
      img: "",
      region: "",
      stripes: "",
      active: "",
    },
    selectedColors: [],
    selectedStripes: "stripesfree",
    selectedRegion: "anyregion",
    isOtherShipesSelected: "onlywithothershipes",
    isSymbolSelected: "symbolsfree",
    isCountrySelected: "allflags",
  };

  componentDidMount() {
    fetch("data/flag.json")
      .then((res) => res.json())
      .then((flags) => {
        this.setState({
          flags,
        });
      });
  }

  handleSmallOneClick = (item) => {
    this.setState({
      itemOnClick: {
        name: item.name,
        colors: item.colors,
        img: item.img,
        region: item.region,
        stripes: item.stripes,
        active: item.active,
      },
    });
  };

  changeSelectedRegion = (item) => {
    let selectedRegion;

    if (this.state.selectedRegion === item) {
      selectedRegion = "anyregion";
    } else {
      selectedRegion = item;
    }

    this.changeList(selectedRegion);

    this.setState({
      selectedRegion,
    });
  };

  changeSelectedColor = (item) => {
    let selectedColors = [...this.state.selectedColors];

    const isSelectedFilter = (el) => el !== item;
    const findItem = selectedColors.findIndex((el) => el === item);
    if (findItem < 0) {
      selectedColors = [...this.state.selectedColors].concat(item);
    } else {
      selectedColors = selectedColors.filter(isSelectedFilter);
    }

    this.changeList(selectedColors);

    this.setState({
      selectedColors,
    });
  };

  changeSelectedStripes = (item) => {
    let selectedStripes;

    if (this.state.selectedStripes === item) {
      selectedStripes = "stripesfree";
    } else {
      selectedStripes = item;
    }

    this.changeList(selectedStripes);

    this.setState({
      selectedStripes,
    });
  };

  changeSelectedShipes = () => {
    let isOtherShipesSelected;

    if (this.state.isOtherShipesSelected === "onlywithothershipes") {
      isOtherShipesSelected = "anyshipes";
    } else isOtherShipesSelected = "onlywithothershipes";

    this.changeList(isOtherShipesSelected);

    this.setState({
      isOtherShipesSelected,
    });
  };

  changeSelectedSymbols = () => {
    let isSymbolSelected;

    if (this.state.isSymbolSelected === "symbolsfree") {
      isSymbolSelected = "withsymbols";
    } else isSymbolSelected = "symbolsfree";

    this.changeList(isSymbolSelected);

    this.setState({
      isSymbolSelected,
    });
  };

  changeSelectedCountries = () => {
    let isCountrySelected;

    if (this.state.isCountrySelected === "allflags") {
      isCountrySelected = "onlycountries";
    } else isCountrySelected = "allflags";

    this.changeList(isCountrySelected);

    this.setState({
      isCountrySelected,
    });
  };

  handleReset = () => {
    let flags = [...this.state.flags];
    let selectedColors = [];
    let selectedStripes = "stripesfree";
    let selectedRegion = "anyregion";
    let isOtherShipesSelected = "onlywithothershipes";
    let isSymbolSelected = "symbolsfree";
    let isCountrySelected = "allflags";

    [...document.querySelectorAll(".color")].map((el) =>
      el.classList.remove("active")
    );
    [...document.querySelectorAll(".region")].map((el) =>
      el.classList.remove("active")
    );
    [...document.querySelectorAll(".stripes")].map((el) =>
      el.classList.remove("active")
    );
    document
      .querySelector("button.countries")
      .classList.remove("onlycountries");
    document.querySelector("button.countries").textContent =
      "Przeszukaj tylko bazę krajów";

    flags.map((el) => {
      el.active = true;
      return el;
    });

    this.setState({
      flags,
      selectedColors,
      selectedStripes,
      selectedRegion,
      isOtherShipesSelected,
      isSymbolSelected,
      isCountrySelected,
      itemOnClick: {
        name: "",
        colors: "",
        img: "",
        region: "",
        stripes: "",
        active: "",
      },
    });
  };

  changeList = (item) => {
    let flags = [...this.state.flags];
    let selectedStripes = this.state.selectedStripes;
    let selectedColors = this.state.selectedColors;
    let selectedRegion = this.state.selectedRegion;
    let isOtherShipesSelected = this.state.isOtherShipesSelected;
    let isSymbolSelected = this.state.isSymbolSelected;
    let isCountrySelected = this.state.isCountrySelected;

    if (typeof item === "object") {
      selectedColors = item;
    } else if (
      item === "horizontal" ||
      item === "vertical" ||
      item === "stripesfree"
    ) {
      selectedStripes = item;
    } else if (
      item === "europe" ||
      item === "asia" ||
      item === "oceania" ||
      item === "north-america" ||
      item === "south-america" ||
      item === "africa" ||
      item === "carraibean" ||
      item === "antarctica" ||
      item === "anyregion"
    ) {
      selectedRegion = item;
    } else if (item === "anyshipes" || item === "onlywithothershipes") {
      isOtherShipesSelected = item;
    } else if (item === "symbolsfree" || item === "withsymbols") {
      isSymbolSelected = item;
    } else if (item === "onlycountries" || item === "allflags") {
      isCountrySelected = item;
    }

    let backToActive = flags.map((el) => {
      el.active = true;
      return el;
    });

    backToActive.map((el) => {
      if (selectedStripes === "horizontal" && el.horizontalStripes === false) {
        el.active = false;
        return el;
      } else if (
        selectedStripes === "vertical" &&
        el.verticalStripes === false
      ) {
        el.active = false;
        return el;
      }

      return backToActive;
    });

    backToActive.map((el) => {
      if (isOtherShipesSelected === "anyshipes" && el.otherShipes === false) {
        el.active = false;
        return el;
      }
      return backToActive;
    });

    backToActive.map((el) => {
      if (isSymbolSelected === "withsymbols" && el.symbols === false) {
        el.active = false;
        return el;
      }
      return backToActive;
    });

    backToActive.map((el) => {
      if (isCountrySelected === "onlycountries" && el.country === false) {
        el.active = false;
        return el;
      }
      return backToActive;
    });

    selectedColors.map((color) => {
      backToActive.map((el) => {
        let findItem = el.colors.findIndex((item) => item === color);

        if (el.active === false) {
          return el;
        } else if (findItem < 0) {
          el.active = false;
          return el;
        } else {
          el.active = true;
          return el;
        }
      });

      return selectedColors;
    });

    backToActive.map((el) => {
      if (el.active === false) {
        return el;
      } else if (selectedRegion === "europe" && el.region !== "europe") {
        el.active = false;
        return el;
      } else if (selectedRegion === "asia" && el.region !== "asia") {
        el.active = false;
        return el;
      } else if (selectedRegion === "oceania" && el.region !== "oceania") {
        el.active = false;
        return el;
      } else if (
        selectedRegion === "north-america" &&
        el.region !== "north-america"
      ) {
        el.active = false;
        return el;
      } else if (
        selectedRegion === "south-america" &&
        el.region !== "south-america"
      ) {
        el.active = false;
        return el;
      } else if (selectedRegion === "africa" && el.region !== "africa") {
        el.active = false;
        return el;
      } else if (
        selectedRegion === "carraibean" &&
        el.region !== "carraibean"
      ) {
        el.active = false;
        return el;
      } else if (
        selectedRegion === "antarctica" &&
        el.region !== "antarctica"
      ) {
        el.active = false;
        return el;
      }
      return backToActive;
    });
  };

  render() {
    return (
      <div className="main">
        <div className="main-select">
          <div className="select-box">
            <div className="selectors">
              <SelectColor
                click={this.changeSelectedColor}
                selected={this.state.selectedColors}
              />
              <SelectStripes
                click={this.changeSelectedStripes}
                selected={this.state.selectedStripes}
                clickOtherShipes={this.changeSelectedShipes}
                clickSymbols={this.changeSelectedSymbols}
              />
              <SelectRegion
                click={this.changeSelectedRegion}
                selected={this.state.selectedRegion}
              />
              <SelectOther
                clickCountry={this.changeSelectedCountries}
                clickReset={this.handleReset}
                selected={this.state.selectedRegion}
              />
            </div>
            <div className="detail-box">
              <Detail data={this.state.itemOnClick} />
            </div>
          </div>
        </div>

        <div className="main-box">
          <div className="full-list">
            <FullList
              flags={this.state.flags}
              click={this.handleSmallOneClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
