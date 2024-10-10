import { useAuthStore } from '@/stores/auth.store';
import JWTPage from './components/JWTPage';
import Page from './components/Page';
import { HomePageStyle } from './HomePage.style';

export default function HomePage() {
  const accessToken = useAuthStore((state) => state.accessToken);

  return <HomePageStyle>{accessToken ? <JWTPage /> : <Page />}</HomePageStyle>;
}
