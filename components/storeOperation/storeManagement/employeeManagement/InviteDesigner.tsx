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

  const handleSelectResult = (email: string) => {
    setUserEmail(email);
  };

  const handleInvite = async (designerId: string) => {
    setSalonId(`${user?.salon?.salonId}`);
    setCategory(`${user?.salon?.salonCategory}`);
    await inviteDesigner(designerId);
  };

  useEffect(() => {
    fetchInvitedDesigners();
  }, [fetchInvitedDesigners]);

  console.log('sean user', user);
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Invite Designer</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4 relative">
          <label className="block text-gray-700">Search Designer by Email:</label>
          <input
            type="text"
            value={userEmail}
            onChange={handleSearch}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter email or part of it"
          />
          {userEmail && searchResults.length > 0 && (
            <ul className="absolute z-10 bg-white shadow-lg mt-2 w-full rounded-md max-h-60 overflow-y-auto">
              {searchResults.map((designer) => (
                <>
                  <div className="flex">
                    <li
                      key={designer.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectResult(designer.email)}
                    >
                      {designer.email}
                    </li>
                    <Button
                      onClick={() => handleInvite(designer.id)}
                      variant="ghost"
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                    >
                      Invite
                    </Button>
                  </div>
                </>
              ))}
            </ul>
          )}
        </div>
      </form>
      {/* {searchResults.length > 0 && (
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
      )} */}
    </div>
  );
};

export default InviteDesigner;
