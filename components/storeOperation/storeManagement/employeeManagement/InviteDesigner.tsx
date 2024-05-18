import { useState } from 'react';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '@/api/firebase/firebase';
import { Button } from '@/components/ui/button';
import { useUserDataStore } from 'store/stores/useUserData';
import useSalonStore from 'store/stores/useSalonStore';

interface InviteDesignerProps {
  salonId: string | string[] | undefined;
  salonName: string | string[] | undefined;
  category: string | string[] | undefined;
}
const InviteDesigner = (salonData: InviteDesignerProps) => {
  const { email } = useUserDataStore();
  const [userEmail, setUserEmail] = useState<string>(`${email ? email : ''}`);

  const handleInvite = async () => {
    try {
      const info = {
        email,
        status: 'pending',
        salonId: `${salonData.salonId}`,
        timestamp: '',
        category: salonData.category,
      };
      await setDoc(doc(db, 'invitations', `${salonData.salonId}`), {
        [userEmail]: { ...info },
      });
      alert('Invitation sent!');
      setUserEmail('');
    } catch (error) {
      console.error('Error inviting designer: ', error);
      alert('Failed to send invitation.');
    }
  };

  return (
    <div>
      <h2>Invite Designer</h2>
      <input
        type="email"
        placeholder="Designer Email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        className="border p-2 rounded"
      />
      <Button
        onClick={handleInvite}
        className="ml-2 bg-blue-500 text-white p-2 rounded"
        variant="ghost"
        size="sm"
      >
        Invite
      </Button>
    </div>
  );
};

export default InviteDesigner;
