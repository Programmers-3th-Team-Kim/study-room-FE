import { useEffect, useState } from 'react';
import { RankingResponseJWT } from '@/types/ranking';
import axios from 'axios';
import axiosInstance from '@/apis/axiosInstance.api';
import * as S from './HomeRanking.style';
import Item from './item/Item';

const Ranking = ({ isJWT }: { isJWT: boolean }) => {
  const [data, setData] = useState<RankingResponseJWT | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // JWT 여부에 따라 다른 API 호출
  const fetchRankingData = async () => {
    try {
      const res = isJWT
        ? await axiosInstance.get('/rankings/jwt')
        : await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/rankings`); // JWT가 없을 때

      setData(res.data);
    } catch (error) {
      console.error('랭킹 데이터를 불러오는 중 오류 발생:', error);
      setError('랭킹 데이터를 불러오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRankingData();
  });

  if (loading) {
    return (
      <S.HomeRankingStyle>
        <S.Loading>
          <div className="spinner" />
          <S.Text>로딩 중...</S.Text>
        </S.Loading>
      </S.HomeRankingStyle>
    );
  }

  if (error) {
    return <S.Text>{error}</S.Text>;
  }

  return (
    <S.HomeRankingStyle>
      {data && <Item data={data} isJWT={isJWT} />}
    </S.HomeRankingStyle>
  );
};

export default Ranking;
