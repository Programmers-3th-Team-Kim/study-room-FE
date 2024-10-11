export type RankingType = 'day' | 'week' | 'month';

export interface RankingList {
  rank: number;
  nickname: string;
  totalTime: string;
}

export interface RankingResponse {
  dayList: {
    top10: RankingList[];
  };
  weekList: {
    top10: RankingList[];
  };
  monthList: {
    top10: RankingList[];
  };
}

export interface RankingResponseJWT {
  dayList: {
    top10: RankingList[];
  };
  weekList: {
    top10: RankingList[];
  };
  monthList: {
    top10: RankingList[];
  };
  userInfo: RankingList;
  prevUserInfo: RankingList;
  nextUserInfo: RankingList;
}
