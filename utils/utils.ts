import { db } from '@/api/firebase/firebase';
import { type ClassValue, clsx } from 'clsx';
import { collection, getDocs } from 'firebase/firestore';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const fetchHairSalons = async () => {
  try {
    const salonsSnapshot = await getDocs(collection(db, 'hairSalons'));
    const allSalonsData = salonsSnapshot.docs.map((doc) => doc.data());
    return allSalonsData;
  } catch (error) {
    console.error('Error fetching salons:', error);
  }
};
