import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import { MainContentArea, RouterStyle } from './Router.style';
import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/register/RegisterPage';

export default function Router() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === '/login' || location.pathname === '/register';

  return (
    <RouterStyle>
      {!isAuthPage && <Sidebar />}
      <MainContentArea>
        {!isAuthPage && <Header />}
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      </MainContentArea>
    </RouterStyle>
  );
}
