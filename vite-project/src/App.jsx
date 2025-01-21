import { useState } from "react";
import "./App.css";
import Chat from "./Componenti/chat";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Crea chat</h1>
      <Chat />
    </>
  );
}

export default App;
