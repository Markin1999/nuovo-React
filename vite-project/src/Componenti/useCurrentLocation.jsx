import { useState } from "react";

export default function useCurrentLocation() {
  const [location, setLocation] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("La geolocalizzazione non è supportata dal tuo browser");
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLocation(null);
        setLoading(false);
      }
    );
  };

  return {
    location,
    loading,
    error,
    getCurrentLocation,
  };
}
