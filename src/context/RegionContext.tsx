import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

export type RegionContextType = {
  region: string;
  setRegion: Dispatch<SetStateAction<string>>;
};

export const RegionContext = createContext<RegionContextType | null>(null);

export function useRegion() {
  return useContext(RegionContext);
}

export function RegionProvider({ children }: { children: ReactNode }) {
  const [region, setRegion] = useState('');

  return <RegionContext.Provider value={{ region, setRegion }}>{children}</RegionContext.Provider>;
}
