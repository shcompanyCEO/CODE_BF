import { db } from '@/api/firebase/firebase';
import { useQuery } from '@tanstack/react-query';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
//서비스에 가입한 모든 유저 정보 가져오기

export const getAllusers = async () => {
  const querySnapshot = await getDocs(collection(db, 'users'));
  const users = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return users;
};
//유저 정보 가져오기
export const getUser = async (userEmail: string) => {
  const docRef = doc(db, 'users', `${userEmail}`);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
//로그인시 가입된 유저가 아니라면 유저 데이터베이스에 유저 추가
export const setUserAdd = async (userEmail: string, userData: object) => {
  try {
    await setDoc(doc(db, 'users', `${userEmail}`), { userData });
  } catch (error) {
    console.log('setUserAdd', error);
  }
};
