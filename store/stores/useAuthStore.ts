import { db, firebaseConfig } from '@/api/firebase/firebase';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { create } from 'zustand';

// Initialize Firebase with your Firebase project configuration

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

interface AuthStore {
  user: User | null;
  isLoading: boolean;
  isLogin: boolean;
  signInWithGoogle: () => Promise<void>;
  signOutUser: () => Promise<void>;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: true, // Initially set to true until authentication state is determined
  isLogin: false,

  signInWithGoogle: async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const { user } = result;
      set({ user: user, isLoading: false, isLogin: true });
      await setDoc(doc(db, 'users', `${user.email}`), {
        userUid: user.uid,
        fullName: user.displayName!,
        email: user.email,
        phoneNumber: user.phoneNumber ? user.phoneNumber : '',
        userToken: await result.user.getIdToken(),
        owner: false,
        ManagerStatus: false,
        StaffStatus: false,
      });
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  },

  signOutUser: async () => {
    try {
      await signOut(auth);
      set({ user: null, isLoading: false, isLogin: false });
    } catch (error) {
      console.error('Error signing out:', error);
    }
  },
}));

// Subscribe to auth state changes and update Zustand store accordingly
onAuthStateChanged(auth, (user) => {
  useAuthStore.setState({ user, isLoading: false });
});

export default useAuthStore;
