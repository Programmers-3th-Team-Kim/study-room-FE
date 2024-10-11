import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import * as S from '@/pages/statistics/my/components/myPieChart/MyPieChart.style';
import { fetchDailyData } from '@/apis/statistics.api';
import { useEffect, useState } from 'react';

const COLORS = ['#00A9FF', '#89CFF3', '#A0E9FF', '#CDF5FD'];

export default function MyPieChart() {
  const [dailyData, setDailyData] = useState({
    totalTime: '00:00:00',
    maxTime: '00:00:00',
    restTime: '00:00:00',
    planner: [{ todo: '', totalTime: '00:00', percentage: 0 }],
  });

  const loadDailyData = async (year: number, month: number, day: number) => {
    try {
      const params = {
        year,
        month: month.toString().padStart(2, '0'),
        day: day.toString().padStart(2, '0'),
      };
      const data = await fetchDailyData(params);
      setDailyData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const year = 2024;
    const month = 10;
    const day = 11;
    loadDailyData(year, month, day);
  }, []);

  const renderLabel = () => {
    return (
      <>
        <text x="50%" y="50%" textAnchor="middle" fontSize="16">
          총 공부 시간
        </text>
        <text
          x="50%"
          y="50%"
          dy="16"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {dailyData.totalTime}
        </text>
      </>
    );
  };

  return (
    <S.ChartWrapper>
      <S.Title>할 일 통계</S.Title>
      <PieChart width={250} height={250}>
        <Pie
          data={dailyData.planner}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={100}
          fill="#8884d8"
          dataKey="percentage"
          labelLine={false}
          label={renderLabel}
        >
          {dailyData.planner.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <S.ValueContainer>
        <S.ValueWrapper>
          <S.ValueTitle>최대 집중 시간</S.ValueTitle>
          <S.ValueText>{dailyData.maxTime}</S.ValueText>
        </S.ValueWrapper>
        <S.ValueWrapper>
          <S.ValueTitle>휴식 시간</S.ValueTitle>
          <S.ValueText>{dailyData.restTime}</S.ValueText>
        </S.ValueWrapper>
      </S.ValueContainer>
    </S.ChartWrapper>
  );
}
