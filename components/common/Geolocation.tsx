import useGeolocation from '@/hooks/useGeolocation';
import React from 'react';

const Geolocation: React.FC = () => {
  const { position, error } = useGeolocation();

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!position) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Your current location:</h1>
      <p>Latitude: {position.latitude}</p>
      <p>Longitude: {position.longitude}</p>
    </div>
  );
};

export default Geolocation;
