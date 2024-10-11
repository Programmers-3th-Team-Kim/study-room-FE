import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { TbSunrise, TbSun, TbSunset, TbMoon } from 'react-icons/tb';

import * as S from '@/pages/statistics/my/components/myBarChart/MyBarChart.style';

const data = [
  { value: '02 : 13 : 20', percentage: 5 },
  { value: '12 : 03 : 00', percentage: 25 },
  { value: '16 : 00 : 00', percentage: 15 },
  { value: '12 : 00 : 00', percentage: 30 },
];

const icons = [
  <TbSunrise color="#FFA500" />,
  <TbSun />,
  <TbSunset />,
  <TbMoon />,
];
const labels = ['아침', '낮', '저녁', '밤'];

const CustomYAxisTick = ({ x, y, payload }) => {
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

export default function MyBarChart() {
  return (
    <S.ChartWrapper>
      <S.ChartTitle>
        <IoIosArrowBack />
        8월
        <IoIosArrowForward />
      </S.ChartTitle>
      <S.ChartValueContainer>
        <S.ChartValueWrapper>
          <S.ValueTitle>공부 시간</S.ValueTitle>
          <S.ValueText>43:13:20</S.ValueText>
        </S.ChartValueWrapper>
        <S.ChartValueWrapper>
          <S.ValueTitle>휴식 시간</S.ValueTitle>
          <S.ValueText>06:27:20</S.ValueText>
        </S.ChartValueWrapper>
      </S.ChartValueContainer>
      <S.BarContainer>
        <ResponsiveContainer width={280} height={240}>
          <BarChart data={data} layout="vertical" barSize={20}>
            <XAxis type="number" axisLine={false} tick={false} />
            <YAxis
              type="category"
              axisLine={false}
              tickLine={false}
              tick={CustomYAxisTick}
            />

            <Bar dataKey="percentage" fill="#333" background={{ fill: '#eee' }}>
              <LabelList
                dataKey="value"
                position="left"
                style={{ fontSize: '14px', fill: '#333', fontWeight: 'bold' }}
              />
              <LabelList
                dataKey="percentage"
                position="right"
                style={{ fill: '#333', fontWeight: 'bold' }}
              />
            </Bar>
            <span>{data[0].percentage}</span>
          </BarChart>
        </ResponsiveContainer>
      </S.BarContainer>
    </S.ChartWrapper>
  );
}
