import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") === "false" ? false : true;
  });

  return (
    <AuthContext.Provider value={[language, setLanguage]}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
