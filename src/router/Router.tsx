import { Route, Routes } from 'react-router-dom';

import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/register/RegisterPage';
import Planner from '../pages/planner/Planner';
import SearchStudyRoom from '@/pages/studyRoom/SearchStudyRoom';

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/planner" element={<Planner />}></Route>
      <Route path="/study-rooms" element={<SearchStudyRoom />}></Route>
    </Routes>
  );
}
