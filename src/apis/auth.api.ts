import { useAuthStore } from '@/stores';
import axiosInstance from './axiosInstance.api';
import type { SignUpData } from '@/types/auth';
import { API_ROUTES } from './apiRoutes';
import { useAuthStore } from '@/stores/auth.store';
import axios from 'axios';

export const login = async (data: { id: string; password: string }) => {
  const response = await axiosInstance.post(API_ROUTES.LOGIN, data, {
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
  await axiosInstance.post(API_ROUTES.LOGOUT, {}, { withCredentials: true });

  const { clearAuthData } = useAuthStore.getState();
  clearAuthData();
};

export const checkDuplicate = async (field: string, value: string) => {
  try {
    await axiosInstance.get(API_ROUTES.DUPLICATE, {
      params: { field, value },
    });
    return { isDuplicate: false };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 409) {
      return { isDuplicate: true, message: error.response.data.message };
    }
    throw new Error('중복 확인 중 오류가 발생했습니다.');
  }
};

export const signUp = async (data: SignUpData) => {
  try {
    const response = await axiosInstance.post(API_ROUTES.SIGNUP, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || '회원가입 중 오류가 발생했습니다.'
      );
    }
    throw new Error('회원가입 중 서버 오류가 발생했습니다.');
  }
};
