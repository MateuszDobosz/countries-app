import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const RegionContext = createContext<[string, Dispatch<SetStateAction<string>>]>(['', () => {}]);

export function useRegion() {
  return useContext(RegionContext);
}

export function RegionProvider({ children }: { children: ReactNode }) {
  const regionState = useState('');

  return <RegionContext.Provider value={regionState}>{children}</RegionContext.Provider>;
}
