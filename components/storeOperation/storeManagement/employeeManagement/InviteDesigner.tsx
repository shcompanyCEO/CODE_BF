import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { InviteDesignerStore } from 'store/stores/employeeManagement/useInviteDesignerStore';
import { useUserDataStore } from 'store/stores/useUserData';
import { useAuth } from 'context/AuthProvider';

const InviteDesigner = () => {
  const { user } = useAuth();

  const { email } = useUserDataStore();
  const [userEmail, setUserEmail] = useState<string>(email || '');
  const {
    searchResults,
    setSalonId,
    setCategory,
    searchDesignerByEmail,
    inviteDesigner,
    fetchInvitedDesigners,
  } = InviteDesignerStore();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserEmail(value);
    searchDesignerByEmail(value);
  };

  const handleInvite = async (designerId: string) => {
    setSalonId(`${user?.salon?.salonId}`);
    setCategory(`${user?.salon?.salonCategory}`);
    await inviteDesigner(designerId);
  };

  useEffect(() => {
    fetchInvitedDesigners();
  }, [fetchInvitedDesigners]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Invite Designer</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label className="block text-gray-700">Search Designer by Email:</label>
          <input
            type="text"
            value={userEmail}
            onChange={handleSearch}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter email or part of it"
          />
        </div>
      </form>
      {searchResults.length > 0 && (
        <div className="mt-4">
          <ul>
            {searchResults.map((designer) => (
              <li key={designer.id} className="flex items-center justify-between mb-2">
                <span>{designer.email}</span>
                <Button
                  onClick={() => handleInvite(designer.id)}
                  variant="ghost"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Invite
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InviteDesigner;
