import { useAuthStore } from '@/stores';
import axiosInstance from './axiosInstance.api';

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
