import { FaLock, FaLockOpen } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import styled from "styled-components";

interface StudyItemProps {
  title: string;
  imageUrl?: string;
  hashtags?: string[];
  isPublic: boolean;
  maxParticipants: number;
  currentParticipants: number;
};

function StudyItem({ title, imageUrl, hashtags = [], isPublic, maxParticipants, currentParticipants }: StudyItemProps) {
  return (
    <StudyItemStyle>
      <ItemContainer imageUrl={imageUrl}>
        <ItemContent>
          <Privacy>{isPublic ? <FaLockOpen /> : <FaLock />}</Privacy>
          <Title>{title}</Title>
          <ParticipantCount>
            <MdPerson />
            {currentParticipants}/{maxParticipants}
          </ParticipantCount>
        </ItemContent>
      </ItemContainer>
      <ItemFooter>
          <ItemTitle>{title}</ItemTitle>
          <Hashtags>
            {hashtags.map((hashtag, index) => (
              <Hashtag key={index}>#{hashtag}</Hashtag>
            ))}
          </Hashtags>
        </ItemFooter>
    </StudyItemStyle>
  );
};

const StudyItemStyle = styled.div`
  width: 328px;
`;

const ItemContainer = styled.div<{ imageUrl?: string }>`
  position: relative;
  width: 100%;
  height: 207px;
  background: ${(props) => (props.imageUrl ? `url(${props.imageUrl})` : '#E5E5E5')};
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
`;

const ItemContent = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  color: white;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0;
  padding-top: 70px;
  font-size: 25px;
`;

const ParticipantCount = styled.p`
  margin: 10px 0;
  font-size: 25px;
`;

const Privacy = styled.p`
  margin: 0;
  padding-top: 10px;
  font-size: 25px;
`;

const ItemFooter = styled.div`
  position: absolute;
  padding: 5px;
  margin-top: 5px;
`;

const ItemTitle = styled.h4`
  margin: 0;
  font-size: 18px;
`;

const Hashtags = styled.div`
  margin-top: 5px;
`;

const Hashtag = styled.span`
  margin-right: 5px;
  font-size: 18px;
  color: #7c7c7c;
  font-style: italic;
`;

export default StudyItem;