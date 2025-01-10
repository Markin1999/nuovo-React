import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HookCounter from "./Componenti/HookCounter";
import GitHubUser from "./Componenti/GithubUser";
import LoginForm from "./Componenti/loginForm";

const App = () => {
  const people = [
    { id: 1, name: "Mario", age: 17 },
    { id: 2, name: "Luigi", age: 20 },
    { id: 3, name: "Giulia", age: 19 },
    { id: 4, name: "Francesca", age: 16 },
  ];

  return (
    <div>
      <h1>Elenco filtrato</h1>
      <FilteredList list={people} />
    </div>
  );
};

export default App;
