import { create } from 'zustand';

export interface IUserProps {
  userUid: string;
  displayName: string;
  email: string | null;
  phoneNumber: string;
  userToken: string | undefined;
}

export interface AuthStore {
  updateUser: (state: IUserProps) => void;
}

export const userInfoStore = create<IUserProps & AuthStore>((set) => ({
  userUid: '',
  email: '',
  phoneNumber: '',
  userToken: '',
  displayName: '',
  updateUser: (state) =>
    set(() => ({
      userUid: state.userUid,
      email: state.email,
      phoneNumber: state.phoneNumber,
      userToken: state.userToken,
      displayName: state.displayName,
    })),
}));
