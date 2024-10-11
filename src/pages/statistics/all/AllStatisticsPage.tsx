import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
} from 'recharts';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import * as S from '@/pages/statistics/all/AllStatisticsPage.style';
import { fetchAllAverage, fetchAllGraph } from '@/apis/statistics.api';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  formatAverageTime,
  formatHours,
  formatHoursAndMinutes,
} from '@/utils/formatTime';

const CustomLegend = () => (
  <S.LegendContainer>
    <S.LegendItem>
      <S.Line color="#59ECFC" />
      나의 공부 시간
    </S.LegendItem>
    <S.LegendItem>
      <S.Line color="#59ECFC" dashed />
      나의 평균 공부 시간
    </S.LegendItem>
    <S.LegendItem>
      <S.Line color="#6859FC" />
      전체 사용자 공부 시간
    </S.LegendItem>
    <S.LegendItem>
      <S.Line color="#6859FC" dashed />
      전체 사용자 평균 공부 시간
    </S.LegendItem>
  </S.LegendContainer>
);

export default function AllStatisticsPage() {
  const [graphData, setGraphData] = useState([]);
  const [allTotalAverage, setAllTotalAverage] = useState(0);
  const [myTotalAverage, setMyTotalAverage] = useState(0);
  const [offset, setOffset] = useState(0);
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

  const loadGraphData = async () => {
    try {
      const data = await fetchAllGraph(offset);
      const formattedData = data.all.dailyAverage.map(
        (
          item: {
            date: string | number | Date | dayjs.Dayjs | null | undefined;
            totalTime: number;
          },
          index: string | number
        ) => ({
          date: dayjs(item.date).format('MM/DD'),
          전체사용자: item.totalTime,
          Nickname: data.my.dailyAverage[index]?.totalTime,
        })
      );
      setGraphData(formattedData);

      setAllTotalAverage(data.all.totalAverage);
      setMyTotalAverage(data.my.totalAverage);
    } catch (error) {
      console.error('Error fetching graph data:', error);
    }
  };

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

  useEffect(() => {
    loadGraphData();
  }, [offset]);

  const handlePrev = () => {
    setOffset(offset + 1);
    console.log(formatHours(allTotalAverage));
  };

  const handleNext = () => {
    if (offset > 0) {
      setOffset(offset - 1);
    }
  };

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
      <S.ArrowGraphContainer>
        <IoIosArrowBack onClick={handlePrev} />
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={graphData}>
            <XAxis dataKey="date" />
            <YAxis tickFormatter={formatHours} />
            <Tooltip
              formatter={(value) => formatHoursAndMinutes(value as number)}
            />
            <ReferenceLine
              y={allTotalAverage}
              format={formatHours(allTotalAverage)}
              stroke="#6859FC"
              strokeWidth={2}
              strokeDasharray="5 5"
            />
            <ReferenceLine
              y={myTotalAverage}
              format={formatHours(myTotalAverage)}
              stroke="#59ECFC"
              strokeWidth={2}
              strokeDasharray="5 5"
            />
            <Line
              type="monotone"
              dataKey="전체사용자"
              stroke="#6859FC"
              strokeWidth={2}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="Nickname"
              stroke="#59ECFC"
              strokeWidth={2}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <IoIosArrowForward onClick={handleNext} />
      </S.ArrowGraphContainer>
      <CustomLegend />
    </S.StatContainer>
  );
}
