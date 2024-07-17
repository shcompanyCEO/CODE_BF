import { db } from '@/api/firebase/firebase';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { queryKeys } from './queryKeys';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

//salon data Change ALL
// Define the salon interfaces
interface Designers {
  email: string;
  openTime: string;
  weeklyOffDays: Array<string>;
  holidays: Array<Date>;
}

interface Salon {
  salonId: string;
  salonName: string;
  address: string;
  salonIntroduction: string;
  salonPhoneNumber: string;
  openTime: string;
  closeTime: string;
  ownerName: string;
  location: {
    latitude: number;
    longitude: number;
  };
  designers: Designers[];
}

// Fetch salons from Firestore
const fetchSalonsFromFirestore = async (text: string): Promise<Salon[]> => {
  const salonCollectionRef = collection(db, `${text}`);
  const salonSnapshot = await getDocs(salonCollectionRef);
  return salonSnapshot.docs.map((doc) => doc.data() as Salon);
};

// Add salon to Firestore
const addSalonToFirestore = async (newSalon: Omit<Salon, 'salonId'>): Promise<void> => {
  const salonCollectionRef = collection(db, 'salons'); // Adjust collection name as needed
  await addDoc(salonCollectionRef, newSalon);
};

// Update salon in Firestore
const updateSalonInFirestore = async (id: string, updatedSalon: Partial<Salon>): Promise<void> => {
  const salonDocRef = doc(db, 'salons', id); // Adjust collection name as needed
  await updateDoc(salonDocRef, updatedSalon);
};

// Delete salon from Firestore
const deleteSalonFromFirestore = async (id: string): Promise<void> => {
  const salonDocRef = doc(db, 'salons', id); // Adjust collection name as needed
  await deleteDoc(salonDocRef);
};

// Custom hook to use salons data
export const useSalons = (text: string) => {
  return useQuery({
    queryKey: [queryKeys.salons, text],
    queryFn: () => fetchSalonsFromFirestore(text),
  });
};

// Custom hook to use hair salons data
export const useHairSalons = (text: string) => {
  return useQuery({
    queryKey: [queryKeys.hairSalons, text],
    queryFn: () => fetchSalonsFromFirestore(text),
  });
};

// Mutation hooks for add, update, and delete operations
export const useAddSalon = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newSalon: Omit<Salon, 'salonId'>) => addSalonToFirestore(newSalon),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.salons] });
    },
  });
};

export const useUpdateSalon = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, updatedSalon }: { id: string; updatedSalon: Partial<Salon> }) =>
      updateSalonInFirestore(id, updatedSalon),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.salons] });
    },
  });
};

export const useDeleteSalon = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteSalonFromFirestore(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.salons] });
    },
  });
};
