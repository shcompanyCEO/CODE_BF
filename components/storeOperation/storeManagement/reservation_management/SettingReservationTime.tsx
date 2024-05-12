import ModalLayout from '@/components/common/ModalLayout';
import React from 'react';
import useScheduleStore from 'store/stores/storeOperation/useScheduleStore';
import useModalStore from 'store/stores/useModal';

const SettingReservationTime = () => {
  const { isReservationTimeOpen, reservationTimeModalHandler } = useModalStore();
  const { days, toggleDayActive, setTime } = useScheduleStore();

  return (
    <div>
      <button
        onClick={reservationTimeModalHandler}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        예약시간설정
      </button>
      {isReservationTimeOpen && (
        <ModalLayout modalClose={reservationTimeModalHandler}>
          <div className="p-8">
            샵 영업 시간 설정
            {Object.entries(days).map(([day, { active, time }]) => (
              <>
                <div key={day} className="flex  justify-between items-center mb-4">
                  <label className="block text-sm font-medium text-gray-700">{day}</label>
                  <div className="mt-1">
                    <input
                      type="checkbox"
                      checked={active}
                      onChange={() => toggleDayActive(day)}
                      className="w-6 h-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <select
                    value={time}
                    onChange={(e) => setTime(day, e.target.value)}
                    disabled={!active}
                    className="ml-4 block w-full mt-1 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    <option>오전 10:00</option>
                  </select>
                  <select
                    value={time}
                    onChange={(e) => setTime(day, e.target.value)}
                    disabled={!active}
                    className="ml-4 block w-full mt-1 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    <option>오후 08:00</option>
                  </select>
                </div>
              </>
            ))}
          </div>
        </ModalLayout>
      )}
    </div>
  );
};

export default SettingReservationTime;
