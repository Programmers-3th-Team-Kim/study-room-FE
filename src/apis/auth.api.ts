import { useAuthStore } from '@/stores';
import axiosInstance from './axiosInstance.api';
import type { RegisterFormInputs } from '@/types/auth';

export const login = async (data: { id: string; password: string }) => {
  const response = await axiosInstance.post('/auth/login', data, {
    withCredentials: true,
  });

  const accessToken = response.data.access_token;
  const user = response.data.user;

  const { setAuthData } = useAuthStore.getState();
  if (accessToken) {
    setAuthData(accessToken, user);
  }
  return user;
};

export const logout = async () => {
  await axiosInstance.post('/auth/logout', {}, { withCredentials: true });

  const { clearAuthData } = useAuthStore.getState();
  clearAuthData();
};

export const signUp = async (data: RegisterFormInputs) => {
  const response = await axiosInstance.post('/auth/signup', data, {
    withCredentials: true,
  });
  return response.data;
};
