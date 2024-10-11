import axiosInstance from './axiosInstance.api';

export const fetchAllAverage = async () => {
  try {
    const response = await axiosInstance.get('/statistics/all/average');
    return response.data;
  } catch (error) {
    console.error('전체 평균 데이터를 가져오는 중 오류가 발생했습니다.', error);
    throw error;
  }
};

export const fetchAllGraph = async (offset = 0) => {
  try {
    const response = await axiosInstance.get('/statistics/all/graph', {
      params: { offset },
    });
    return response.data;
  } catch (error) {
    console.error(
      '전체 통계 그래프 데이터를 가져오는 중 오류가 발생했습니다.',
      error
    );
    throw error;
  }
};
