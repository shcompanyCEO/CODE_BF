import { create } from 'zustand';

interface NavState {
  active: string;
  setActive: (id: string) => void;
}

const useMenuStore = create<NavState>((set) => ({
  active: 'home',
  setActive: (id: string) => set({ active: id }),
}));

export default useMenuStore;
