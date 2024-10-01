import { Fragment, useEffect, useRef, useState } from 'react';
import CustomDatePicker from '@/components/datePicker/DatePicker';
import TodoBox from './components/todoBox/TodoBox';
import TimeLine from './components/timeLine/TimeLine';
import TimeTable from './components/timeTable/TimeTable';
import { InputForm } from './components/inputForm/InputForm';
import { colorMap } from '@/data/colorMap';
import { useQuery } from '@tanstack/react-query';
import { getTodos } from '@/apis/planners.api';
import { GetTodosRes } from '@/models/studyRoomTodos.model';
import dayjs from 'dayjs';
import * as S from './Planner.style';

export default function Planner() {
  const [timeLineFullHeight, setTimeLineFullHeight] = useState(0);
  const [isEditFormOpened, setIsEditFormOpened] = useState<boolean>(false);
  const [isAddFormOpened, setIsAddFormOpened] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const timeLineHeightRef = useRef<HTMLDivElement | null>(null);
  const inputFormRef = useRef<HTMLFormElement | null>(null);
  const editFormRef = useRef<Record<number, HTMLDivElement | null>>({});

  const { data: todos } = useQuery<GetTodosRes[]>({
    queryKey: ['getTodos', selectedDate],
    queryFn: () => getTodos(dayjs(selectedDate).format('YYYY-MM-DD')) ?? [],
  });

  useEffect(() => {
    if (timeLineHeightRef.current) {
      const newHeight = timeLineHeightRef.current.scrollHeight;
      setTimeLineFullHeight(newHeight);
    }
  }, [todos, isEditFormOpened, isAddFormOpened]);

  const handleAddButton = () => {
    setIsAddFormOpened(!isAddFormOpened);
    setIsEditFormOpened(false);
  };

  const handleTodoBoxClick = (index: number) => {
    if (editIndex === index) {
      setIsEditFormOpened(!isEditFormOpened);
      setEditIndex(null);
    } else {
      setEditIndex(index);
      setIsEditFormOpened(true);
    }
    setIsAddFormOpened(false);
  };

  useEffect(() => {
    if (isAddFormOpened && inputFormRef.current) {
      inputFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    if (isEditFormOpened && editIndex && editFormRef.current[editIndex]) {
      editFormRef.current[editIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [isAddFormOpened, isEditFormOpened, editIndex]);

  return (
    <S.PlannerWrapper>
      <S.LeftPanel>
        <div className="label">오늘의 계획</div>
        <S.LeftHeader>
          <CustomDatePicker
            className="date"
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <S.AddButton onClick={handleAddButton}></S.AddButton>
        </S.LeftHeader>
        <S.LeftContentWrapper ref={timeLineHeightRef}>
          {todos && todos.length !== 0 && (
            <S.TimeLineFull height={timeLineFullHeight} />
          )}
          <S.TodosWrapper>
            {todos && todos.length
              ? todos.map((todo, index) => {
                  return (
                    <Fragment key={todo._id}>
                      <S.EachContentWrapper
                        ref={(el) => (editFormRef.current[index] = el)}
                      >
                        <TimeLine
                          startTime={todo.startTime}
                          endTime={todo.endTime}
                        />
                        <TodoBox
                          {...todo}
                          onClick={() => {
                            handleTodoBoxClick(index);
                          }}
                          color={colorMap[index]}
                          selectedDate={selectedDate}
                        ></TodoBox>
                      </S.EachContentWrapper>
                      {isEditFormOpened && index === editIndex && (
                        <InputForm
                          setIsEditFormOpened={setIsEditFormOpened}
                          setTodos={setTodos}
                          formType="edit"
                          currentData={todo}
                          setEditIndex={setEditIndex}
                          currentIndex={index}
                          todos={todos}
                        />
                      )}
                    </Fragment>
                  );
                })
              : !isAddFormOpened && (
                  <S.NoData>
                    오늘의 공부 계획을
                    <br />
                    세워보세요!
                  </S.NoData>
                )}
            {isAddFormOpened ? (
              <InputForm
                ref={inputFormRef}
                setIsAddFormOpened={setIsAddFormOpened}
                setTodos={setTodos}
                formType="add"
                setEditIndex={setEditIndex}
                todos={todos ?? []}
              />
            ) : null}
          </S.TodosWrapper>
        </S.LeftContentWrapper>
      </S.LeftPanel>
      <S.RightPanel>
        <div className="label">오늘의 공부 시간</div>
        <S.StudiedTime>XX시간 XX분 공부했어요!</S.StudiedTime>
        <TimeTable
          todos={
            todos
              ? todos.map((todo, index) => {
                  return { ...todo, color: colorMap[index] };
                })
              : []
          }
        />
      </S.RightPanel>
    </S.PlannerWrapper>
  );
}
