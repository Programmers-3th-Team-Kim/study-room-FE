import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
  Legend,
} from 'recharts';
import * as S from '@/pages/statistics/all/AllStatisticsPage.style';

const data = [
  { name: '10/01', 전체사용자: 25, Nickname: 24 },
  { name: '10/02', 전체사용자: 55, Nickname: 22 },
  { name: '10/03', 전체사용자: 28, Nickname: 29 },
  { name: '10/04', 전체사용자: 44, Nickname: 20 },
  { name: '10/05', 전체사용자: 54, Nickname: 21 },
  { name: '10/06', 전체사용자: 50, Nickname: 20 },
  { name: '10/07', 전체사용자: 32, Nickname: 25 },
];

const CustomLegend = () => (
  <S.LegendContainer>
    <S.LegendItem>
      <S.Line color="#59ECFC" />
      나의 <br />
      공부 시간
    </S.LegendItem>
    <S.LegendItem>
      <S.Line color="#59ECFC" dashed />
      나의 평균 <br />
      공부 시간
    </S.LegendItem>
    <S.LegendItem>
      <S.Line color="#6859FC" />
      전체 사용자
      <br />
      공부 시간
    </S.LegendItem>
    <S.LegendItem>
      <S.Line color="#6859FC" dashed />
      전체 사용자 <br />
      평균 공부 시간
    </S.LegendItem>
  </S.LegendContainer>
);

export default function AllStatisticsPage() {
  return (
    <S.StatContainer>
      <div>
        <S.AvgWrapper>
          <S.Avg>
            <S.AvgTitle>전체 사용자는</S.AvgTitle>
            <div>
              <S.AvgLine>
                전날 평균<S.AvgSpan>10시간</S.AvgSpan>
              </S.AvgLine>
              <S.AvgLine>
                저번 주 평균<S.AvgSpan>12시간</S.AvgSpan>
              </S.AvgLine>
              <S.AvgLine>
                저번 달 평균<S.AvgSpan>13시간</S.AvgSpan> 공부했어요!
              </S.AvgLine>
            </div>
          </S.Avg>
          <S.Avg>
            <S.AvgTitle>닉네임님은</S.AvgTitle>
            <div>
              <S.AvgLine>
                전날 평균 <S.AvgSpan>4시간</S.AvgSpan>
              </S.AvgLine>
              <S.AvgLine>
                저번 주 평균 <S.AvgSpan>8시간</S.AvgSpan>
              </S.AvgLine>
              <S.AvgLine>
                저번 달 평균 <S.AvgSpan>10시간</S.AvgSpan> 공부했어요!
              </S.AvgLine>
            </div>
          </S.Avg>
        </S.AvgWrapper>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <ReferenceLine
            y={35}
            stroke="#6859FC"
            strokeWidth={2}
            strokeDasharray="5 5"
          />
          <ReferenceLine
            y={20}
            stroke="#59ECFC"
            strokeWidth={2}
            strokeDasharray="5 5"
          />
          <Legend content={<CustomLegend />} />

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
    </S.StatContainer>
  );
}
