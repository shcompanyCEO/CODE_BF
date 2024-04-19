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
import { create } from 'zustand';

// Initialize Firebase with your Firebase project configuration

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

interface AuthStore {
  user: User | null;
  userUid: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  userToken: string;
  owner: boolean;
  managerStatus: boolean;
  staffStatus: boolean;
  isLoading: boolean;
  isLogin: boolean;
  signInWithGoogle: () => Promise<boolean>;
  signOutUser: () => Promise<boolean>;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  userUid: '',
  fullName: '',
  email: '',
  phoneNumber: '',
  userToken: '',
  owner: false,
  managerStatus: false,
  staffStatus: false,
  isLoading: false,
  isLogin: true,

  signInWithGoogle: async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const { user } = result;
      await setDoc(doc(db, 'users', `${user.email}`), {
        userUid: user.uid,
        fullName: user.displayName!,
        email: user.email,
        phoneNumber: user.phoneNumber ? user.phoneNumber : '',
        userToken: await result.user.getIdToken(),
        owner: false,
        managerStatus: false,
        staffStatus: false,
      });
      alert('google login success full');
      console.log('login succfull');
      return true;
    } catch (error) {
      console.error('Error signing in with Google:', error);
      return false;
    }
  },

  signOutUser: async () => {
    try {
      await signOut(auth);
      set({ user: null, isLoading: false, isLogin: false });
      console.log('logout succfull');
      alert('log out succfull');
      return true;
    } catch (error) {
      console.error('Error signing out:', error);
      return true;
    }
  },
}));

// Subscribe to auth state changes and update Zustand store accordingly
onAuthStateChanged(auth, (user) => {
  useAuthStore.setState({ user, isLogin: true });
});

export default useAuthStore;
