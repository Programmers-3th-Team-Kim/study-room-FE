import * as S from './HomeMy.style';
import Statistics from './statistics/Statistics';
import Todo from './todo/Todo';

function HomeMy() {
  return (
    <S.HomeMyStyle>
      <Todo />
      <Statistics />
    </S.HomeMyStyle>
  );
}

export default HomeMy;
