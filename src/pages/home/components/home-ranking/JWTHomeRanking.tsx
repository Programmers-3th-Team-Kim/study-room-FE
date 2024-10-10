import { useEffect, useState } from 'react';
import { RankingResponseJWT } from '@/types/ranking';
import { HomeRankingStyle } from './HomeRanking.style';
import axiosInstance from '@/apis/axiosInstance.api';
import JWTRankingItem from './item/JWTRankingItem';

function JWTHomeRanking() {
  const [data, setData] = useState<RankingResponseJWT | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRankingData = async () => {
      try {
        const res = await axiosInstance.get('/rankings/jwt');
        console.log(res.data);

        setData(res.data);
      } catch (error) {
        console.error('랭킹 데이터를 불러오는 중 오류 발생:', error);
        setError('랭킹 데이터를 불러오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchRankingData();
  }, []);

  if (loading) {
    return <p>로딩 중...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <HomeRankingStyle>
      {data && <JWTRankingItem data={data} />}
    </HomeRankingStyle>
  );
}

export default JWTHomeRanking;
