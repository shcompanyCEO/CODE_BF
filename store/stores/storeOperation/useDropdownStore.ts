import create from 'zustand';

interface MenuState {
  openDropdown: string | null;
  selectedItem: string | null;
  setOpenDropdown: (id: string | null) => void;
  setSelectedItem: (item: string | null) => void;
}

const useMenuStore = create<MenuState>((set) => ({
  openDropdown: 'home',
  selectedItem: 'calendar',
  setOpenDropdown: (id) => set({ openDropdown: id }),
  setSelectedItem: (item) => set({ selectedItem: item }),
}));

export default useMenuStore;
