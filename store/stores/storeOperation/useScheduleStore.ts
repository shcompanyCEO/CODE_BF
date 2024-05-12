import { create } from 'zustand';

interface DaySchedule {
  active: boolean;
  time: string;
}

interface ScheduleState {
  days: Record<string, DaySchedule>;
  toggleDayActive: (day: string) => void;
  setTime: (day: string, time: string) => void;
}

const useScheduleStore = create<ScheduleState>((set) => ({
  days: {
    월요일: { active: false, time: '오전 10:00' },
    화요일: { active: false, time: '오전 10:00' },
    수요일: { active: false, time: '오전 10:00' },
    목요일: { active: false, time: '오전 10:00' },
    금요일: { active: false, time: '오전 10:00' },
  },
  toggleDayActive: (day) =>
    set((state) => ({
      days: {
        ...state.days,
        [day]: { ...state.days[day], active: !state.days[day].active },
      },
    })),
  setTime: (day, time) =>
    set((state) => ({
      days: {
        ...state.days,
        [day]: { ...state.days[day], time: time },
      },
    })),
}));

export default useScheduleStore;
