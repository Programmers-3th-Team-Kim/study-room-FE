import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeStudyItem from './item/HomeStudyItem';
import * as S from './HomeStudyRooms.style';
import ToStudyRooms from './button/ToStudyRooms';
import ToPrivateButton from './button/ToPrivateButton';
import { StudyItem } from '@/types/studyRoom';
import { HomeRankingStyle } from '../home-ranking/HomeRanking.style';
import Loader from '@/components/loader/Loader';
import { homefetchRooms } from '@/apis/studyRooms.api';

interface HomeStudyRoomsProps {
  limit: number;
  isJWT: boolean;
}

const HomeStudyRooms = ({ limit, isJWT }: HomeStudyRoomsProps) => {
  const [rooms, setRooms] = useState<StudyItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getRooms = async () => {
      try {
        const data = await homefetchRooms(limit);
        setRooms(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('알 수 없는 오류가 발생했습니다.');
        }
      } finally {
        setLoading(false);
      }
    };

    getRooms();
  }, [limit]);

  const handleItemClick = (id: string) => {
    if (isJWT) {
      navigate(`/study-room/${id}`);
    } else {
      navigate('/login');
    }
  };

  if (loading) {
    return (
      <HomeRankingStyle>
        <Loader />
      </HomeRankingStyle>
    );
  }

  if (error) {
    return <S.Text>{error}</S.Text>;
  }

  return (
    <S.HomeStudyRoomsStyle>
      <S.Title>스터디룸</S.Title>
      <S.Wrap>
        <S.StudyRoomWrap>
          {rooms.map((room) => {
            const roomId = room._id;
            return (
              <HomeStudyItem
                key={roomId}
                title={room.title}
                imageUrl={room.imageUrl}
                tagList={room.tagList}
                isPublic={room.isPublic}
                isChat={room.isChat}
                maxNum={room.maxNum}
                currentNum={room.currentNum}
                onClick={roomId ? () => handleItemClick(roomId) : undefined}
              />
            );
          })}
        </S.StudyRoomWrap>
        <S.ButtonWrap>
          <ToPrivateButton />
          <ToStudyRooms />
        </S.ButtonWrap>
      </S.Wrap>
    </S.HomeStudyRoomsStyle>
  );
};

export default HomeStudyRooms;
