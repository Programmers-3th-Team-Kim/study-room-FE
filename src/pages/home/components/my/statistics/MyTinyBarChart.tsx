import { BarChart, Bar, XAxis, ResponsiveContainer, LabelList } from 'recharts';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

interface MyDataItem {
  date: string;
  totalTime: number;
}

interface MyData {
  myData: MyDataItem[];
}

const MyTinyBarChart = ({ myData }: MyData) => {
  const formatXAxis = (date: string) => {
    const formattedDate = dayjs(date).format('MM.DD');
    const dayOfWeek = dayjs(date).format('(dd)');
    return `${formattedDate}${dayOfWeek}`;
  };

  const formatHoursAndMinutes = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}:${remainingMinutes.toString().padStart(2, '0')}`;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={myData} barCategoryGap="20%">
        <XAxis
          dataKey="date"
          tickFormatter={formatXAxis}
          tickLine={false}
          tick={{ dy: 5, fontSize: 12 }}
          interval={0}
        />
        <Bar dataKey="totalTime" fill="#8884d8">
          <LabelList
            dataKey="totalTime"
            position="top"
            formatter={(value: number) => formatHoursAndMinutes(value)}
            style={{ fontSize: '10px' }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MyTinyBarChart;
