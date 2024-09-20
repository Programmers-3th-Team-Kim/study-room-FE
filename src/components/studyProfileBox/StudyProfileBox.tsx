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
    <StudyProfileBoxStyle isGroup={isGroup}>
      <TimeDisplay isGroup={isGroup}>
        <div className='time'>{currentTaskTime}</div>
        <div className='time'>{totalStudyTime}</div>
      </TimeDisplay>
      <ProfileImageContainer isGroup={isGroup}>
        <ProfileImage src={profileImage} alt="Profile" />
      </ProfileImageContainer>
      {isGroup && userId && (<UserIdDisplay isGroup={isGroup}>{userId}</UserIdDisplay>)}
    </StudyProfileBoxStyle>
  );
};

const StudyProfileBoxStyle = styled.div<{ isGroup: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: ${({ isGroup }) => (isGroup ? '384px' : '1088px')};
  height: ${({ isGroup }) => (isGroup ? '242px' : '686px')};
  background-color: ${({ theme }) => theme.color.bgGray};
`;

const TimeDisplay = styled.div<{ isGroup: boolean }>`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: ${({ isGroup }) => (isGroup ? '30px' : '70px')};
  top: 20px;

  .time {
    margin: ${({ isGroup }) => (isGroup ? '0 20px' : '0px 40px')};
  }
`;

const ProfileImageContainer = styled.div<{ isGroup: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ isGroup }) => (isGroup ? '182px' : '622px')};
  height: ${({ isGroup }) => (isGroup ? '182px' : '622px')};
  border-radius: 50%;
  background-color: white;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 80%; // 이미지 크기 조정
  height: 80%;
`;

const UserIdDisplay = styled.div<{ isGroup: boolean }>`
  position: absolute;
  font-size: ${({ isGroup }) => (isGroup ? '22px' : '50px')};
  left: ${({ isGroup }) => (isGroup ? '20px' : '40px')};
  bottom: ${({ isGroup }) => (isGroup ? '20px' : '40px')};
`;


export default StudyProfileBox;