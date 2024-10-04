import { useInfiniteQuery } from '@tanstack/react-query';
import StudyItem from './StudyItem';
import * as S from './StudyGrid.style';
import axios from 'axios';
import { FetchRoomsParams, Room } from '@/types/studyRoom';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import Modal from '@/components/modal/Modal';
import PasswordInput from '../form/PasswordInput';
import axiosInstance from '@/apis/axiosInstance.api';

// API 요청 함수
const fetchRooms = async ({
  queryKey,
}: {
  queryKey: [string, FetchRoomsParams];
}): Promise<Room[]> => {
  const [, params] = queryKey;
  const query = new URLSearchParams({
    search: params.search || '',
    isPublic: params.isPublic !== undefined ? String(params.isPublic) : '',
    isPossible:
      params.isPossible !== undefined ? String(params.isPossible) : '',
    limit: String(params.limit),
    offset: String(params.limit),
  }).toString();

  const url = `${import.meta.env.VITE_REACT_APP_API_URL}/rooms?${query}`;
  const res = await axios.get(url);

  console.log('Fetching URL:', url);

  return res.data;
};

const checkPassword = async (roomId: string, password: string) => {
  const response = await axiosInstance.post(
    `${import.meta.env.VITE_REACT_APP_API_URL}/rooms/checkPassword/${roomId}`,
    { password }
  );
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

  const initialLimit = 4;
  const [limit, setLimit] = useState(initialLimit);
  const containerRef = useRef<HTMLDivElement | null>(null);

  //console.log('previousScrollHeight: ', previousScrollHeight);

  const params: FetchRoomsParams = {
    search: filter.search || '',
    isPublic: filter.isPublic,
    isPossible: filter.isPossible,
    limit,
  };

  const {
    data: roomsData,
    fetchNextPage,
    hasNextPage,
    isLoading,
    error,
  } = useInfiniteQuery<Room[], Error>({
    queryKey: ['rooms', params],
    queryFn: fetchRooms,
    getNextPageParam: (lastPage, pages) =>
      lastPage.length === limit ? pages.length * limit : undefined,
    staleTime: 1000 * 60 * 1, // 1분 동안 신선한 데이터
    cashTime: 1000 * 60 * 2, // 2분 동안 캐시 유지
  });

  const handleRoomClick = (room: Room) => {
    if (room.isPublic) {
      navigate(`/study-room/${room._id}`);
    } else {
      setSelectedRoom(room);
      setShowPasswordModal(true);
    }
  };

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
        alert('비밀번호 확인 중 오류가 발생했습니다.');
      } finally {
        setShowPasswordModal(false);
      }
    }
  };

  /*
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;
    const bottom = scrollHeight - scrollTop <= clientHeight + 50;

    // 스크롤 위치 저장
    previousScrollHeight.current = scrollHeight;

    console.log('previousScrollHeightCurrent', previousScrollHeight.current);

    if (bottom && hasNextPage) {
      console.log('bottom && hasNextPage');
      const currentScrollTop = scrollTop;
      // console.log(currentScrollTop);
      setLimit((prevLimit) => prevLimit + initialLimit);
      fetchNextPage().then(() => {
        const newScrollHeight = containerRef.current?.scrollHeight || 0;
        const scrollOffset = newScrollHeight - previousScrollHeight.current;

        containerRef.current?.scrollTo({
          top: currentScrollTop + scrollOffset,
          behavior: 'smooth',
        });

        console.log(
          'previousScrollHeight.current',
          previousScrollHeight.current
        );
        console.log('containerRef.current', containerRef.current);
        console.log('newScrollHeight', newScrollHeight);
        console.log('currentScrollTop', currentScrollTop);
        console.log('scrollOffset', scrollOffset);
        console.log('스크롤 위치', currentScrollTop + scrollOffset);
        console.log(
          'previousScrollHeight.current',
          previousScrollHeight.current
        );
      });
    }
  };
  */

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;
    const bottom = scrollHeight - scrollTop <= clientHeight;

    // 스크롤 위치 저장
    const prevScrollTop = scrollTop;

    console.log(
      'scrollHeight, scrollTop, clientHeight',
      scrollHeight,
      scrollTop,
      clientHeight
    );

    console.log('prevScrollTop', prevScrollTop);

    if (bottom && hasNextPage) {
      console.log('bottom && hasNextPage');

      const currentScrollTop = scrollTop;

      console.log('prevScrollTop, scrollTop', prevScrollTop, scrollTop);
      console.log('setLimit 전');
      setLimit((prevLimit) => prevLimit + initialLimit);
      console.log('setLimit 후');
      console.log('prevScrollTop, scrollTop', prevScrollTop, scrollTop);
      console.log('currentScrollTop', currentScrollTop);
      fetchNextPage()
        .then(() => {
          console.log('fetchNextPage 성공');
          //const newScrollTop = prevScrollTop;
          //console.log('newScrollTop 1', newScrollTop);

          containerRef.current?.scrollTo({
            top: currentScrollTop,
            behavior: 'smooth',
          });

          //const newScrollTop = prevScrollTop;
          console.log('fetchNextPage 안 prevScrollTop', prevScrollTop);
          //console.log('newScrollTop 2', newScrollTop);
          console.log('currentScrollTop', currentScrollTop);
        })
        .catch((error) => {
          console.error('fetchNextPage 실패', error);
        });
      console.log('fetchNextPage 밖 : prevScrollTop', prevScrollTop);
    }
  };

  const rooms = roomsData?.pages.flat() || [];

  return (
    <S.StudyGridStyle ref={containerRef} onScroll={handleScroll}>
      {isLoading ? (
        <div>로딩 중...</div>
      ) : error ? (
        <div>{`방 목록을 불러오는 데 실패했습니다: ${error.message}`}</div>
      ) : (
        rooms.map((room) => (
          <div key={room._id} onClick={() => handleRoomClick(room)}>
            <StudyItem
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
