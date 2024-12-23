import { useState } from "react";
import GitHubUsers from "./GitHubUsers";

export default function GitHubUser() {
  const [username, setUsername] = useState("");
  const [lista, setLista] = useState([]);

  const onchange = (event) => {
    setUsername(event.target.value);
  };

  const handleclick = (event) => {
    event.preventDefault();
    setLista((prev) => [...prev, username.trim()]);
  };

  return (
    <div>
      <form onSubmit={handleclick}>
        <label htmlFor="username">Username:</label>
        <input type="text" value={username} onChange={onchange} />
        <button type="submit">Add User</button>
      </form>

      <ul>
        {lista.map((user, index) => (
          <li key={index}>
            <GitHubUsers username={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}
