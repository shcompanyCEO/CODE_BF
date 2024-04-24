import { create } from 'zustand';

interface State {
  isModalOpen: boolean;

  toggleModal: () => void;
}

const useModalStore = create<State>((set) => ({
  isModalOpen: false,

  toggleModal: () =>
    set((state: State) => {
      return {
        isModalOpen: !state.isModalOpen,
      };
    }),
}));

export default useModalStore;