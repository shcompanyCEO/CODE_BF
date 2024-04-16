import { create } from 'zustand';

interface Salon {
  id: string;
  name: string;
  address: string;
  salonPhoneNumber: string;
  location: {
    latitude: number;
    longitude: number;
  };
  // Other salon information
}

interface SalonStore {
  salons: Salon[];
  addSalon: (salon: Salon) => void;
  updateSalon: (id: string, updatedSalon: Salon) => void;
  deleteSalon: (id: string) => void;
}

const useSalonStore = create<SalonStore>((set) => ({
  salons: [],
  addSalon: (salon) => set((state) => ({ salons: [...state.salons, salon] })),
  updateSalon: (id, updatedSalon) =>
    set((state) => ({
      salons: state.salons.map((salon) => (salon.id === id ? updatedSalon : salon)),
    })),
  deleteSalon: (id) =>
    set((state) => ({
      salons: state.salons.filter((salon) => salon.id !== id),
    })),
}));

export default useSalonStore;
