import { create } from 'zustand';

export interface State {
  salonModeChangeIsOpen: boolean;
  selectSalon: string;
  countryModalState: boolean;
  text: string;
  salonSelctoer: string;
}

export interface Action {
  //salon
  salonModeModalOpen: () => void;
  salonModeModalClose: () => void;
  //country
  countryModalOpen: () => void;
  countryModalClose: () => void;

  selectSalonHandler: (text: string) => void;
  setText: (newText: string) => void;
}

export const modalStateStore = create<State & Action>((set) => ({
  salonModeChangeIsOpen: false,
  countryModalState: false,
  selectSalon: 'hair',
  text: '',
  salonSelctoer: 'hair',
  // salonModeModalHandler: (state) =>
  //   set(() => ({
  //     isOpen: state.isOpen,
  //   })),
  //salon
  salonModeModalOpen: () => set({ salonModeChangeIsOpen: true }),
  salonModeModalClose: () => set({ salonModeChangeIsOpen: false }),
  //country
  countryModalOpen: () => set({ countryModalState: true }),
  countryModalClose: () => set({ countryModalState: false }),

  // selectSalonHandler: (state) =>
  //   set(() => ({
  //     selectSalon: state.selectSalon,
  //   })),
  setText: (newText) => set({ text: newText }),
  selectSalonHandler: (text) => set({ salonSelctoer: text }),
}));
