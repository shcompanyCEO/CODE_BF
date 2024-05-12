import React from 'react';
import { useReservationCalendar } from 'store/stores/storeOperation/useReservationCalendar';

const ReservationManagement = () => {
  const events = useReservationCalendar((state) => state.events);

  return (
    <div className="flex flex-col space-y-4">
      {events.map((event) => (
        <div key={event.id} className="flex flex-col p-4 bg-gray-700 text-white">
          <h2 className="text-lg">{event.title}</h2>
          <p>
            {event.start} - {event.end}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReservationManagement;
