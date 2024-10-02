import { create } from 'zustand';

interface AuthState {
  accessToken: string | null;
  user: {
    id: string;
    nickname: string;
    imageUrl?: string;
    introduction?: string;
    dDay?: string;
  } | null;
  setAuthData: (
    accessToken: string,
    user: {
      id: string;
      nickname: string;
      imageUrl?: string;
      introduction?: string;
      dDay?: string;
    } | null
  ) => void;
  clearAuthData: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,
  setAuthData: (accessToken, user) => set(() => ({ accessToken, user })),
  clearAuthData: () => set(() => ({ accessToken: null, user: null })),
}));
