import React from "react";
import useForm from "./useForm";

export default function LoginForm() {
  const { values, handleChange } = useForm({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dati inviati:", values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nome utente:
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            placeholder="Inserisci il nome utente"
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Inserisci la password"
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
