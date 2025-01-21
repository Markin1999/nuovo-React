import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Welcome() {
  return <div className="welcome">Welcome to the App!</div>;
}

function CounterDisplay({ count }) {
  const style = {
    fontSize: "24px",
    color: count % 2 === 0 ? "blue" : "green",
  };

  return <div style={style}>Counter: {count}</div>;
}

function Login() {
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const buttonStyle = {
    backgroundColor: password.length < 8 ? "red" : "green",
    color: "white",
    padding: "10px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={handleChange}
      />
      <button style={buttonStyle}>Login</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Welcome />
      <CounterDisplay count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Login />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
