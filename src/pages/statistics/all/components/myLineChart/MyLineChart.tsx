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

import { fetchAllGraph } from '@/apis/statistics.api';
import dayjs from 'dayjs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import * as S from '@/pages/statistics/all/components/myLineChart/MyLineChart.style';
import { formatHours, formatHoursAndMinutes } from '@/utils/formatTime';

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

export default function MyLineChart() {
  const [graphData, setGraphData] = useState([]);
  const [allTotalAverage, setAllTotalAverage] = useState(0);
  const [myTotalAverage, setMyTotalAverage] = useState(0);
  const [offset, setOffset] = useState(0);

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

  return (
    <>
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
    </>
  );
}
