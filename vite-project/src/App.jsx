import { useState } from "react";
import "./App.css";
import { LanguageContext } from "./Componenti/LanguageContext";
import HelloWorld from "./Componenti/Helloworld";

function App() {
  const [language, setLanguage] = useState("en");

  function handleSetLanguage(language) {
    setLanguage(language);
  }
  return (
    <>
      <button onClick={() => handleSetLanguage("it")}>IT</button>
      <button onClick={() => handleSetLanguage("en")}>EN</button>
      <LanguageContext.Provider value="en">
        <HelloWorld />
      </LanguageContext.Provider>
    </>
  );
}

export default App;
