import { useAuthStore } from '@/stores/auth.store';
import { HomePageStyle, JWTPageStyle, Wrap } from './HomePage.style';
import StudyRooms from './components/home-studyrooms/StudyRooms';
import Ranking from './components/home-ranking/Ranking';
import HomeMy from './components/my/HomeMy';

export default function HomePage() {
  const accessToken = useAuthStore((state) => state.accessToken);

  if (accessToken) {
    return (
      <JWTPageStyle>
        <Wrap>
          <StudyRooms limit={2} isJWT={true} />
          <Ranking isJWT={true} />
        </Wrap>
        <HomeMy />
      </JWTPageStyle>
    );
  } else {
    return (
      <HomePageStyle>
        <StudyRooms limit={6} isJWT={false} />
        <Ranking isJWT={false} />
      </HomePageStyle>
    );
  }
}
