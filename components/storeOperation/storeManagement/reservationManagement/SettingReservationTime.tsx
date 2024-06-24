import ModalLayout from '@/components/common/ModalLayout';
import { Button } from '@/components/ui/button';
import React from 'react';
import {
  TimeOption,
  useTimeStore,
} from 'store/stores/storeOperation/useSettingReservationTimeStore';
import useModalStore from 'store/stores/useModalStore';

function generateTimeOptions() {
  const options = [];
  for (let hour = 0; hour < 24; hour++) {
    const formattedHour = `${hour % 12 === 0 ? 12 : hour % 12}:00 ${hour < 12 ? 'AM' : 'PM'}`;
    options.push({ label: formattedHour, value: formattedHour }); // Assuming it returns objects
  }
  return options;
}

const SettingReservationTime = () => {
  const { isReservationTimeOpen, reservationTimeModalHandler } = useModalStore();
  const { weekTimes, setDayTime } = useTimeStore();
  const saveTimes = useTimeStore((state) => state.saveTimes);

  const timeOptions = generateTimeOptions();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const calculateRemainingTimes = (
    openTime: string,
    closeTime: string,
    allTimes: TimeOption[]
  ): string[] => {
    const openIndex = allTimes.findIndex((time) => time.value === openTime);
    const closeIndex = allTimes.findIndex((time) => time.value === closeTime);
    return [
      ...allTimes.slice(0, openIndex).map((time) => time.value),
      ...allTimes.slice(closeIndex + 1).map((time) => time.value),
    ];
  };
  // @ts-ignore
  const handleTimeChange = (dayIndex: number, openOrClose: keyof weekTimes, time: string): void => {
    const updatedTimes = { ...weekTimes[dayIndex], [openOrClose]: time };
    updatedTimes.remaining = calculateRemainingTimes(
      updatedTimes.open,
      updatedTimes.close,
      timeOptions
    );
    setDayTime(dayIndex, updatedTimes);
  };

  const toggleHoliday = (dayIndex: number): void => {
    const updatedTimes = { ...weekTimes[dayIndex], holiday: !weekTimes[dayIndex].holiday };
    setDayTime(dayIndex, updatedTimes);
  };

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
          <div className="">
            <div className="flex justify-between items-center mb-5 mt-2">
              <div className="font-bold text-lg">샵 영업 시간 설정</div>
              <Button className="text-sm" variant="ghost" onClick={saveTimes}>
                저장하기
              </Button>
            </div>
            <div className="space-y-4">
              {daysOfWeek.map((day, index) => (
                <div key={day} className="flex flex-col">
                  <div className="flex justify-between mb-4">
                    <label className="block font-medium text-gray-700 mb-1">{day}</label>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input
                        type="checkbox"
                        name="toggle"
                        id={`toggle-${day}`}
                        checked={weekTimes[index].holiday}
                        onChange={() => toggleHoliday(index)}
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer opacity-0"
                      />
                      <label
                        htmlFor={`toggle-${day}`}
                        className={`toggle-label block w-10 h-6 rounded-full bg-gray-300 cursor-pointer after:content-[''] after:absolute after:left-1 after:top-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all ${
                          weekTimes[index].holiday
                            ? 'bg-blue-500 after:translate-x-full'
                            : 'bg-gray-300 after:translate-x-0'
                        }`}
                      ></label>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <select
                      disabled={weekTimes[index].holiday}
                      className="form-select w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      value={weekTimes[index].open}
                      onChange={(e) => handleTimeChange(index, 'open', e.target.value)}
                    >
                      {timeOptions.map((time) => (
                        <option key={`${day}-open-${time}`} value={time.value}>
                          Open: {time.value}
                        </option>
                      ))}
                    </select>
                    <select
                      disabled={weekTimes[index].holiday}
                      className="form-select w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      value={weekTimes[index].close}
                      onChange={(e) => handleTimeChange(index, 'close', e.target.value)}
                    >
                      {timeOptions.map((time) => (
                        <option key={`${day}-close-${time}`} value={time.value}>
                          Close: {time.value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ModalLayout>
      )}
    </div>
  );
};

export default SettingReservationTime;
