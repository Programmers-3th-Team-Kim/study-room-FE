import { Route, Routes } from 'react-router-dom';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import { MainContentArea, RouterStyle } from './Router.style';
import Planner from '../pages/planner/Planner';

export default function Router() {
  return (
    <RouterStyle>
      <Sidebar />
      <MainContentArea>
        <Header />
        <Routes>
          <Route path="/planner" element={<Planner />}></Route>
        </Routes>
      </MainContentArea>
    </RouterStyle>
  );
}
