import { updateProfileFormData } from '@/types/updateProfile';
import { API_ROUTES } from './apiRoutes';
import axiosInstance from './axiosInstance.api';

export const updateProfile = async (data: updateProfileFormData) => {
  try {
    const response = await axiosInstance.patch(API_ROUTES.USER, data);
    return response.data;
  } catch (error) {
    throw new Error('프로필 수정 중 오류가 발생했습니다.');
    console.error(error);
  }
};
