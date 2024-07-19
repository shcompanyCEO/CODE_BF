import { useState, useEffect } from 'react';

interface GeolocationPosition {
  coords: {
    latitude: number;
    longitude: number;
  };
}

const useGeolocation = () => {
  const [position, setPosition] = useState<{ latitude: number; longitude: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    const handleSuccess = (position: GeolocationPosition) => {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    };

    const handleError = (error: GeolocationPositionError) => {
      setError(error.message);
    };

    const watcher = navigator.geolocation.watchPosition(handleSuccess, handleError);

    return () => {
      navigator.geolocation.clearWatch(watcher);
    };
  }, []);

  return { position, error };
};

export default useGeolocation;
