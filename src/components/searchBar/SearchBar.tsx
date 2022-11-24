import { FunctionComponent } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { QueryContextType, useQuery } from '../../context/QueryContext';
import { ThemeContextType, useTheme } from '../../context/ThemeContext';
import './searchBar.scss';

const SearchBar: FunctionComponent = () => {
  const { query, setQuery } = useQuery() as QueryContextType;
  const { colorMode } = useTheme() as ThemeContextType;
  return (
    <div className={`wrapper ${colorMode}`}>
      <AiOutlineSearch className="icon" />
      <input
        type="text"
        className="input"
        placeholder="Search for a country..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </div>
  );
};

export default SearchBar;
