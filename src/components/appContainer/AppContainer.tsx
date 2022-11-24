import { FunctionComponent, ReactNode } from 'react';
import { ThemeContextType, useTheme } from '../../context/ThemeContext';
import './appContainer.scss';

interface AppContainerProps {
  children: ReactNode;
}

const AppContainer: FunctionComponent<AppContainerProps> = ({ children }: AppContainerProps) => {
  const { colorMode } = useTheme() as ThemeContextType;
  return <div className={`app ${colorMode}`}>{children}</div>;
};

export default AppContainer;
