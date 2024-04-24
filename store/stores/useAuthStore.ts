import { auth, db, firebaseConfig } from '@/api/firebase/firebase';
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
import { getUser } from 'store/queries/userDataQuery';
import { create } from 'zustand';
import { useUserDataStore } from './useUserData';

// Initialize Firebase with your Firebase project configuration
const { userUpdateData } = useUserDataStore.getState();
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

interface AuthStore {
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
  signOutUser: () => Promise<boolean>;
  signInWithGoogle: () => Promise<boolean>;
}

const useAuthStore = create<AuthStore>((set) => ({
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
      const userData = await getUser(`${user?.email}`);
      if (userData) {
        userUpdateData(userData);
      } else {
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
      }
      return true;
    } catch (error) {
      console.error('Error signing in with Google:', error);
      return false;
    }
  },

  signOutUser: async () => {
    try {
      await signOut(auth);
      set({ isLoading: false, isLogin: false });
      console.log('logout succfull');
      alert('log out succfull');
      return true;
    } catch (error) {
      console.error('Error signing out:', error);
      return true;
    }
  },
}));

// onAuthStateChanged(auth, (user) => {
//   const userDataUpdate = async () => {
//     const userData = await getUser(`${user?.email}`);
//     userUpdateData(userData);
//     console.log('sean userdata', userData);
//   };
//   userDataUpdate();
//   // useAuthStore.setState({ user, isLogin: true });
// });

export default useAuthStore;
