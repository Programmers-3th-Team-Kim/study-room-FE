import JWTHomeRanking from './home-ranking/JWTHomeRanking';
import JWTHomeStudyRooms from './home-studyrooms/JWTHomeStudyRooms';
import { JWTPageStyle, Wrap } from './JWTPage.style';
import HomeMy from './my/HomeMy';

export default function JWTPage() {
  return (
    <JWTPageStyle>
      <Wrap>
        <JWTHomeStudyRooms />
        <JWTHomeRanking />
      </Wrap>
      <HomeMy />
    </JWTPageStyle>
  );
}
