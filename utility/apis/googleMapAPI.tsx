import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import LocationSearch from '@/components/search/LocationSearch';
import { useMapStore } from 'store/stores/useMapStore';

const GoogleMapContainer: React.FC = () => {
  let googleMapsScriptLoaded = false;
  const { selectedPlace, setSelectedPlace, mapCenter, setMapCenter } = useMapStore();

  const handlePlaceSelect = (place: google.maps.places.PlaceResult | null) => {
    setSelectedPlace(place);
    googleMapsScriptLoaded = true;
    if (place && place.geometry && place.geometry.location) {
      const { lat, lng } = place.geometry.location;
      setMapCenter({ lat: lat(), lng: lng() });
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
      libraries={['places']}
    >
      <GoogleMap
        mapContainerStyle={{ height: '400px', width: '400px' }}
        // @ts-ignore
        center={mapCenter}
        zoom={15}
      >
        {selectedPlace && mapCenter && (
          <Marker position={mapCenter} title={selectedPlace.name || ''} />
        )}
      </GoogleMap>
      <LocationSearch onSelect={handlePlaceSelect} />
    </LoadScript>
  );
};

export default GoogleMapContainer;
