import styled from "styled-components";
import Search from "@/components/studyroom/search/Search";
import StudyGrid from "@/components/studyroom/item/StudyGrid";
import SelectBox from "@/components/studyroom/filter/SelectBox";
import CreateButton from "@/components/studyroom/button/CreateButton";
import CheckBox from "@/components/studyroom/filter/CheckBox";

function SearchStudyRoom() {
  return (
    <SearchStudyRoomStyle>
      <MainContentArea>
        <div className="wrapper">
          <div className="header">
            <Search />
            <SelectBox />
            <CheckBox />
            <CreateButton />
          </div>
          <StudyGrid />
        </div>
      </MainContentArea>
    </SearchStudyRoomStyle>
  );
};

const SearchStudyRoomStyle = styled.div`
  display: flex;
  
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .header {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin: 77px 0;
  }
`;

export const MainContentArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: calc(100vh - 100px);
  overflow: auto;
`;

export default SearchStudyRoom;