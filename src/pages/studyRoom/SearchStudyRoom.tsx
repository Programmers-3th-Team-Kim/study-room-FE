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
        <div className="header">
          <Search />
          <SelectBox />
          <CheckBox />
          <CreateButton />
        </div>
        <StudyGrid />
      </MainContentArea>
    </SearchStudyRoomStyle>
  );
};

const SearchStudyRoomStyle = styled.div`
  display: flex;

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 29px;
    margin-top: 77px;
  }
`;

export const MainContentArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default SearchStudyRoom;