import { Button } from '@components/ui/button';
import { ChromeIcon } from '@components/ui/icon';
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { app } from 'utils/firebase';

const GoogleLoginButton = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signIn = async () => {
    // try {
    //   const result = await signInWithPopup(auth, provider);
    //   console.log('sean result', result);
    // } catch (error) {
    //   console.error('sean  signIn error', error);
    // }
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log('sean error signInWithPopup', error);
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

export default GoogleLoginButton;
