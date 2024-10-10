import HomeRanking from './home-ranking/HomeRanking';
import HomeStudyRooms from './home-studyrooms/HomeStudyRooms';
import { PageStyle } from './Page.style';

export default function Page() {
  return (
    <PageStyle>
      <HomeStudyRooms />
      <HomeRanking />
    </PageStyle>
  );
}
