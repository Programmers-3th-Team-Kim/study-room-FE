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

  return (
    <StudyProfileBoxStyle $isGroup={isGroup}>
      <TimeDisplay $isGroup={isGroup}>
        <div className='time'>{initialCurrentTaskTime}</div>
        <div className='time'>{initialTotalStudyTime}</div>
      </TimeDisplay>
      <ProfileImageContainer $isGroup={isGroup}>
        <ProfileImage src={profileImage} alt="Profile" />
      </ProfileImageContainer>
      {isGroup && userId && (<UserIdDisplay $isGroup={isGroup}>{userId}</UserIdDisplay>)}
    </StudyProfileBoxStyle>
  );
};

export default StudyProfileBox;