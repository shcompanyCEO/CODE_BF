import { Button } from '@/components/ui/button';
import { ChromeIcon } from '@/components/ui/icon';
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { getDatabase, ref, set, push } from 'firebase/database';
import { firebaseApp } from '@/api/firebase/firebase';

const GoogleLoginButton = () => {
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      if (result) {
        const db = getDatabase(firebaseApp);
        const newDocRef = push(ref(db, 'users/info'));
        set(newDocRef, {
          fullName: result.user.displayName!,
          email: result.user.email,
          phoneNumber: result.user.phoneNumber ? result.user.phoneNumber : '',
          userToken: token,
        })
          .then(() => {
            alert('성공!');
          })
          .catch((error) => {
            console.log('error', error);
          });
      }
    } catch (error: any) {
      const errorCode = error?.code;
      const errorMessage = error?.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
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
