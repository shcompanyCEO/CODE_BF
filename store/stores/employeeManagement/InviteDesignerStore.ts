import { create } from 'zustand';
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
  setDoc,
  doc,
  getDoc,
} from 'firebase/firestore';
import { db } from '@/api/firebase/firebase';

interface SalonState {
  salonId: string | null;
  designerEmail: string;
  setSalonId: (salonId: string) => void;
  setDesignerEmail: (email: string) => void;
  inviteDesigner: () => Promise<void>;
}

export const InviteDesignerStore = create<SalonState>((set, get) => ({
  salonId: null,
  designerEmail: '',
  setSalonId: (salonId) => set({ salonId }),
  setDesignerEmail: (email) => set({ designerEmail: email }),
  inviteDesigner: async () => {
    const { salonId, designerEmail } = get();
    console.log('sean @@@@@@@', salonId, designerEmail);

    if (salonId && designerEmail) {
      try {
        // Prepare the document ID by replacing characters that are not allowed in Firestore document IDs
        const docId = designerEmail.replace(/[@.]/g, '_');
        const userRef = doc(db, 'invitations', salonId, 'invites', docId);

        // Check if the user document already exists
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          alert('Email already applied');
          return;
        }
        // If the user does not exist, add the new user document directly under the salon document
        const user = { email: designerEmail, status: 'invited', invitedAt: serverTimestamp() };
        await setDoc(userRef, user);
        set({ designerEmail: '' }); // Clear email after inviting
      } catch (error) {
        console.error('Error inviting designer: ', error);
      }
    }
  },
}));
