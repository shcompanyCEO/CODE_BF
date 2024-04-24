import { Button } from '@/components/ui/button';
import { ChromeIcon } from '@/components/ui/icon';
import { useRouter } from 'next/router';
import useAuthStore from 'store/stores/useAuthStore';

export interface GooggleLoginButtonProps {
  onClose: () => void;
}

export const GoogleLogin = ({ onClose }: GooggleLoginButtonProps) => {
  const router = useRouter();
  const signInWithGoogle = useAuthStore().signInWithGoogle;

  const signIn = async () => {
    const signUpFinish = await signInWithGoogle();
    if (signUpFinish) {
      onClose();
      // window.location.reload();
    } else {
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
