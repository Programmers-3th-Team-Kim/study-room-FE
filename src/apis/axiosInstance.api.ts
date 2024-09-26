import axios from 'axios';
import { useAuthStore } from '@/stores/auth.store';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}`,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { data } = await axiosInstance.post('/auth/refresh-token');
        const newAccessToken = data.access_token;

        const { setAuthData } = useAuthStore.getState();
        setAuthData(newAccessToken, data.user);

        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('토큰 갱신 실패:', refreshError);
        const { clearAuthData } = useAuthStore.getState();
        clearAuthData();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;