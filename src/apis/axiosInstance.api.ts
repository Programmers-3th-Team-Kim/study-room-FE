import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}`,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { data } = await axiosInstance.post('/auth/refresh-token');
        originalRequest.headers['Authorization'] =
          `Bearer ${data.access_token}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('토큰 갱신 실패:', refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
