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
  designers: Designer[];
  setSalonId: (salonId: string) => void;
  setDesignerEmail: (email: string) => void;
  fetchDesigners: () => Promise<void>;
  inviteDesigner: () => Promise<void>;
  rejectDesigner: (designerId: string) => Promise<void>;
}

export const InvitationsStore = create<SalonState>((set, get) => ({
  salonId: null,
  designerEmail: '',
  designers: [],
  setSalonId: (salonId) => set({ salonId }),
  setDesignerEmail: (email) => set({ designerEmail: email }),
  fetchDesigners: async () => {
    const { salonId } = get();
    if (salonId) {
      try {
        const invitesRef = collection(db, 'invitations', salonId, 'invites');
        const q = query(invitesRef);
        const querySnapshot = await getDocs(q);
        const designers = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Designer[];
        set({ designers });
      } catch (error) {
        console.error('Error fetching designers: ', error);
      }
    }
  },
  inviteDesigner: async () => {
    const { salonId, designerEmail } = get();
    if (salonId && designerEmail) {
      try {
        const docId = designerEmail.replace(/[@.]/g, '_');
        const userRef = doc(db, 'invitations', salonId, 'invites', docId);
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
  rejectDesigner: async (designerId) => {
    const { salonId } = get();
    if (salonId && designerId) {
      try {
        const userRef = doc(db, 'invitations', salonId, 'invites', designerId);
        await updateDoc(userRef, { status: 'rejected' });
        get().fetchDesigners(); // Refresh the list after rejecting
      } catch (error) {
        console.error('Error rejecting designer: ', error);
      }
    }
  },
}));
