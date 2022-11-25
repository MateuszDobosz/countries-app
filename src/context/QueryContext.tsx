import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const QueryContext = createContext<[string, Dispatch<SetStateAction<string>>]>(['', () => {}]);

export function useQuery() {
  return useContext(QueryContext);
}

export function QueryProvider({ children }: { children: ReactNode }) {
  const queryState = useState('');

  return <QueryContext.Provider value={queryState}>{children}</QueryContext.Provider>;
}
