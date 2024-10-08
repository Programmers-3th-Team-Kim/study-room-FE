import { RankingResponse } from '@/types/ranking';
import { HomeRankingStyle } from './HomeRanking.style';
import RankingItem from './item/RankingItem';

function HomeRanking() {
  return (
    <HomeRankingStyle>
      <RankingItem data={DATA} />
    </HomeRankingStyle>
  );
}

export default HomeRanking;

const DATA: RankingResponse = {
  dayList: [
    {
      rank: 1,
      nickname: 'nickname1',
      totalTime: '10:50:32',
    },
    {
      rank: 2,
      nickname: 'Kim0hun',
      totalTime: '10:00:32',
    },
    {
      rank: 3,
      nickname: 'nickname3',
      totalTime: '09:50:32',
    },
  ],
  userInfo: {
    rank: 275,
    nickname: 'Kim0hun',
    totalTime: '01:05:00',
  },
  prevUserInfo: {
    rank: 274,
    nickname: 'nickname274',
    totalTime: '01:07:00',
  },
  // nextUserInfo: {
  //   rank: 276,
  //   nickname: 'nickname276',
  //   totalTime: '01:00:00',
  // },
  // userInfo: {},
  // prevUserInfo: {},
  nextUserInfo: {},
  weekList: [],
  monthList: [],
};
