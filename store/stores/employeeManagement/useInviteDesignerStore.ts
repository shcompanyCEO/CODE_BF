import { create } from 'zustand';
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
  invitedAt?: any;
  status?: string;
}

interface SalonState {
  salonId: string | null;
  designerEmail: string;
  category: string;
  searchResults: Designer[];
  invitedDesigners: Designer[];
  setSalonId: (salonId: string) => void;
  setCategory: (category: string) => void;
  setDesignerEmail: (email: string) => void;
  searchDesignerByEmail: (email: string) => void;
  inviteDesigner: (designerId: string) => Promise<void>;
  fetchInvitedDesigners: () => Promise<void>;
}

interface InvitationsState {
  salonId: string | null;
  designerEmail: string;
  category: string;
  setSalonId: (salonId: string) => void;
  setDesignerEmail: (email: string) => void;
  setCategory: (category: string) => void;
}

export const InviteDesignerStore = create<SalonState>((set, get) => ({
  salonId: null,
  designerEmail: '',
  category: '',
  searchResults: [],
  invitedDesigners: [],
  setSalonId: (salonId) => set({ salonId }),
  setCategory: (category) => set({ category }),
  setDesignerEmail: (email) => set({ designerEmail: email }),

  searchDesignerByEmail: async (email: string) => {
    const designersRef = collection(db, 'users');
    const q = query(
      designersRef,
      where('email', '>=', email),
      where('email', '<=', email + '\uf8ff')
    );
    const querySnapshot = await getDocs(q);
    const designers = querySnapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() } as Designer))
      .filter((user) => user.salon === null);
    set({ searchResults: designers });
  },

  inviteDesigner: async (designerId: string) => {
    const { salonId, category } = get();

    if (salonId && designerId) {
      try {
        const userRef = doc(db, 'invitations', category, salonId, designerId);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          alert('Designer already invited');
          return;
        }

        const designerDoc = await getDoc(doc(db, 'users', designerId));
        if (!designerDoc.exists()) {
          alert('Designer does not exist');
          return;
        }

        const designer = designerDoc.data();
        const invitation = { ...designer, status: 'invited', invitedAt: serverTimestamp() };
        await setDoc(userRef, invitation);

        set({ designerEmail: '' });
      } catch (error) {
        console.error('Error inviting designer: ', error);
      }
    }
  },

  fetchInvitedDesigners: async () => {
    const { salonId, category } = get();
    if (salonId && category) {
      const invitationsRef = collection(db, 'invitations', category, salonId);
      const q = query(invitationsRef, where('status', '==', 'invited'));
      const querySnapshot = await getDocs(q);
      const invitedDesigners = querySnapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as Designer)
      );
      set({ invitedDesigners });
    }
  },
}));
