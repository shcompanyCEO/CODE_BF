import React from 'react';
import InviteDesigner from './InviteDesigner';
import { useAuth } from 'context/AuthProvider';
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
