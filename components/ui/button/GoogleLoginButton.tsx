import { Button } from '@/components/ui/button';
import { ChromeIcon } from '@/components/ui/icon';
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';
import { firebaseApp } from '@/api/firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/api/firebase/firebase';

export interface GooggleLoginButtonProps {
  onClose: () => void;
}

export const GoogleLoginButton = ({ onClose }: GooggleLoginButtonProps) => {
  const signIn = async () => {
    const auth = getAuth(firebaseApp);
    const provider = new GoogleAuthProvider();

    try {
      const userInfo = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(userInfo);
      const user = userInfo.user;
      const token = credential?.accessToken;

      if (userInfo) {
        const userData = {
          userUid: user.uid,
          fullName: user.displayName!,
          email: user.email,
          phoneNumber: user.phoneNumber ? user.phoneNumber : '',
          userToken: token,
        };
        onClose();
        await setDoc(doc(db, 'users', `${user.email}`), { userData });
        alert('User Loign successfully');
        setPersistence(auth, browserSessionPersistence);
      }
    } catch (error: any) {
      const errorCode = error?.code;
      const errorMessage = error?.message;
      // The email of the user's account used.
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log('googleLoginButton Error', error);
    }
  };

  return (
    <Button
      onClick={signIn}
      className="flex items-center justify-around space-x-2"
      variant="secondary"
    >
      <ChromeIcon className="w-6 h-6 text-red-600" />
      <span>구글로 로그인하기 </span>
    </Button>
  );
};
