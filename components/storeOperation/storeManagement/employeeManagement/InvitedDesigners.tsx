import { useAuth } from 'context/AuthContext';
import React from 'react';
import { useInvitedDesigners } from 'store/queries/useInvitationsQuery';

interface InvitedDesignersProps {
  salonId: string;
  category: string;
}
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
  const { data: invitedDesigners } = useInvitedDesigners(
    user?.salon?.salonId,
    user?.salon?.salonCategory
  );

  return (
    <div className="p-4">
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
              <td className="py-2">{designer.phoneNumber ?? 'N/A'}</td>{' '}
              {/* Add phone number here if available */}
              <td className="py-2">{designer.role || '직원'}</td> {/* Adjust role if needed */}
              <td className="py-2">{designer.invitedAt?.toDate().toLocaleDateString()}</td>
              <td className="py-2">{designer.status}</td> {/* Add join/leave status if available */}
              <td className="py-2">권한 설정</td> {/* Add permission setting logic if available */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvitedDesigners;
