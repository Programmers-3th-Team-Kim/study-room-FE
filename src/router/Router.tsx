import { Route, Routes } from 'react-router-dom';

import StudyRooms from '@/pages/study-room/StudyRooms';
import LoginPage from '@/pages/login/LoginPage';
import RegisterPage from '@/pages/register/RegisterPage';
import ProfilePage from '@/pages/profile/ProfilePage';
import Planner from '@/pages/planner/Planner';
import PrivateStudyRoom from '@/pages/privateStudyRoom/PrivateStudyRoom';

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
      <Route path="/planner" element={<Planner />}></Route>
      <Route path="/study-rooms" element={<StudyRooms />}></Route>
      <Route path="/study-room" element={<PrivateStudyRoom />}></Route>
    </Routes>
  );
}
