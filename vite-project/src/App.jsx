import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Welcome } from "./componenti/welcome";
import { Counter } from "./componenti/Counter";

import GithubUserList from "./componenti/GitHubUserList";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to={"/"}>Home</Link> | <Link to={"/counter"}>Counter</Link> |
        <Link to={"/users"}> Utenti</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name="Marco" age={25} />} />
        <Route path="counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<p>Aggiungi un utente</p>} />
        </Route>
        <Route path="*" element={<h1>Non trovato</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
