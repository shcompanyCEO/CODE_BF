import { create } from 'zustand';
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  serverTimestamp,
  doc,
  updateDoc,
  getDoc,
} from 'firebase/firestore';
import { db } from '@/api/firebase/firebase';

interface Designer {
  id: string;
  email: string;
  status: string;
  invitedAt: any;
}

interface SalonState {
  salonId: string | null;
  designerEmail: string;
  category: string;
  designers: Designer[];
  setSalonId: (salonId: string) => void;
  setDesignerEmail: (email: string) => void;
  setCategory: (category: string) => void;
  fetchDesigners: () => Promise<void>;
  inviteDesigner: (designerId: string) => Promise<void>;
  rejectDesigner: (designerId: string) => Promise<void>;
}

export const InvitationsStore = create<SalonState>((set, get) => ({
  salonId: null,
  designerEmail: '',
  category: '',
  designers: [],
  setSalonId: (salonId) => set({ salonId }),
  setDesignerEmail: (email) => set({ designerEmail: email }),
  setCategory: (category) => set({ category: category }),

  fetchDesigners: async () => {
    const { salonId, category } = get();
    if (salonId) {
      try {
        const invitesRef = collection(db, 'invitations', `hair`, salonId);
        const q = query(invitesRef);
        const querySnapshot = await getDocs(q);
        const designers = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Designer[];
        set({ designers });

        const docRef = doc(db, 'hairSalons', salonId);
        await updateDoc(docRef, {
          designers: designers,
        });
      } catch (error) {
        console.error('Error fetching designers: ', error);
      }
    }
  },
  //수락
  inviteDesigner: async (designerId) => {
    const { salonId, designerEmail, category } = get();
    if (salonId && designerEmail) {
      try {
        const docId = designerEmail.replace(/[@.]/g, '_');
        const userRef = doc(db, 'invitations', 'hair', salonId, designerId);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          alert('Email already applied');
          return;
        }
        const user = { email: designerEmail, status: 'invited', invitedAt: serverTimestamp() };
        await setDoc(userRef, user);
        set({ designerEmail: '' });
        get().fetchDesigners(); // Refresh the list after inviting
      } catch (error) {
        console.error('Error inviting designer: ', error);
      }
    }
  },
  //탈퇴
  rejectDesigner: async (designerId) => {
    const { salonId } = get();
    if (salonId && designerId) {
      try {
        const userRef = doc(db, 'invitations', 'hair', salonId, designerId);
        await updateDoc(userRef, { status: 'rejected' });
        get().fetchDesigners(); // Refresh the list after rejecting
      } catch (error) {
        console.error('Error rejecting designer: ', error);
      }
    }
  },
}));
