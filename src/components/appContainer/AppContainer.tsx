import { FunctionComponent, ReactNode } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './appContainer.scss';

interface AppContainerProps {
  children: ReactNode;
}

const AppContainer: FunctionComponent<AppContainerProps> = ({ children }: AppContainerProps) => {
  const { colorMode } = useTheme();
  return <div className={`app ${colorMode}`}>{children}</div>;
};

export default AppContainer;
