import { useEffect, useState } from 'react';
import * as S from '@/pages/statistics/all/AllStatisticsPage.style';
import { fetchAllAverage } from '@/apis/statistics.api';
import { formatAverageTime } from '@/utils/formatTime';
import MyLineChart from './components/myLineChart/MyLineChart';

export default function AllStatisticsPage() {
  const [averageData, setAverageData] = useState({
    all: {
      yesterday: { hours: '', minutes: '' },
      lastWeek: { hours: '', minutes: '' },
      lastMonth: { hours: '', minutes: '' },
    },
    my: {
      yesterday: { hours: '', minutes: '' },
      lastWeek: { hours: '', minutes: '' },
      lastMonth: { hours: '', minutes: '' },
    },
  });

  const loadAverageData = async () => {
    try {
      const data = await fetchAllAverage();
      setAverageData(data);
    } catch (error) {
      console.error('Error fetching average data:', error);
    }
  };

  useEffect(() => {
    loadAverageData();
  }, []);

  return (
    <S.StatContainer>
      <div>
        <S.AvgWrapper>
          <S.Avg>
            <S.AvgTitle>
              전체 <br />
              사용자는
            </S.AvgTitle>
            <div>
              <S.AvgLine>
                전날 평균
                <S.AvgSpan>
                  {formatAverageTime(
                    averageData.all.yesterday.hours,
                    averageData.all.yesterday.minutes
                  )}
                </S.AvgSpan>
              </S.AvgLine>
              <S.AvgLine>
                저번 주 평균
                <S.AvgSpan>
                  {formatAverageTime(
                    averageData.all.lastWeek.hours,
                    averageData.all.lastWeek.minutes
                  )}
                </S.AvgSpan>
              </S.AvgLine>
              <S.AvgLine>
                저번 달 평균
                <S.AvgSpan>
                  {formatAverageTime(
                    averageData.all.lastMonth.hours,
                    averageData.all.lastMonth.minutes
                  )}
                </S.AvgSpan>
                공부했어요!
              </S.AvgLine>
            </div>
          </S.Avg>
          <S.Avg>
            <S.AvgTitle>닉네임님은</S.AvgTitle>
            <div>
              <S.AvgLine>
                전날 평균
                <S.AvgSpan>
                  {formatAverageTime(
                    averageData.my.yesterday.hours,
                    averageData.my.yesterday.minutes
                  )}
                </S.AvgSpan>
              </S.AvgLine>
              <S.AvgLine>
                저번 주 평균
                <S.AvgSpan>
                  {formatAverageTime(
                    averageData.my.lastWeek.hours,
                    averageData.my.lastWeek.minutes
                  )}
                </S.AvgSpan>
              </S.AvgLine>
              <S.AvgLine>
                저번 달 평균
                <S.AvgSpan>
                  {formatAverageTime(
                    averageData.my.lastMonth.hours,
                    averageData.my.lastMonth.minutes
                  )}
                </S.AvgSpan>
                공부했어요!
              </S.AvgLine>
            </div>
          </S.Avg>
        </S.AvgWrapper>
      </div>
      <MyLineChart />
    </S.StatContainer>
  );
}
