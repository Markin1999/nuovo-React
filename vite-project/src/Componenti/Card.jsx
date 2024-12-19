import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function Card({ children }) {
  const { language, handleClick } = useContext(LanguageContext);
  return (
    <div style={{ backgroundColor: language === "it" ? "blue" : "green" }}>
      {children}
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
