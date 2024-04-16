import { create } from 'zustand';

interface State {
  salonModeChangeIsOpen: boolean;
  countryModalState: boolean;
  salonSelector: string;
  currentStep: number;
  totalStep: number;
  salonPhoneNumber: string;
  salonName: string;
  salonIntroduction: string;
}

interface Action {
  //salon
  salonModeModalOpen: () => void;
  salonModeModalClose: () => void;
  //country
  countryModalOpen: () => void;
  countryModalClose: () => void;
  //modal page selector
  handleNextStep: (step: number) => void;
  handlePrevStep: (step: number) => void;
  //salonMode selector
  selectSalonHandler: (text: string) => void;
  //salonNumber
  handleSalonNumber: (phoneNumber: string) => void;
  handleSalonName: (name: string) => void;
  handleTextArea: (text: string) => void;
}

export const salonModeChangeeStore = create<State & Action>((set) => ({
  salonModeChangeIsOpen: false,
  countryModalState: false,
  salonIntroduction: '',
  salonSelector: 'hair',
  currentStep: 1,
  totalStep: 3,
  salonPhoneNumber: '',
  currentLocation: {
    lat: 0,
    lng: 0,
  },
  salonName: '',
  //salon
  salonModeModalOpen: () => set({ salonModeChangeIsOpen: true }),
  salonModeModalClose: () =>
    set({
      salonModeChangeIsOpen: false,
      currentStep: 1,
    }),
  //country
  countryModalOpen: () => set({ countryModalState: true }),
  countryModalClose: () => set({ countryModalState: false }),
  //modal NextStep
  handleNextStep: (page) => set(() => ({ currentStep: page })),
  handlePrevStep: (page) => set((state) => ({ currentStep: state.currentStep - page })),
  //salon selector
  selectSalonHandler: (text) => set({ salonSelector: text }),
  //salon number checking
  handleSalonNumber: (salonPhoneNumber) => set({ salonPhoneNumber }),
  //salon name
  handleSalonName: (name) => set({ salonName: name }),
  handleTextArea: (text) => set({ salonIntroduction: text }),
}));
