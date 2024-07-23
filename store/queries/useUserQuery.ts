import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '@/api/firebase/firebase';

const fetchAllUsers = async () => {
  const querySnapshot = await getDocs(collection(db, 'users'));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const useAllUsers = () => {
  return useQuery({
    queryKey: ['allUsers'],
    queryFn: fetchAllUsers,
  });
};

const fetchUserUser = async (userEmail: string) => {
  const docRef = doc(db, 'users', userEmail);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const useUserQuery = (userEmail: string) => {
  return useQuery({
    queryKey: ['user', userEmail],
    queryFn: () => fetchUserUser(userEmail),
    enabled: !!userEmail,
  });
};
