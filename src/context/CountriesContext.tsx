// import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// export type ThemeContextType = {
//   countries: [];
// };

// export const CountriesContext = createContext<ThemeContextType | null>(null);

// export function useCounties() {
//   return useContext(CountriesContext);
// }

// export function CountriesProvider({ children }: { children: ReactNode }) {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const data = await fetch(`https://restcountries.com/v3.1/all`);
//       const json = (await data.json()) as [];
//       setCountries(json);
//     }
//     fetchData();
//   }, []);

//   // const  = () => {
//   //   setColorMode((prev) => (prev === 'light' ? 'dark' : 'light'));
//   // };

//   return <CountriesContext.Provider value={{ countries }}>{children}</CountriesContext.Provider>;
// }
