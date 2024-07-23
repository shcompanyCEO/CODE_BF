import SearchBar from '@/components/ui/searchBar';
import React from 'react';
import Invitations from './InvitedDesigners';
import InviteDesigner from './InviteDesigner';
import { useAuth } from 'context/AuthContext';
import InvitedDesigners from './InvitedDesigners';

const EmployeeManagement = () => {
  const { user } = useAuth();
  return (
    <div className="w-full">
      <InviteDesigner />
      <InvitedDesigners />
    </div>
  );
};

export default EmployeeManagement;
