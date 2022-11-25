import { FunctionComponent } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useQuery } from '../../context/QueryContext';
import { useTheme } from '../../context/ThemeContext';
import './searchBar.scss';

const SearchBar: FunctionComponent = () => {
  const [query, setQuery] = useQuery();
  const { colorMode } = useTheme();
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
