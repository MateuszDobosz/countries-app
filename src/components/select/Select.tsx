import { FunctionComponent } from 'react';
import { useRegion } from '../../context/RegionContext';
import { useTheme } from '../../context/ThemeContext';
import './select.scss';

const Select: FunctionComponent = () => {
  const { region, setRegion } = useRegion();
  const { colorMode } = useTheme();
  return (
    <select className={`region-select ${colorMode}`} value={region} onChange={(e) => setRegion(e.target.value)}>
      <option value="" disabled>
        Filter by Region
      </option>
      <option className="region-option" value="all">
        All
      </option>
      <option className="region-option" value="africa">
        Africa
      </option>
      <option className="region-option" value="america">
        America
      </option>
      <option className="region-option" value="asia">
        Asia
      </option>
      <option className="region-option" value="europe">
        Europe
      </option>
      <option className="region-option" value="oceania">
        Oceania
      </option>
    </select>
  );
};

export default Select;
