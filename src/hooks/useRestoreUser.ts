import { useEffect } from 'react';
import axiosInstance from '@/apis/axiosInstance.api';
import { useAuthStore } from '@/stores/auth.store';

export const useRestoreUser = () => {
  const { accessToken, setAuthData, clearAuthData } = useAuthStore();

  const restoreUser = async () => {
    if (!accessToken) {
      return;
    }

    try {
      const response = await axiosInstance.get('/auth/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      });

      const user = response.data.user;
      setAuthData(accessToken, user);
    } catch (error) {
      console.error('유저 정보를 복원할 수 없습니다:', error);
      clearAuthData();
    }
  };

  useEffect(() => {
    restoreUser();
  }, [accessToken]);
};
