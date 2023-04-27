import { createContext, useState } from "react";
import {
  Article,
  SearchContextType,
  SearchContextProviderType,
} from "../../types";

export const SearchContext = createContext<SearchContextType>({
  searchedResults: [],
  setSearchedResults: () => {},
  loading: false,
  setLoading: () => {},
  error: false,
  setError: () => {},
});

export const SearchContextProvider = ({
  children,
}: SearchContextProviderType) => {
  const [searchedResults, setSearchedResults] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <SearchContext.Provider
      value={{
        searchedResults,
        setSearchedResults,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
