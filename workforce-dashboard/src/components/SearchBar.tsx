import { useEffect, useRef } from "react";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  return (
  <div className="search-container">
    <input className="search-input"
      ref={searchRef}
      type="text"
      placeholder="Search by Name or Employee ID"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
);
};

export default SearchBar;