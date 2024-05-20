import { useEffect } from 'react';
import { InvitationsStore } from 'store/stores/employeeManagement/InvitationsStore';

const Invitations: React.FC = () => {
  const { designers, fetchDesigners, rejectDesigner } = InvitationsStore();

  useEffect(() => {
    fetchDesigners();
  }, [fetchDesigners]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Invited Designers</h2>
      <ul>
        {designers.map((designer) => (
          <li key={designer.id} className="mb-4 p-4 border rounded shadow-sm">
            <p>Email: {designer.email}</p>
            <p>Status: {designer.status}</p>
            <button
              onClick={() => rejectDesigner(designer.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mt-2"
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
