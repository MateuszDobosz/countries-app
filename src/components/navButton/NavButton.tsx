import { FunctionComponent, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './navButton.scss';

interface NavButtonProps {
  to: string;
  children: ReactNode;
}

const NavButton: FunctionComponent<NavButtonProps> = ({ to, children }) => {
  const { colorMode } = useTheme();
  return (
    <Link to={to} className={`link ${colorMode}`}>
      <button>{children}</button>
    </Link>
  );
};

export default NavButton;
