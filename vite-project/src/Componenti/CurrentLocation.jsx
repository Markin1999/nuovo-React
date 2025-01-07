import React from "react";
import useCurrentLocation from "./useCurrentLocation";

export default function CurrentLocation() {
  const { location, loading, error, getCurrentLocation } = useCurrentLocation();

  return (
    <div>
      <h1>Posizione Corrente</h1>
      {loading && <p>Caricamento posizione...</p>}
      {error && <p>Errore: {error}</p>}
      {location && (
        <p>
          Latitudine: {location.latitude}, Longitudine: {location.longitude}
        </p>
      )}
      <button onClick={getCurrentLocation}>Ottieni Posizione</button>
    </div>
  );
}
