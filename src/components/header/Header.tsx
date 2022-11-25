import { FunctionComponent } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaMoon } from 'react-icons/fa';
import './header.scss';

const Header: FunctionComponent = () => {
  const { colorMode, toggleTheme } = useTheme();
  return (
    <header className={`header ${colorMode}`}>
      <div className="header__container">
        <h1 className="header__title">Where in the world? 🚀</h1>
        <button className="header__color-mode-toggle" onClick={toggleTheme}>
          <span>
            <FaMoon />
          </span>
          Dark mode{' '}
        </button>
      </div>
    </header>
  );
};

export default Header;
