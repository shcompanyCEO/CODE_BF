import { db } from '@/api/firebase/firebase';
import { doc, setDoc, updateDoc } from 'firebase/firestore';

//살롱모드로 전환
export const addSalonWithId = async (salonCategory: string, salonId: string, salonData: any) => {
  try {
    console.log('add salon', salonCategory, salonId, salonData);
    await setDoc(doc(db, `${salonCategory}`, `${salonId}`), { ...salonData });
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
    alert('Salon added successfully!');
  } catch (error) {
    console.error('Error adding salon:', error);
  }
};
