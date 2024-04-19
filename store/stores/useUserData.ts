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
}

export interface AuthStore {
  userSetUp: (state: IUserProps) => void;
  userUpdateData: (newData: Partial<IUserProps>) => void;
}

export const userInfoStore = create<IUserProps & AuthStore>((set) => ({
  userUid: '',
  email: '',
  phoneNumber: '',
  userToken: '',
  displayName: '',
  managerStatus: false,
  staffStatus: false,
  owner: false,
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
