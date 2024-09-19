import StudyProfileBox from "@/components/studyProfileBox/StudyProfileBox";
import styled from "styled-components";

function PrivateStudyRoom() {
  // 예시 데이터
  const studyTime = "02:15:29"; // 현재 공부 시간
  const totalStudyTime = "09:59:29"; // 총 공부 시간
  const profileImageUrl = ""; // API에서 받아온 프로필 이미지 URL (없을 경우 빈 문자열)

  return (
    <PrivateStudyRoomStyle>
      <StudyProfileBox 
        // studyTime={studyTime}
        // totalStudyTime={totalStudyTime}
        // profileImageUrl={profileImageUrl}
      />
    </PrivateStudyRoomStyle>
  );
};

const PrivateStudyRoomStyle = styled.div``;

export default PrivateStudyRoom;