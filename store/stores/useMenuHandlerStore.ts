import { create } from 'zustand';

type Store = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const useMenuHandlerStore = create<Store>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));
