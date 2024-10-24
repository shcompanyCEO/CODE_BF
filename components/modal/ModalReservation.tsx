// ReservationModal.tsx

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import React, { useState, useEffect, useRef } from 'react';
import 'react-day-picker/dist/style.css';
import { Separator } from '@/components/ui/separator';

interface Reservation {
  time: string;
  style: string;
}

const ModalReservation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [reservation, setReservation] = useState<Reservation>({
    time: '',
    style: '',
  });
  const [selected, setSelected] = React.useState<Date | undefined>(new Date());
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }

  //time checking
  const handleTiemChekcing = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
  };
  //style checking
  const handleStyleChecking = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reservation submission (e.g., send data to backend)
    // Close modal after submission
    setIsOpen(false);
    setReservation({ time: '', style: '' });
  };
  const open = (): void => {
    setIsOpen(true);
    document.body.classList.add('overflow-hidden');
  };
  const close = (): void => {
    setIsOpen(false);
    document.body.classList.remove('overflow-hidden');
  };
  const styleMenu = ['cut', 'perm', 'color', 'clinic', 'dry'];
  const modalRef = useRef<HTMLDivElement>(null);

  //esc키로 모달창 끄기
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setReservation({ time: '', style: '' });
        document.body.classList.remove('overflow-hidden');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);
  //배경 눌렀을때 모달창 끄기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Button to open modal */}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => open()}
      >
        <div>sean 예약하기</div>
      </button>

      {/* modal overlay */}
      {isOpen && <div className="fixed inset-0 bg-gray-800 opacity-50 z-50 overflow-hidden"></div>}

      {/* Modal */}
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 ">
          <div className="bg-white rounded-lg p-8 mx-4">
            <h1>Booking DAY</h1>
            <form onSubmit={handleSubmit}>
              <DayPicker mode="single" selected={selected} onSelect={setSelected} footer={footer} />
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Time</label>
                {/* Hour selection */}
                <select
                  name="time"
                  value={reservation.time}
                  // @ts-ignore
                  onChange={handleTiemChekcing}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="">Select Time</option>
                  {[...Array(24)].map((_, i) => (
                    <option key={i} value={`${i}:00`}>{`${i}:00`}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Style</label>
                <select
                  name="style"
                  value={reservation.style}
                  // @ts-ignore
                  onChange={handleStyleChecking}
                  className="block appearance-none w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-black"
                  required
                >
                  {styleMenu.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <div className="grid gap-4">
                  <div className="flex justify-between items-center">
                    <div className="text-gray-500 dark:text-gray-400">reservation fee</div>
                    <div>30 bat</div>
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <div className="font-semibold">Total before taxes</div>
                  <div>30 bat</div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Reserve
                </button>
                <button
                  className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                  onClick={() => close()}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalReservation;
