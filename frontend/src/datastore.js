import { createContext, useContext, useState } from "react";

export const DataStoreContext = createContext();

export function DataStoreProvider({ children }) {
  const [popSearches, setPopSearches] = useState([]);

  return <DataStoreContext.Provider value={{ popSearches, setPopSearches }}>{children}</DataStoreContext.Provider>;
}

export const useStore = () => useContext(DataStoreContext);
