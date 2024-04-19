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
        console: console.log('sean state,', state),
        isModalOpen: !state.isModalOpen,
      };
    }),
}));

export default useModalStore;
