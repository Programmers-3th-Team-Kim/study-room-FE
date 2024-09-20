import React, { useEffect, useState } from "react";
import { ProfileImage, ProfileImageContainer, StudyProfileBoxStyle, TimeDisplay, UserIdDisplay } from "./StudyProfileBox.style";

interface StudyProfileBoxProps {
  isGroup?: boolean;
  userId?: string;
  initialCurrentTaskTime?: string;
  initialTotalStudyTime?: string;
  profileImage?: string;
}

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
    <StudyProfileBoxStyle $isGroup={isGroup}>
      <TimeDisplay $isGroup={isGroup}>
        <div className='time'>{currentTaskTime}</div>
        <div className='time'>{totalStudyTime}</div>
      </TimeDisplay>
      <ProfileImageContainer $isGroup={isGroup}>
        <ProfileImage src={profileImage} alt="Profile" />
      </ProfileImageContainer>
      {isGroup && userId && (<UserIdDisplay $isGroup={isGroup}>{userId}</UserIdDisplay>)}
    </StudyProfileBoxStyle>
  );
};

export default StudyProfileBox;