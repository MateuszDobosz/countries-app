import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

export type QueryContextType = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

export const QueryContext = createContext<QueryContextType | null>(null);

export function useQuery() {
  return useContext(QueryContext);
}

export function QueryProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState('');

  return <QueryContext.Provider value={{ query, setQuery }}>{children}</QueryContext.Provider>;
}
