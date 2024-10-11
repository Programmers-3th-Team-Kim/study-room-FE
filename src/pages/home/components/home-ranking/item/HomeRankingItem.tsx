import { RankingWithJWTResponse } from '@/types/ranking';
import * as S from './HomeRankingItem.style';
import { useAuthStore } from '@/stores/auth.store';

interface RankingItemProps {
  data: RankingWithJWTResponse;
  isJWT?: boolean;
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

function Item({ data, isJWT }: RankingItemProps) {
  const myListItems = [];

  // prevUserInfo가 존재할 경우 추가
  if (isJWT && data.prevUserInfo && Object.keys(data.prevUserInfo).length > 0) {
    myListItems.push(
      <RankDisplay
        key={'prev'}
        rank={data.prevUserInfo.rank}
        nickname={data.prevUserInfo.nickname}
        totalTime={data.prevUserInfo.totalTime}
      />
    );
  } else if (isJWT) {
    myListItems.push(<S.NoUserMessage key={'prev'}></S.NoUserMessage>);
  }

  // userInfo는 항상 보여줌
  if (data.userInfo) {
    myListItems.push(
      <RankDisplay
        key={'current'}
        rank={data.userInfo.rank}
        nickname={data.userInfo.nickname}
        totalTime={data.userInfo.totalTime}
      />
    );
  }

  // nextUserInfo가 존재할 경우 추가
  if (isJWT && data.nextUserInfo && Object.keys(data.nextUserInfo).length > 0) {
    myListItems.push(
      <RankDisplay
        key={'next'}
        rank={data.nextUserInfo.rank}
        nickname={data.nextUserInfo.nickname}
        totalTime={data.nextUserInfo.totalTime}
      />
    );
  } else if (isJWT) {
    myListItems.push(<S.NoUserMessage key={'next'}></S.NoUserMessage>);
  }

  const top10 = data?.dayList?.top10 || [];

  return (
    <S.RankingItemStyle>
      <S.Wrap>
        <S.Title>{isJWT ? 'Top 3' : 'Top 10'}</S.Title>
        <S.DayList>
          {isJWT ? (
            top10.length > 0 ? (
              top10
                .slice(0, 3)
                .map((item, index) => (
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
            )
          ) : top10.length > 0 ? (
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
            top10.length < (isJWT ? 3 : 10) &&
            Array.from({ length: (isJWT ? 3 : 10) - top10.length }).map(
              (_, index) => (
                <S.NoUserMessage key={`empty-${index}`}></S.NoUserMessage>
              )
            )}
        </S.DayList>
      </S.Wrap>
      {isJWT && (
        <S.Wrap>
          <S.Title>내 순위</S.Title>
          <S.MyList>{myListItems}</S.MyList>
        </S.Wrap>
      )}
    </S.RankingItemStyle>
  );
}

export default Item;
