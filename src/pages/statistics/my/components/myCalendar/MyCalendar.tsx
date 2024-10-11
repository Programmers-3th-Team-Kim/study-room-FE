import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import * as S from '@/pages/statistics/my/components/myCalendar/MyCalendar.style';
const localizer = dayjsLocalizer(dayjs);

const studyHours = {
  '2024-10-01': 2,
  '2024-10-02': 6,
  '2024-10-03': 9,
  '2024-10-04': 11,
  '2024-10-05': 1,
};

const getBackgroundColor = (time: number) => {
  if (time >= 10) return '#2A7029';
  if (time >= 7) return '#64A562';
  if (time >= 4) return '#80AF81';
  if (time >= 2) return '#AAD3AB';
  if (time >= 1) return '#D6EFD8';
  return 'white';
};

const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

const CustomHeader = ({ label, date }) => {
  const dayOfWeek = dayjs(date).day();

  return (
    <S.Header style={{ fontWeight: 'bold', textAlign: 'center' }}>
      {weekDays[dayOfWeek]}
    </S.Header>
  );
};

const CustomToolbar = (toolbar) => {
  const goToBack = () => {
    toolbar.onNavigate('PREV');
  };

  const goToNext = () => {
    toolbar.onNavigate('NEXT');
  };

  return (
    <S.DateWrapper>
      <S.Year>{dayjs(toolbar.date).format('YYYY년')}</S.Year>
      <S.MonthWrapper>
        <S.ArrowButton>
          <IoIosArrowBack onClick={goToBack} />
        </S.ArrowButton>
        <S.Month>{dayjs(toolbar.date).format('MM월')}</S.Month>
        <S.ArrowButton>
          <IoIosArrowForward onClick={goToNext} />
        </S.ArrowButton>
      </S.MonthWrapper>
    </S.DateWrapper>
  );
};

const Legend = () => {
  return (
    <S.Legend>
      <S.LegendItem bgcolor="#D6EFD8">1분 이상</S.LegendItem>
      <S.LegendItem bgcolor="#AAD3AB">2시간 이상</S.LegendItem>
      <S.LegendItem bgcolor="#80AF81">4시간 이상</S.LegendItem>
      <S.LegendItem bgcolor="#64A562">6시간 이상</S.LegendItem>
      <S.LegendItem bgcolor="#2A7029">8시간 이상</S.LegendItem>
    </S.Legend>
  );
};

const DateCellWrapper = ({ value }: { value: Date }) => {
  return <S.DateCellWrapper />;
};

const CustomDateHeader = ({ label, date }: { label: string; date: Date }) => {
  const dateString = dayjs(date).format('YYYY-MM-DD');
  const time = studyHours[dateString] || 0;
  const backgroundColor = getBackgroundColor(time);

  return (
    <S.DateHeader>
      <S.DateHeaderButton backgroundColor={backgroundColor}>
        {dayjs(date).format('DD')}
      </S.DateHeaderButton>
    </S.DateHeader>
  );
};

export default function MyCalendar() {
  return (
    <div>
      <S.CalendarWrapper>
        <Calendar
          localizer={localizer}
          events={[]}
          startAccessor="start"
          endAccessor="end"
          style={{ minWidth: 380, height: 350 }}
          components={{
            dateCellWrapper: DateCellWrapper,
            toolbar: CustomToolbar,
            header: CustomHeader,
            month: {
              dateHeader: CustomDateHeader,
            },
          }}
          views={['month']}
        />
      </S.CalendarWrapper>
      <Legend />
    </div>
  );
}
