import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchContaxt = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [focus, setFocus] = useState(false);
  const focusToggle = () => setFocus(!focus);

  return (
    <SearchContext.Provider
      value={{ searchValue, setSearchValue, setFocus, focus, focusToggle }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
