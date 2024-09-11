import CustomDatePicker from '../../components/datePicker/DatePicker';
import TodoBox from './components/todoBox/TodoBox';
import * as S from './Planner.style';

export default function Planner() {
  return (
    <S.PlannerWrapper>
      <S.LeftPannel>
        <div className="label">오늘의 계획표</div>
        <S.LeftHeader>
          <CustomDatePicker className="date" />
          <div className="addButton">+</div>
        </S.LeftHeader>
        <S.LeftContentWrapper>
          <TodoBox></TodoBox>
        </S.LeftContentWrapper>
      </S.LeftPannel>
      <S.RightPannel>
        <div className="label">오늘의 스터디 시간</div>
      </S.RightPannel>
    </S.PlannerWrapper>
  );
}
