import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface AuthState {
  accessToken: string | null;
  user: { id: string; nickname: string; imageUrl?: string } | null;
  setAuthData: (
    token: string,
    user: { id: string; nickname: string; imageUrl?: string }
  ) => void;
  clearAuthData: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    accessToken: null,
    user: null,

    setAuthData: (token, user) => set({ accessToken: token, user }),
    clearAuthData: () => set({ user: null }),
  }))
);
