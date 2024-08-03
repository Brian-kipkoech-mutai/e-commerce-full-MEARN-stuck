import React, { createContext, useState } from "react";

export const authContext = createContext();
function AuthProvider({ children }) {
  const [isAuthenicated, setAuthentication] = useState(false);

  return (
    <authContext.Provider value={{ isAuthenicated, setAuthentication }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;
