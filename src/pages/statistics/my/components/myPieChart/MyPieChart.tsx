import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import * as S from '@/pages/statistics/my/components/myPieChart/MyPieChart.style';

const data = [
  { name: '할 일 1', value: 3 },
  { name: '할 일 2', value: 1 },
  { name: '할 일 3', value: 0.5 },
  { name: '할 일 4', value: 0.25 },
];

const COLORS = ['#00A9FF', '#89CFF3', '#A0E9FF', '#CDF5FD'];

export default function MyPieChart() {
  const totalCount = '03:33:33';
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
          {totalCount}
        </text>
      </>
    );
  };

  return (
    <S.ChartWrapper>
      <S.Title>할 일 통계</S.Title>
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          labelLine={false}
          label={renderLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <S.ValueContainer>
        <S.ValueWrapper>
          <S.ValueTitle>최대 집중 시간</S.ValueTitle>
          <S.ValueText>50:29</S.ValueText>
        </S.ValueWrapper>
        <S.ValueWrapper>
          <S.ValueTitle>휴식 시간</S.ValueTitle>
          <S.ValueText>02:35</S.ValueText>
        </S.ValueWrapper>
      </S.ValueContainer>
    </S.ChartWrapper>
  );
}
