import { db } from '@/api/firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { create } from 'zustand';

export interface WeekTime {
  open: string;
  close: string;
  holiday: boolean;
  remaining?: string[];
}

export interface TimeOption {
  label: string;
  value: string;
}

export interface TimeStore {
  weekTimes: WeekTime[];
  setDayTime: (dayIndex: number, updatedTimes: WeekTime) => void;
  saveTimes: () => Promise<void>;
}

export const useTimeStore = create<TimeStore>((set, get) => ({
  weekTimes: Array(7).fill({ open: '9:00 AM', close: '5:00 PM', holiday: false }),
  setDayTime: (dayIndex, time) =>
    set((state) => {
      const newTimes = [...state.weekTimes];
      newTimes[dayIndex] = time;
      return { weekTimes: newTimes };
    }),
  saveTimes: async () => {
    const { weekTimes } = get();
    const calculatedTimes = weekTimes.map(({ open, close, holiday }) => {
      if (holiday) return { workingHours: 0 };
      const openTime = new Date(`01/01/2020 ${open}`);
      const closeTime = new Date(`01/01/2020 ${close}`);
      const workingHours = (closeTime.getTime() - openTime.getTime()) / 3600000; // convert milliseconds to hours
      return { open, close, workingHours };
    });
  },
}));
