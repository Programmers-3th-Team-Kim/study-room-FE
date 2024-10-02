import { useQuery } from '@tanstack/react-query';
import StudyItem from './StudyItem';
import * as S from './StudyGrid.style';
import axios from 'axios';
import { FetchRoomsParams, Room } from '@/types/studyRoom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from '@/components/modal/Modal';
import PasswordInput from '../form/PasswordInput';
import axiosInstance from '@/apis/axiosInstance.api';

// API 요청 함수
const fetchRooms = async (params: FetchRoomsParams) => {
  const { search, isPublic, isPossible, limit, offset } = params;

  const query = new URLSearchParams({
    search: search || '',
    isPublic: isPublic !== undefined ? String(isPublic) : '',
    isPossible: isPossible !== undefined ? String(isPossible) : '',
    limit: limit !== undefined ? String(limit) : '',
    offset: offset !== undefined ? String(offset) : '',
  }).toString();

  const url = `${import.meta.env.VITE_REACT_APP_API_URL}/rooms?${query}`;
  console.log('Fetching URL:', url);
  const res = await axios.get(url);
  return res.data;
};

const checkPassword = async (roomId: string, password: string) => {
  const response = await axiosInstance.post(
    `${import.meta.env.VITE_REACT_APP_API_URL}/rooms/checkPassword/${roomId}`,
    { password }
  );
  console.log(response.data);
  return response.data;
};

function StudyGrid({
  filter,
}: {
  filter: { isPublic?: boolean; isPossible?: boolean; search?: string };
}) {
  const navigate = useNavigate();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [password, setPassword] = useState('');

  const params: FetchRoomsParams = {
    search: filter.search || '',
    isPublic: filter.isPublic,
    isPossible: filter.isPossible,
    limit: 40,
    offset: 0, // 예시로 0으로 설정
  };

  const {
    data: rooms = [],
    isLoading,
    error,
  } = useQuery<Room[], Error>({
    queryKey: ['rooms', params],
    queryFn: () => fetchRooms(params),
  });

  const handleRoomClick = (room: Room) => {
    //console.log('선택한 방', room);
    if (room.isPublic) {
      navigate(`/study-room/${room._id}`);
    } else {
      setSelectedRoom(room);
      setShowPasswordModal(true);
    }
  };

  // 무한 스크롤 구현 필요 (스크롤이 바닥에 닿았을 경우, 특정 요소가 얼마만큼 보였는지)

  // 비밀번호 일치할 경우 : 비밀번호 확인 완료 message 받음
  const handlePasswordSubmit = async () => {
    if (selectedRoom) {
      try {
        const response = await checkPassword(selectedRoom._id, password);
        if (response.message === '비밀번호 확인 완료') {
          navigate(`/study-room/${selectedRoom._id}`);
        } else {
          alert('비밀번호가 일치하지 않습니다.');
        }
      } catch (error) {
        console.error('비밀번호 확인 중 오류 발생:', error);
        alert('비밀번호 확인 중 오류가 발생했습니다.');
      }
      setShowPasswordModal(false);
    }
  };

  return (
    <S.StudyGridStyle>
      {isLoading ? (
        <div>로딩 중...</div>
      ) : error ? (
        <div>{`방 목록을 불러오는 데 실패했습니다: ${error.message}`}</div>
      ) : (
        rooms.map((room) => (
          <div key={room._id} onClick={() => handleRoomClick(room)}>
            <StudyItem
              key={room._id}
              title={room.title}
              imageUrl={room.imageUrl}
              tagList={room.tagList}
              isPublic={room.isPublic}
              maxNum={room.maxNum}
              currentNum={room.currentNum}
            />
          </div>
        ))
      )}
      {showPasswordModal && selectedRoom && (
        <Modal onClose={() => setShowPasswordModal(false)}>
          <PasswordInput
            onChange={(e) => setPassword(e.target.value)}
            onSubmit={handlePasswordSubmit}
          />
        </Modal>
      )}
    </S.StudyGridStyle>
  );
}

export default StudyGrid;
