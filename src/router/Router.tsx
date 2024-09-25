import { Route, Routes } from 'react-router-dom';

import StudyRooms from '@/pages/study-room/StudyRooms';
import LoginPage from '@/pages/login/LoginPage';
import SignUpPage from '@/pages/register/SignUpPage';
import Planner from '@/pages/planner/Planner';
import PrivateStudyRoom from '@/pages/privateStudyRoom/PrivateStudyRoom';

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/singup" element={<SignUpPage />}></Route>
      <Route path="/planner" element={<Planner />}></Route>
      <Route path="/study-rooms" element={<StudyRooms />}></Route>
      <Route path="/study-room" element={<PrivateStudyRoom />}></Route>
    </Routes>
  );
}
