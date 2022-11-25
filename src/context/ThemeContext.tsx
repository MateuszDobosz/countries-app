import { useState, createContext, ReactNode, useContext } from 'react';

export type ThemeContextType = {
  colorMode: string;
  toggleTheme: () => void;
};
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ThemeContext = createContext<ThemeContextType>({ colorMode: '', toggleTheme: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorMode, setColorMode] = useState('light');

  const toggleTheme = () => {
    setColorMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ colorMode, toggleTheme }}>{children}</ThemeContext.Provider>;
}
