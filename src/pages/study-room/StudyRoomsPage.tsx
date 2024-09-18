import { MainContentArea, StudyRoomsPageStyle } from "./StudyRoomsPage.style";
import SelectBox from "./components/filter/SelectBox";
import Search from "./components/search/Search";
import CreateButton from "./components/button/CreateButton";
import StudyGrid from "./components/item/StudyGrid";
import CheckBox from "./components/filter/CheckBox";

function StudyRoomsPage() {
  return (
    <StudyRoomsPageStyle>
      <MainContentArea>
        <div className="wrapper">
          <div className="header">
            <Search/>
            <SelectBox />
            <CheckBox />
            <CreateButton />
          </div>
          <StudyGrid />
        </div>
      </MainContentArea>
    </StudyRoomsPageStyle>
  );
};

export default StudyRoomsPage;