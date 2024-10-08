import HomeRanking from './components/home-ranking/HomeRanking';
import HomeStudyRooms from './components/home-studyrooms/HomeStudyRooms';
import HomeMy from './components/my/HomeMy';
import { HomePageStyle, Wrap } from './HomePage.style';

export default function HomePage() {
  return (
    <HomePageStyle>
      <Wrap>
        <HomeStudyRooms />
        <HomeRanking />
      </Wrap>
      <HomeMy />
    </HomePageStyle>
  );
}
