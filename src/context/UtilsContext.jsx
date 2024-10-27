import React, { createContext, useState, useContext } from "react";

// Create the context
const UtilsContext = createContext();

// Context provider component
export const UtilsContextProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [mobileShow, setMobileShow] = useState(false);

  return (
    <UtilsContext.Provider value={{ isSidebar, setIsSidebar, mobileShow, setMobileShow }}>
      {children}
    </UtilsContext.Provider>
  );
};

// Custom hook to use the UtilsContext
export const useUtils = () => {
  const utilsContext = useContext(UtilsContext);

  // Check if the context is not available (this ensures the hook is used within a provider)
  if (!utilsContext) {
    return null;
  }

  return utilsContext;
};
