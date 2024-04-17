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
import useAuthStore from 'store/stores/useAuthStore';

export interface GooggleLoginButtonProps {
  onClose: () => void;
}

export const GoogleLogin = ({ onClose }: GooggleLoginButtonProps) => {
  const signInWithGoogle = useAuthStore((state) => state.signInWithGoogle);
  const isLogin = useAuthStore((state) => state.isLogin);

  const signIn = async () => {
    signInWithGoogle();
    if (isLogin) {
      onClose();
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
