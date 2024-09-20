import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface StudyProfileBoxProps {
  isGroup?: boolean;
  userId?: string;
  initialCurrentTaskTime?: string;
  initialTotalStudyTime?: string;
  profileImage?: string;
};

const StudyProfileBox: React.FC<StudyProfileBoxProps> = ({ 
  isGroup = false,
  userId,
  initialCurrentTaskTime = "00:00:00",
  initialTotalStudyTime = "00:00:00",
  profileImage = "https://via.placeholder.com/622", 
}) => {
  const [currentTaskTime, setCurrentTaskTime] = useState(initialCurrentTaskTime);
  const [totalStudyTime, setTotalStudyTime] = useState(initialTotalStudyTime);

  useEffect(() => {
    setCurrentTaskTime(initialCurrentTaskTime);
    setTotalStudyTime(initialTotalStudyTime);
  }, [initialCurrentTaskTime, initialTotalStudyTime]);

  return (
    <StudyProfileBoxStyle>
      <TimeDisplay>
        <div className='time'>{currentTaskTime}</div>
        <div className='time'>{totalStudyTime}</div>
      </TimeDisplay>
      <ProfileImageContainer>
        <ProfileImage src={profileImage} alt="Profile" />
      </ProfileImageContainer>
      {isGroup && userId && (<UserIdDisplay>{userId}</UserIdDisplay>)}
    </StudyProfileBoxStyle>
  );
};

const StudyProfileBoxStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 1088px;
  height: 686px;
  background-color: ${({ theme }) => theme.color.bgGray};
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 622px; // 흰 원의 크기
  height: 622px;
  border-radius: 50%;
  background-color: white;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 80%; // 이미지 크기 조정
  height: 80%;
`;

const UserIdDisplay = styled.div`
  position: absolute;
  font-size: 50px;
  left: 40px;
  bottom: 40px;
`;


export default StudyProfileBox;