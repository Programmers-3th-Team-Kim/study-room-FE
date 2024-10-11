import { useState } from 'react';
import MyBarChart from './components/myBarChart/MyBarChart';
import MyCalendar from './components/myCalendar/MyCalendar';
import MyPieChart from './components/myPieChart/MyPieChart';
import * as S from '@/pages/statistics/my/MyStatisticsPage.style';

export default function MyStatisticsPage() {
  const [viewMode, setViewMode] = useState<'일간' | '주간' | '월간'>('일간');

  const renderChart = () => {
    switch (viewMode) {
      case '주간':
        return <MyBarChart />;
      case '월간':
        return <MyBarChart />;
      default:
        return <MyPieChart />;
    }
  };

  return (
    <S.StatContainer>
      <MyCalendar />
      <S.StatWrapper>
        <S.ButtonWrapper>
          <S.Button onClick={() => setViewMode('일간')}>일간</S.Button>
          <S.Button onClick={() => setViewMode('주간')}>주간</S.Button>
          <S.Button onClick={() => setViewMode('월간')}>월간</S.Button>
        </S.ButtonWrapper>
        <S.ChartWrapper>{renderChart()}</S.ChartWrapper>
      </S.StatWrapper>
    </S.StatContainer>
  );
}
