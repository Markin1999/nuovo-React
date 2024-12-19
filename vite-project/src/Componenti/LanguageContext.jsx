import { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("it");

  const handleClick = () => {
    setLanguage((prevLanguage) => (prevLanguage === "it" ? "en" : "it"));
  };

  return (
    <LanguageContext.Provider value={{ language, handleClick }}>
      {children}
    </LanguageContext.Provider>
  );
}
