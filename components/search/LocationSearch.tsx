import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { Input } from '../ui/input';
import { salonModChangeeStore } from 'store/stores/useSalonModeChangeStore';

interface LocationSearchProps {
  onSelect: (place: google.maps.places.PlaceResult | null) => void;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ onSelect }) => {
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

  const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      onSelect(place);
    }
  };

  return (
    <div className="mt-3">
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <Input type="text" placeholder="Search for location" />
      </Autocomplete>
    </div>
  );
};

export default LocationSearch;
