import { useEffect, useState } from 'react';
import { RankingWithJWTResponse } from '@/types/ranking';
import { getRankings, getRankingsWithJWT } from '@/apis/ranking.api'; // 함수 임포트
import * as S from './HomeRanking.style';
import Loader from '@/components/loader/Loader';
import HomeRankingItem from './item/HomeRankingItem';

const HomeRanking = ({ isJWT }: { isJWT: boolean }) => {
  const [data, setData] = useState<RankingWithJWTResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // JWT 여부에 따라 다른 API 호출
  const fetchRankingData = async () => {
    try {
      const res = isJWT ? await getRankingsWithJWT() : await getRankings(); // 조건에 따라 함수 호출
      setData(res);
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
        <Loader />
      </S.HomeRankingStyle>
    );
  }

  if (error) {
    return <S.Text>{error}</S.Text>;
  }

  return (
    <S.HomeRankingStyle>
      {data && <HomeRankingItem data={data} isJWT={isJWT} />}
    </S.HomeRankingStyle>
  );
};

export default HomeRanking;
