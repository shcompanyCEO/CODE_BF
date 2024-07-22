import { create } from 'zustand';

interface State {
  //로그인 모달
  isLoginModalOpen: boolean;
  isReservationTimeOpen: boolean;
  //직원등록
  isEmployeeRegistration: boolean;

  //owner관리 모달 Handler
  isSalonController: boolean;
  isReservationPageOpen: boolean;

  LoginModalHandler: () => void;
  reservationTimeModalHandler: () => void;
  employeeRegistrationHandler: () => void;
  isSalonControllerHandler: () => void;
  isReservationPageHandler: () => void;
}

const useModalStore = create<State>((set) => ({
  isLoginModalOpen: false,
  isReservationTimeOpen: false,
  isEmployeeRegistration: false,
  isSalonController: false,
  isReservationPageOpen: false,

  //로그인 모달
  LoginModalHandler: () =>
    set((state: State) => {
      return {
        isLoginModalOpen: !state.isLoginModalOpen,
      };
    }),
  //예약 타임 설정 모달
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
  //handler 클릭시
  isSalonControllerHandler: () =>
    set((state: State) => {
      return {
        isSalonController: !state.isSalonController,
      };
    }),
  //예약 캘린더 클릭시
  isReservationPageHandler: () =>
    set((state: State) => {
      return {
        isReservationPageOpen: !state.isReservationPageOpen,
      };
    }),
}));

export default useModalStore;
