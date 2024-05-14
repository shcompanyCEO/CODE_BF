import React from 'react';
import ReservationCalendar from './ReservationCalendar';
import { useReservationCalendar } from 'store/stores/storeOperation/useReservationCalendar';
import SettingReservationTime from './SettingReservationTime';

const ReservationManagement: React.FC = () => {
  const addEvent = useReservationCalendar((state) => state.addEvent);

  const handleAddEvent = () => {
    const newEvent = {
      id: Math.random(),
      title: 'New Event',
      start: '10:00',
      end: '11:00',
    };
    addEvent(newEvent);
  };

  return (
    <div className="container mx-auto p-4">
      <SettingReservationTime />
      <button
        onClick={handleAddEvent}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Event
      </button>
      {/* <ReservationCalendar /> */}
    </div>
  );
};

export default ReservationManagement;
