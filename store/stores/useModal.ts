import { create } from 'zustand';

interface State {
  isLoginModalOpen: boolean;
  isReservationTimeOpen: boolean;

  LoginModalHandler: () => void;
  reservationTimeModalHandler: () => void;
}

const useModalStore = create<State>((set) => ({
  isLoginModalOpen: false,
  isReservationTimeOpen: false,

  LoginModalHandler: () =>
    set((state: State) => {
      return {
        isLoginModalOpen: !state.isLoginModalOpen,
      };
    }),
  reservationTimeModalHandler: () =>
    set((state: State) => {
      return {
        isReservationTimeOpen: !state.isReservationTimeOpen,
      };
    }),
}));

export default useModalStore;
