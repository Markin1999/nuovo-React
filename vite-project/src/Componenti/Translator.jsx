import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function Translator() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <h2>{language === "it" ? "Hello, World" : "Ciao, mondo"}</h2>
    </>
  );
}
