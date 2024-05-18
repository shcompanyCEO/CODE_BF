import SearchBar from '@/components/ui/searchBar';
import React from 'react';
import Invitations from './Invitations';
import InviteDesigner from './InviteDesigner';

const EmployeeManagement = () => {
  return (
    <div>
      <SearchBar />
      <Invitations />
      <InviteDesigner />
    </div>
  );
};

export default EmployeeManagement;
