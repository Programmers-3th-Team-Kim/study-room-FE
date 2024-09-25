import { useEffect, useState } from 'react';
import StudyItem from './StudyItem';
import * as S from './StudyGrid.style';
import axios from 'axios';

interface Room {
  _id: string;
  title: string;
  tagList: string[];
  notice?: string;
  maxNum: number;
  isPublic: boolean;
  password?: string;
  isChat?: boolean;
  imageUrl?: string;
  roomManager: string;
  currentMembers: string[];
  createdAt: string;
  currentNum: number;
}

function StudyGrid() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRooms = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get('http://localhost:3000/rooms');
        console.log('API 응답:', res.data);
        if (Array.isArray(res.data)) {
          const roomData: Room[] = res.data.map((room) => ({
            _id: room._id,
            title: room.title,
            tagList: room.tagList,
            notice: room.notice,
            maxNum: room.maxNum,
            isPublic: room.isPublic,
            password: room.password,
            isChat: room.isChat,
            imageUrl: room.imageUrl,
            roomManager: room.roomManager,
            currentMembers: room.currentMember,
            createdAt: room.createdAt,
            currentNum: room.currentNum,
          }));
          setRooms(roomData);
        } else {
          throw new Error('응답 데이터 형식이 올바르지 않습니다.');
        }
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
        setError(
          '방 목록을 불러오는 데 실패했습니다.' + (error as Error).message
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <S.ScrollContainer>
      <S.StudyGridStyle id="scrollable-grid">
        {isLoading ? (
          <div>로딩 중...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          rooms.map((room) => (
            <StudyItem
              key={room._id}
              title={room.title}
              imageUrl={room.imageUrl}
              tagList={room.tagList}
              isPublic={room.isPublic}
              maxNum={room.maxNum}
              currentNum={room.currentNum}
            />
          ))
        )}
      </S.StudyGridStyle>
    </S.ScrollContainer>
  );
}

export default StudyGrid;
