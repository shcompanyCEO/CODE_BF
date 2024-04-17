import { db } from '@/api/firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
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
  hairSalons: Salon[];

  addSalon: (salon: Salon) => void;
  updateSalon: (id: string, updatedSalon: Salon) => void;
  deleteSalon: (id: string) => void;
  saveHairSalons: (hairSalons: Salon[]) => void;
  fetchSalonsFromFirestore: (text: string) => Promise<void>;
}

const useSalonStore = create<SalonStore>((set) => ({
  salons: [],
  hairSalons: [],
  addSalon: (salon) => set((state) => ({ salons: [...state.salons, salon] })),
  updateSalon: (id, updatedSalon) =>
    set((state) => ({
      salons: state.salons.map((salon) => (salon.id === id ? updatedSalon : salon)),
    })),
  deleteSalon: (id) =>
    set((state) => ({
      salons: state.salons.filter((salon) => salon.id !== id),
    })),

  saveHairSalons: (salons) => {
    set({ hairSalons: salons });
  },

  fetchSalonsFromFirestore: async (text: string) => {
    try {
      const salonCollectionRef = collection(db, `${text}`); // Adjust the collection reference as needed
      const salonSnapshot = await getDocs(salonCollectionRef);
      const salonsData = salonSnapshot.docs.map((doc) => doc.data() as Salon);
      set({ hairSalons: salonsData });
    } catch (error) {
      console.error('Error fetching salons:', error);
    }
  },
}));

export default useSalonStore;
