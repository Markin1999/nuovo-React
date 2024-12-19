import { useContext, useEffect, useState } from "react";
import "./App.css";
import Card from "./Componenti/Card";
import Translator from "./Componenti/Translator";
import { LanguageProvider } from "./Componenti/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Card>
        <Translator />
      </Card>
    </LanguageProvider>
  );
}

export default App;
