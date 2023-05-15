import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";

const SelectSearch = () => {
  const {
    flags,
    inputValue,
    setInputValue,
    setSelectedSmallOne,
    setSearchTerm,
  } = useContext(AppContext);
  const [inputIsFocused, setInputIsFocused] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = (value) => {
    setInputIsFocused(value);
  };

  const handleSugestionClick = (item) => {
    setInputValue(item.name);
    setSelectedSmallOne(item);
    setSearchTerm(item.name);
  };
  const handleInputSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };

  return (
    <form className="selectors__input-box" onSubmit={handleInputSubmit}>
      <input
        className="selectors__input-box__input"
        placeholder="wpisz nazwę kraju"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => handleInputFocus(true)}
        onBlur={() => setTimeout(() => handleInputFocus(false), 200)}
      />
      {inputIsFocused && inputValue ? (
        <div className="selectors__input-box__sugestion">
          {flags
            .filter((item) => {
              const searchTerm = inputValue.toLowerCase();
              const name = item.name.toLowerCase();

              return (
                searchTerm && name.startsWith(searchTerm) && name !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                key={item.id}
                className="selectors__input-box__sugestion-item"
                onClick={() => handleSugestionClick(item)}
              >
                {item.name}
              </div>
            ))}
        </div>
      ) : null}
    </form>
  );
};

export default SelectSearch;
