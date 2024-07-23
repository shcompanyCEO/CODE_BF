import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  collection,
  query,
  getDocs,
  setDoc,
  serverTimestamp,
  doc,
  updateDoc,
  getDoc,
  where,
} from 'firebase/firestore';
import { db } from '@/api/firebase/firebase';
import { useInvitationsStore } from 'store/stores/employeeManagement/useInvitationsStore';

interface Designer {
  id: string;
  email: string;
  status: string;
  invitedAt: any;
}

const fetchDesigners = async (email: string): Promise<Designer[]> => {
  const designersRef = collection(db, 'users');
  const q = query(
    designersRef,
    where('email', '>=', email),
    where('email', '<=', email + '\uf8ff')
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Designer[];
};

const fetchInvitedDesigners = async (salonId: string, category: string): Promise<Designer[]> => {
  const invitationsRef = collection(db, 'invitations', category, salonId);
  const q = query(invitationsRef, where('status', '==', 'invited'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Designer));
};

const inviteDesigner = async ({ salonId, designerId }: { salonId: string; designerId: string }) => {
  const invitationRef = doc(db, 'invitations', salonId, designerId);
  const userRef = doc(db, 'users', designerId);
  const userDoc = await getDoc(userRef);
  if (!userDoc.exists()) {
    throw new Error('Designer does not exist');
  }
  const user = userDoc.data();
  await setDoc(invitationRef, { ...user, status: 'invited', invitedAt: serverTimestamp() });
};

const acceptInvitation = async ({
  salonId,
  designerId,
}: {
  salonId: string;
  designerId: string;
}) => {
  const invitationRef = doc(db, 'invitations', salonId, designerId);
  const userRef = doc(db, 'users', designerId);
  await updateDoc(invitationRef, { status: 'accepted' });

  const salonRef = doc(db, 'salons', salonId);
  const salonDoc = await getDoc(salonRef);
  if (!salonDoc.exists()) {
    throw new Error('Salon does not exist');
  }
  const salonData = salonDoc.data();
  await updateDoc(userRef, { salonId, salonData });
};

export const useInvitedDesigners = (salonId: string | undefined, category: string | undefined) => {
  return useQuery({
    queryKey: ['invitedDesigners', salonId, category],
    queryFn: () => fetchInvitedDesigners(salonId!, category!),
    enabled: !!salonId && !!category,
  });
};

export const useInvitationsQuery = () => {
  const { salonId, designerEmail, category, setSalonId, setDesignerEmail, setCategory } =
    useInvitationsStore();
  const queryClient = useQueryClient();
  const [searchEmail, setSearchEmail] = useState<string>('');

  const { data: designers, refetch } = useQuery({
    queryKey: ['designers', searchEmail],
    queryFn: () => fetchDesigners(searchEmail),
    enabled: !!searchEmail,
  });

  const inviteMutation = useMutation({
    mutationFn: inviteDesigner,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['invitations', salonId],
      });
    },
  });

  const acceptMutation = useMutation({
    mutationFn: acceptInvitation,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['invitations', salonId],
      });
    },
  });

  const handleInvite = async (designerId: string) => {
    try {
      await inviteMutation.mutateAsync({ salonId: salonId!, designerId });
    } catch (error) {
      console.error('Error inviting designer: ', error);
    }
  };

  const handleAccept = async (designerId: string) => {
    try {
      await acceptMutation.mutateAsync({ salonId: salonId!, designerId });
    } catch (error) {
      console.error('Error accepting invitation: ', error);
    }
  };

  const handleSearchByEmail = (email: string) => {
    setSearchEmail(email);
    refetch();
  };

  return {
    salonId,
    designerEmail,
    category,
    designers,
    setSalonId,
    setDesignerEmail,
    setCategory,
    handleInvite,
    handleAccept,
    handleSearchByEmail,
  };
};
