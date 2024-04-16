import { create } from 'zustand';

interface MapState {
  selectedPlace: google.maps.places.PlaceResult | null;
  mapCenter: google.maps.LatLngLiteral | null;
  setSelectedPlace: (place: google.maps.places.PlaceResult | null) => void;
  setMapCenter: (center: google.maps.LatLngLiteral | null) => void;
}

interface Action {
  setSelectedPlace: (place: google.maps.places.PlaceResult | null) => void;
  setMapCenter: (center: google.maps.LatLngLiteral | null) => void;
}

export const useMapStore = create<MapState & Action>((set) => ({
  selectedPlace: null,
  mapCenter: null,
  setSelectedPlace: (place) => set({ selectedPlace: place }),
  setMapCenter: (center) => set({ mapCenter: center }),
}));
