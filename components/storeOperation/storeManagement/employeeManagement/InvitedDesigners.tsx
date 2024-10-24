import { useAuth } from 'context/AuthProvider';
import React from 'react';
import { useInvitedDesigners } from 'store/queries/useInvitationsQuery';

interface Designer {
  id: string;
  email: string;
  invitedAt?: any;
  status?: string;
  phoneNumber?: string;
  salon?: any; // Adjust this to match the actual type of salon
  displayName?: string;
  role?: string;
}

const InvitedDesigners = () => {
  const { user } = useAuth();
  const salonId = user?.salon?.salonId;
  const category = user?.salon?.salonCategory;

  // Check if salonId and category are available before calling the hook
  const { data: invitedDesigners } = useInvitedDesigners(salonId, category);

  return (
    <div className="px-4">
      <h2 className="text-xl font-bold mb-4">Invited Designers</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2">번호</th>
            <th className="py-2">이름</th>
            <th className="py-2">연락처</th>
            <th className="py-2">직원 등급</th>
            <th className="py-2">입사일</th>
            <th className="py-2">입사/퇴사</th>
            <th className="py-2">권한 설정</th>
          </tr>
        </thead>
        <tbody>
          {invitedDesigners?.map((designer: Designer, index) => (
            <tr key={designer.id} className="text-center">
              <td className="py-2">{index + 1}</td>
              <td className="py-2">{designer.email}</td>
              <td className="py-2">{designer.phoneNumber ?? 'N/A'}</td>
              <td className="py-2">{designer.role || '직원'}</td>
              <td className="py-2">
                {designer.invitedAt ? designer.invitedAt.toDate().toLocaleDateString() : 'N/A'}
              </td>
              <td className="py-2">{designer.status ?? 'N/A'}</td>
              <td className="py-2">권한 설정</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvitedDesigners;
