import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GitHubUser from "./Componenti/GithubUser";

function App() {
  const [count, setCount] = useState(0);

  return <GitHubUser />;
}

export default App;
