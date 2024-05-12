import { create } from 'zustand';

interface CalendarState {
  events: Array<{ id: number; title: string; start: string; end: string }>;
  addEvent: (event: { id: number; title: string; start: string; end: string }) => void;
}

export const useReservationCalendar = create<CalendarState>((set) => ({
  events: [],
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
}));
