import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  collection,
  getDocs,
  setDoc,
  serverTimestamp,
  doc,
  getDoc,
  query,
  where,
} from 'firebase/firestore';
import { db } from '@/api/firebase/firebase';

interface Designer {
  id: string;
  email: string;
  salon: any; // Adjust this to match the actual type of salon
}

const searchDesigners = async (email: string) => {
  const designersRef = collection(db, 'users');
  const q = query(
    designersRef,
    where('email', '>=', email),
    where('email', '<=', email + '\uf8ff')
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() } as Designer))
    .filter((user) => user.salon === null);
};

const inviteDesigner = async ({
  salonId,
  category,
  designerId,
}: {
  salonId: string;
  category: string;
  designerId: string;
}) => {
  const userRef = doc(db, 'invitations', category, salonId, designerId);
  const userDoc = await getDoc(userRef);

  if (userDoc.exists()) {
    throw new Error('Designer already invited');
  }

  const designerDoc = await getDoc(doc(db, 'users', designerId));
  if (!designerDoc.exists()) {
    throw new Error('Designer does not exist');
  }

  const designer = designerDoc.data();
  const invitation = { ...designer, status: 'invited', invitedAt: serverTimestamp() };
  await setDoc(userRef, invitation);
};

export const useSearchDesigners = (email: string) => {
  return useQuery({
    queryKey: ['searchDesigners', email],
    queryFn: () => searchDesigners(email),
    enabled: !!email,
  });
};

export const useInviteDesigner = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: inviteDesigner,
    onSuccess: (_, { salonId, category }) => {
      queryClient.invalidateQueries({
        queryKey: ['invitedDesigners', salonId, category],
      });
    },
  });
};
