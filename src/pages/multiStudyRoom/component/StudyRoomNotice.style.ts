import styled from 'styled-components';

export const StudyRoomNoticeStyle = styled.div`
  display: flex;
  width: 100%;
  background-color: #ffdada;
  padding: 24px;
  box-sizing: border-box;
`;

export const NoticeDivOpen = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 10px;
`;

export const NoticeDivClosed = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 10px;
`;

export const OpenText = styled.div`
  width: 100%;
  height: auto;
  white-space: normal;
  font-size: 1.2rem;
`;

export const CloseText = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.2rem;
`;
