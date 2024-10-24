import ModalLayout from '@/components/common/ModalLayout';
import React, { useState } from 'react';
import { useReservationCalendar } from 'store/stores/storeOperation/useReservationCalendar';

const users = ['User1', 'User2', 'User3', 'User4'];

const ReservationManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedUser, setSelectedUser] = useState('');

  const events = useReservationCalendar((state) => state.events);

  const openModal = (time: string) => {
    setSelectedTime(time);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser('');
  };

  const handleUserClick = (user: string) => {
    setSelectedUser(user);
  };

  return (
    <div className="w-full px-2">
      <div className="flex items-center justify-between mb-4">
        <button className="text-xl">&lt;</button>
        <h2 className="text-xl">24. 5. 14 (화요일)</h2>
        <button className="text-xl">&gt;</button>
      </div>
      <div className="border-t border-gray-300">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="flex items-center border-b border-gray-300 relative group">
            <div className="w-20 text-center py-2">{index + 10}:00</div>
            <div className="flex-1 py-2">
              {index === 0 && (
                <div className="bg-blue-100 border border-blue-400 text-blue-800 p-2 rounded">
                  마시현
                </div>
              )}
              <button
                onClick={() => openModal(`${index + 10}:00`)}
                className="absolute right-2 top-2 bg-blue-500 text-white px-2 py-1 rounded hidden group-hover:block"
              >
                예약
              </button>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <ModalLayout modalClose={closeModal}>
          {!selectedUser ? (
            <div>
              <h2 className="text-xl mb-4">Select a user</h2>
              <ul>
                {users.map((user) => (
                  <li
                    key={user}
                    className="p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleUserClick(user)}
                  >
                    {user}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <h2 className="text-xl mb-4">Do you want to make a reservation?</h2>
              <p>{`Time: ${selectedTime}`}</p>
              <p>{`User: ${selectedUser}`}</p>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-gray-300 text-black px-4 py-2 mr-2 rounded"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Confirm</button>
              </div>
            </div>
          )}
        </ModalLayout>
      )}
    </div>
  );
};

export default ReservationManagement;
