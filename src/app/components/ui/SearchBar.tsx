import { useState, ChangeEvent } from "react";
import { CiSearch } from "react-icons/ci";

interface SearchBarProps {
  onSearch: (searchValue: string) => void;
  placeholder: string;
  value: string;
  onChange: (newValue: string) => void;
  onClear: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder,
  value,
  onChange,
  onClear,
}) => {
  const [searchValue, setSearchValue] = useState(value || "");

  const handleSearch = () => {
    onSearch(searchValue);
  };

  const handleClear = () => {
    setSearchValue("");
    onClear();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = event.target;
    setSearchValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleChange}
        className="search-bar-input"
      />
      <button type="button" onClick={handleSearch}>
        {/* <CiSearch /> */}
        Search
      </button>
      <button type="button" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};

export default SearchBar;
