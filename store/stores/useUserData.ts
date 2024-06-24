import { create } from 'zustand';

interface IUserProps {
  userUid: string;
  displayName: string;
  email: string | null;
  phoneNumber: string;
  userToken: string | undefined;
  managerStatus: boolean;
  staffStatus: boolean;
  owner: boolean;
  salon?: string;
  salonName: string;
}

export interface AuthStore {
  userSetUp: (state: IUserProps) => void;
  userUpdateData: (newData: Partial<IUserProps | undefined>) => void;
}

export const useUserDataStore = create<IUserProps & AuthStore>((set) => ({
  userUid: '',
  email: '',
  phoneNumber: '',
  userToken: '',
  displayName: '',
  salonName: '',
  managerStatus: false,
  staffStatus: false,
  owner: false,
  salon: '',
  userSetUp: (state: IUserProps) =>
    set(() => ({
      userUid: state.userUid,
      email: state.email,
      phoneNumber: state.phoneNumber,
      userToken: state.userToken,
      displayName: state.displayName,
      managerStatus: state.managerStatus,
      staffStatus: state.staffStatus,
      owner: state.owner,
    })),
  userUpdateData: (newData) =>
    set((state) => ({
      ...state,
      ...newData,
    })),
}));
