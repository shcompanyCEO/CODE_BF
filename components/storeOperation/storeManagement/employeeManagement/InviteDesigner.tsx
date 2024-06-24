import { useState } from 'react';
import { collection, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/api/firebase/firebase';
import { Button } from '@/components/ui/button';
import { useUserDataStore } from 'store/stores/useUserData';
import { InviteDesignerStore } from 'store/stores/employeeManagement/useInviteDesignerStore';

interface InviteDesignerProps {
  salonId: string | string[] | undefined;
  salonName: string | string[] | undefined;
  category: string | string[] | undefined;
}
const InviteDesigner = (salonData: InviteDesignerProps) => {
  const { email } = useUserDataStore();
  const [userEmail, setUserEmail] = useState<string>(`${email ? email : ''}`);
  const { designerEmail, setSalonId, setCategory, setDesignerEmail, inviteDesigner } =
    InviteDesignerStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSalonId(`${salonData.salonId}`);
    setCategory(`${salonData.category}`);
    await inviteDesigner();
  };
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Invite Designer</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Designer Email:</label>
          <input
            type="email"
            value={designerEmail}
            onChange={(e) => setDesignerEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <Button
          type="submit"
          variant="ghost"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Invite
        </Button>
      </form>
    </div>
  );
};

export default InviteDesigner;
