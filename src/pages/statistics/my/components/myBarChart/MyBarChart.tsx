import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import { TbSunrise, TbSun, TbSunset, TbMoon } from 'react-icons/tb';
import * as S from '@/pages/statistics/my/components/myBarChart/MyBarChart.style';

const icons = [
  <TbSunrise color="#FF9500" />,
  <TbSun color="#FFCC00" />,
  <TbSunset color="#5B71E3" />,
  <TbMoon color="#030086" />,
];
const labels = ['아침', '낮', '저녁', '밤'];

interface CustomYAxisTickProps {
  x: number;
  y: number;
  payload: {
    value: string;
    index: number;
  };
}

const CustomYAxisTick = ({ x, y, payload }: CustomYAxisTickProps) => {
  return (
    <g transform={`translate(${x - 110},${y - 10})`}>
      <foreignObject width={120} height={40}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: '14px', marginRight: '5px' }}>
            {icons[payload.index]}
          </span>
          <span style={{ fontSize: '14px', fontWeight: 'bold' }}>
            {labels[payload.index]}
          </span>
        </div>
      </foreignObject>
    </g>
  );
};

interface TimeStat {
  time: string;
  percentage: number;
}

interface Data {
  totalTime: string;
  restTime: string;
  morning: TimeStat;
  afternoon: TimeStat;
  evening: TimeStat;
  night: TimeStat;
}

export default function MyBarChart({ data }: { data: Data }) {
  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }

  const chartData = [
    {
      time: data.morning?.time || '00:00',
      percentage: data.morning?.percentage || 0,
    },
    {
      time: data.afternoon?.time || '00:00',
      percentage: data.afternoon?.percentage || 0,
    },
    {
      time: data.evening?.time || '00:00',
      percentage: data.evening?.percentage || 0,
    },
    {
      time: data.night?.time || '00:00',
      percentage: data.night?.percentage || 0,
    },
  ];

  return (
    <S.ChartWrapper>
      <S.ChartValueContainer>
        <S.ChartValueWrapper>
          <S.ValueTitle>공부 시간</S.ValueTitle>
          <S.ValueText>{data.totalTime}</S.ValueText>
        </S.ChartValueWrapper>
        <S.ChartValueWrapper>
          <S.ValueTitle>휴식 시간</S.ValueTitle>
          <S.ValueText>{data.restTime}</S.ValueText>
        </S.ChartValueWrapper>
      </S.ChartValueContainer>
      <S.BarContainer>
        <ResponsiveContainer width={280} height={240}>
          <BarChart data={chartData} layout="vertical" barSize={20}>
            <XAxis type="number" axisLine={false} tick={false} />
            <YAxis
              type="category"
              axisLine={false}
              tickLine={false}
              tick={CustomYAxisTick}
            />

            <Bar dataKey="percentage" fill="#333" background={{ fill: '#eee' }}>
              <LabelList
                dataKey="time"
                position="left"
                style={{ fontSize: '14px', fill: '#333', fontWeight: 'bold' }}
              />
              <LabelList
                dataKey="percentage"
                position="right"
                style={{ fill: '#333', fontWeight: 'bold' }}
              />
            </Bar>
            <span>{data[0]?.percentage}</span>
          </BarChart>
        </ResponsiveContainer>
      </S.BarContainer>
    </S.ChartWrapper>
  );
}
