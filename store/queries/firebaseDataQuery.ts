import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '@/api/firebase/firebase';
import useSalonStore from 'store/stores/useSalonStore';

//모든 헤어 살롱
//All hair=Salons
export const getHairSalons = async () => {
  const salonsSnapshot = await getDocs(collection(db, 'hairSalons'));
  return salonsSnapshot;
};
//All make-up Salons
export const getMakeUpSalons = async () => {
  const salonsSnapshot = await getDocs(collection(db, 'makeUpSalons'));
};
//All nail Salons
export const getNailSalons = async () => {
  const salonsSnapshot = await getDocs(collection(db, 'nailSalons'));
};

export const addSalonWithId = async (category: any, salonId: any, salonData: any) => {
  try {
    // Add salon data to the respective category collection with the custom ID
    // await db.collection(category).doc(salonId).set(salonData);
    await setDoc(doc(db, `${category}`, `${salonId}`), { salonData });
  } catch (error) {
    console.error('Error adding salon:', error);
  }
};
