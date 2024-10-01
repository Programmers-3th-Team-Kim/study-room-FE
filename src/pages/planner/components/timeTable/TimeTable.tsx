import { useEffect, useState } from 'react';
import { colorMap, hex2rgba } from '@/data/colorMap';
import { GetTodosRes } from '@/models/studyRoomTodos.model';
import * as S from './TimeTable.style';

interface TimeTableProps {
  todos: GetTodosRes[];
}

interface GetTodosResWithColor extends GetTodosRes {
  color: string;
}

export default function TimeTable({ todos }: TimeTableProps) {
  const gridArray = new Array(7 * 24).fill(1);
  const [todosWithTime, setTodosWithTime] = useState<GetTodosResWithColor[]>(
    []
  );

  useEffect(() => {
    const newTodos = todos.filter((todo) => {
      return todo.endTime && todo.startTime;
    });

    const newTodosWithColor = newTodos.map((todo, index) => {
      return { ...todo, color: colorMap[index] };
    });

    setTodosWithTime(newTodosWithColor);
  }, [todos]);

  return (
    <S.TimeTableContainer>
      {gridArray.map((_, index) => {
        let isSelected = false;
        let isStart = false;
        let isEnd = false;
        let startIndex, endIndex, color, startWidth, endWidth;

        for (const todo of todosWithTime) {
          const result = calcGridIndex(todo);
          startIndex = result.startIndex;
          endIndex = result.endIndex;
          color = result.color;
          startWidth = result.startWidth;
          endWidth = result.endWidth;

          if (
            startIndex &&
            endIndex &&
            index >= startIndex &&
            index <= endIndex
          ) {
            isSelected = true;

            if (startIndex === index) {
              isStart = true;
              break;
            }
            if (endIndex === index) {
              isEnd = true;
              break;
            }
            break;
          }
        }

        if (index % 7 === 0) {
          return (
            <div key={index} className="item hours">
              {index / 7}
            </div>
          );
        }
        return isSelected ? (
          <div className="item" key={index}>
            <S.SelectedTime
              isStart={isStart}
              isEnd={isEnd}
              color={color}
              startWidth={startWidth}
              endWidth={endWidth}
            />
          </div>
        ) : (
          <div key={index} className="item" />
        );
      })}
    </S.TimeTableContainer>
  );
}

const calcGridIndex: (todo: GetTodosResWithColor) => {
  startIndex: number | undefined;
  endIndex: number | undefined;
  color: string | undefined;
  startWidth: string | undefined;
  endWidth: string | undefined;
} = (todo) => {
  let startIndex;
  let endIndex;
  let color;
  let startWidth;
  let endWidth;

  if (todo.startTime && todo.endTime) {
    const [startHour, startMinute] = todo.startTime
      .split(':')
      .map((val) => parseInt(val));
    const [endHour, endMinute] = todo.endTime
      .split(':')
      .map((val) => parseInt(val));

    startIndex = 7 * startHour + Math.floor(startMinute / 10) + 1;
    endIndex = 7 * endHour + Math.ceil(endMinute / 10);
    color = todo.color ? hex2rgba(todo.color, 0.5) : undefined;

    startWidth = `${(startMinute % 10) * 10}%`;
    endWidth = `${100 - (endMinute % 10) * 10}%`;

    return { startIndex, endIndex, color, startWidth, endWidth };
  }

  return {
    startIndex,
    endIndex,
    color,
    startWidth,
    endWidth,
  };
};
