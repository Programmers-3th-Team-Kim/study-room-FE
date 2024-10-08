import { RankingResponse } from '@/types/ranking';
import * as S from './RankingItem.style';

interface RankingItemProps {
  data: RankingResponse;
}

const RankDisplay = ({
  rank,
  nickname,
  totalTime,
  isDayList,
}: {
  rank: number;
  nickname: string;
  totalTime: string;
  isDayList?: boolean;
}) => (
  <S.RankItem>
    <S.Rank isDayList={isDayList}>{rank}</S.Rank>
    <S.ItemWrap>
      <S.NickName>{nickname}</S.NickName>
      <S.TotalTime>{totalTime}</S.TotalTime>
    </S.ItemWrap>
  </S.RankItem>
);

function RankingItem({ data }: RankingItemProps) {
  return (
    <S.RankingItemStyle>
      <S.Wrap>
        <S.Ttile>Top 3</S.Ttile>
        <S.DayList>
          {data.dayList.map((item) => (
            <RankDisplay
              key={item.rank}
              rank={item.rank}
              nickname={item.nickname}
              totalTime={item.totalTime}
              isDayList={true}
            />
          ))}
        </S.DayList>
      </S.Wrap>
      <S.Wrap>
        <S.Ttile>내 순위</S.Ttile>
        <S.MyList>
          <RankDisplay
            rank={data.prevUserInfo.rank}
            nickname={data.prevUserInfo.nickname}
            totalTime={data.prevUserInfo.totalTime}
          />
          <RankDisplay
            rank={data.userInfo.rank}
            nickname={data.userInfo.nickname}
            totalTime={data.userInfo.totalTime}
          />
          <RankDisplay
            rank={data.nextUserInfo.rank}
            nickname={data.nextUserInfo.nickname}
            totalTime={data.nextUserInfo.totalTime}
          />
        </S.MyList>
      </S.Wrap>
    </S.RankingItemStyle>
  );
}

export default RankingItem;
