// context/RefreshContext.tsx
"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

interface RefreshContextType {
  refresh: number;
  handleRefresh: () => void;
}

const RefreshContext = createContext<RefreshContextType | undefined>(undefined);

export function RefreshProvider({children}: {children: ReactNode}) {
  const [refresh, setRefresh] = useState(0);

  const handleRefresh = useCallback(() => {
    setRefresh((prev) => prev + 1);
  }, []);

  return (
    <RefreshContext.Provider value={{refresh, handleRefresh}}>
      {children}
    </RefreshContext.Provider>
  );
}

export function useRefresh() {
  const context = useContext(RefreshContext);
  if (!context) {
    throw new Error("useRefresh must be used within a RefreshProvider");
  }
  return context;
}
