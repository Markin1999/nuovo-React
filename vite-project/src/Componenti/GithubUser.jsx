import React from "react";
import useGitHubUser from "./useGitHubUser";

export default function GitHubUser({ username }) {
  const { data, loading, error } = useGitHubUser(username);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Errore: {error}</h1>}
      {data && (
        <div>
          <h1>{data.name || "Nome non disponibile"}</h1>
        </div>
      )}
    </div>
  );
}
