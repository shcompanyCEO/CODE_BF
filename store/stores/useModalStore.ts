import { create } from 'zustand';

interface State {
  isLoginModalOpen: boolean;
  isReservationTimeOpen: boolean;
  //직원등록
  isEmployeeRegistration: boolean;
  //owner관리 모달 Handler

  LoginModalHandler: () => void;
  reservationTimeModalHandler: () => void;
  employeeRegistrationHandler: () => void;
}

const useModalStore = create<State>((set) => ({
  isLoginModalOpen: false,
  isReservationTimeOpen: false,
  isEmployeeRegistration: false,

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
  //직원등록 모달
  employeeRegistrationHandler: () =>
    set((state: State) => {
      return {
        isEmployeeRegistration: !state.isEmployeeRegistration,
      };
    }),
}));

export default useModalStore;
