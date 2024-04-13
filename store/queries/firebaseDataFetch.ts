import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '@/api/firebase/firebase';

//서비스에 가입한 모든 유저 정보 가져오기
export const getUsers = async () => {
  const querySnapshot = await getDocs(collection(db, 'users'));
  const users = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return users;
};

//로그인시 가입된 유저가 아니라면 유저 데이터베이스에 유저 추가
export const setUserAdd = async (userEmail: string, userData: object) => {
  try {
    await setDoc(doc(db, 'users', `${userEmail}`), { userData });
  } catch (error) {
    console.log('setUserAdd', error);
  }
};
