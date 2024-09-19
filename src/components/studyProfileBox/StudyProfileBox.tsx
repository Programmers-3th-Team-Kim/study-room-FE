// StudyProfileBox.tsx
import React from 'react';
import styled from 'styled-components';

const StudyProfileBox: React.FC = () => {
  return (
    <StudyProfileBoxStyle>
      <TimeDisplay>
        <div className='time'>{dummyData.currentTaskTime}</div>
        <div className='time'>{dummyData.totalStudyTime}</div>
      </TimeDisplay>
      <ProfileImageContainer>
        <ProfileImage src={dummyData.profileImage} alt="Profile" />
      </ProfileImageContainer>
    </StudyProfileBoxStyle>
  );
};

// 더미 데이터
const dummyData = {
  currentTaskTime: "02:15:49",
  totalStudyTime: "09:59:29",
  profileImage: "https://via.placeholder.com/622", // 더미 이미지 URL
};

// 스타일 정의
const StudyProfileBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 1088px;
  height: 686px;
  background-color: ${({ theme }) => theme.color.bgGray};
  position: relative;
`;

const TimeDisplay = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 70px;
  top: 20px;

  .time {
    margin: 0px 40px;
  }
`;

const ProfileImageContainer = styled.div`
  width: 622px; // 흰 원의 크기
  height: 622px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 80%; // 이미지 크기 조정
  height: 80%;
`;

export default StudyProfileBox;