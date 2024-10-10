import { RankingResponseJWT } from '@/types/ranking';
import * as S from './RankingItem.style';
import { useAuthStore } from '@/stores/auth.store';

interface RankingItemProps {
  data: RankingResponseJWT;
}

const RankDisplay = ({
  rank,
  nickname,
  totalTime,
  isDayList,
}: {
  rank: number | undefined;
  nickname: string | undefined;
  totalTime: string | undefined;
  isDayList?: boolean;
}) => {
  const { user } = useAuthStore();
  const isCurrentUser = user?.nickname === nickname;

  const renderRank = () => {
    if (rank === 1) {
      return (
        <img
          src="src/pages/home/components/home-ranking/item/1_medal.png"
          alt="1st"
        />
      );
    } else if (rank === 2) {
      return (
        <img
          src="src/pages/home/components/home-ranking/item/2_medal.png"
          alt="2nd"
        />
      );
    } else if (rank === 3) {
      return (
        <img
          src="src/pages/home/components/home-ranking/item/3_medal.png"
          alt="3rd"
        />
      );
    } else {
      return rank;
    }
  };

  return (
    <S.RankItem isCurrentUser={isCurrentUser}>
      <S.Rank isDayList={isDayList}>{renderRank()}</S.Rank>
      <S.ItemWrap>
        <S.NickName>{nickname}</S.NickName>
        <S.TotalTime>{totalTime}</S.TotalTime>
      </S.ItemWrap>
    </S.RankItem>
  );
};

function RankingItem({ data }: RankingItemProps) {
  const top10 = data?.dayList?.top10 || [];

  return (
    <S.RankingItemStyle>
      <S.Wrap>
        <S.Title>Top 10</S.Title>
        <S.DayList>
          {top10.length > 0 ? (
            top10.map((item, index) => (
              <RankDisplay
                key={index}
                rank={item.rank}
                nickname={item.nickname}
                totalTime={item.totalTime}
                isDayList={true}
              />
            ))
          ) : (
            <S.NoUserMessage>오늘의 랭킹이 없습니다.</S.NoUserMessage>
          )}
          {top10.length > 0 &&
            top10.length < 10 &&
            Array.from({ length: 10 - top10.length }).map((_, index) => (
              <S.NoUserMessage key={`empty-${index}`}>
                불러올 데이터가 없습니다.
              </S.NoUserMessage>
            ))}
        </S.DayList>
      </S.Wrap>
    </S.RankingItemStyle>
  );
}

export default RankingItem;
