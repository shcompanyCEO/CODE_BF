import { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore';
import { db } from '@/api/firebase/firebase';

const Invitations: React.FC = () => {
  const [invitations, setInvitations] = useState<any[]>([]);

  useEffect(() => {
    const fetchInvitations = async () => {
      const querySnapshot = await getDocs(collection(db, 'invitations'));
      setInvitations(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    fetchInvitations();
  }, []);

  const handleApprove = async (invitationId: string, email: string) => {
    try {
      // Update invitation status
      const invitationRef = doc(db, 'invitations', invitationId);
      await updateDoc(invitationRef, { status: 'approved' });

      // Add designer to salon
      await addDoc(collection(db, 'salons/YOUR_SALON_ID/designers'), {
        email,
      });

      // Remove the invitation
      await deleteDoc(invitationRef);

      alert('Designer approved and added to salon!');
      setInvitations(invitations.filter((invitation) => invitation.id !== invitationId));
      window.location.reload();
    } catch (error) {
      console.error('Error approving designer: ', error);
      alert('Failed to approve designer.');
    }
  };

  const handleReject = async (invitationId: string) => {
    try {
      // Remove the invitation
      const invitationRef = doc(db, 'invitations', invitationId);
      await deleteDoc(invitationRef);

      alert('Invitation rejected.');
      setInvitations(invitations.filter((invitation) => invitation.id !== invitationId));
    } catch (error) {
      console.error('Error rejecting invitation: ', error);
      alert('Failed to reject invitation.');
    }
  };

  return (
    <div>
      <h2>Pending Invitations</h2>
      <ul>
        {invitations.map((invitation) => (
          <li key={invitation.id} className="border p-2 mb-2">
            {invitation.email}
            <button
              onClick={() => handleApprove(invitation.id, invitation.email)}
              className="ml-2 bg-green-500 text-white p-2 rounded"
            >
              Approve
            </button>
            <button
              onClick={() => handleReject(invitation.id)}
              className="ml-2 bg-red-500 text-white p-2 rounded"
            >
              Reject
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Invitations;
