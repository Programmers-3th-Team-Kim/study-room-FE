import styled from "styled-components";
import Search from "../components/studyroom/search/Search";
import StudyGrid from "@/components/studyroom/item/StudyGrid";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";
import SelectBox from "@/components/studyroom/filter/SelectBox";
import CreateButton from "@/components/studyroom/button/CreateButton";
import CheckBox from "@/components/studyroom/filter/CheckBox";

function SearchStudyRoom() {
  return (
    <SearchStudyRoomStyle>
      <Sidebar />
      <MainContentArea>
        <Header />
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
    margin: 77px 77px 0px 77px;
  }
`;

export const MainContentArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default SearchStudyRoom;