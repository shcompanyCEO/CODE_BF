import { db } from '@/api/firebase/firebase';
import { doc, setDoc, updateDoc } from 'firebase/firestore';

//살롱모드로 전환
export const addSalonWithId = async (category: any, salonId: any, salonData: any) => {
  try {
    await setDoc(doc(db, `${category}`, `${salonId}`), { ...salonData });
    console.log('Salon added successfully!');
  } catch (error) {
    console.error('Error adding salon:', error);
  }
};
//살롱등록후 owner Change
export const salonOwnerFeildChange = async (
  category: string,
  email: string,
  fieldsToUpdate: object
) => {
  try {
    const userDocRef = doc(db, `${category}`, `${email}`);
    await updateDoc(userDocRef, fieldsToUpdate);
    console.log('Salon added successfully!');
  } catch (error) {
    console.error('Error adding salon:', error);
  }
};
