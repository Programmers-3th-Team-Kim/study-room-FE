import { useEffect, useState } from 'react';
import HomeStudyItem from './item/HomeStudyItem';
import * as S from './HomeStudyRooms.style';
import ToStudyRooms from './button/ToStudyRooms';
import ToPrivateButton from './button/ToPrivateButton';
import { StudyItem } from '@/types/studyRoom';

const url = `${import.meta.env.VITE_REACT_APP_API_URL}/rooms?limit=2`;

function HomeStudyRooms() {
  const [rooms, setRooms] = useState<StudyItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('네트워크 응답이 좋지 않습니다.');
        }
        const data = await response.json();
        setRooms(data);
        console.log(data);
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

    fetchRooms();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>오류 발생: {error}</div>;
  }

  return (
    <S.HomeStudyRoomsStyle>
      <S.Title>최신 스터디룸</S.Title>
      <S.Wrap>
        <S.StudyRoomWrap>
          {rooms.map((room) => (
            <HomeStudyItem
              key={room._id}
              title={room.title}
              imageUrl={room.imageUrl}
              tagList={room.tagList}
              isPublic={room.isPublic}
              isChat={room.isChat}
              maxNum={room.maxNum}
              currentNum={room.currentNum}
            />
          ))}
        </S.StudyRoomWrap>
        <S.ButtonWrap>
          <ToPrivateButton />
          <ToStudyRooms />
        </S.ButtonWrap>
      </S.Wrap>
    </S.HomeStudyRoomsStyle>
  );
}

export default HomeStudyRooms;
