import styled from 'styled-components';

export const StudyItemStyle = styled.div`
  width: 328px;
  height: 340px;
  display: flex;
  flex-direction: column;
`;

export const ItemContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['imageUrl'].includes(prop),
})<{ imageUrl?: string }>`
  position: relative;
  width: 100%;
  height: 207px;
  background: ${(props) =>
    props.imageUrl ? `url(${props.imageUrl})` : '#E5E5E5'};
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
`;

export const ItemContent = styled.div`
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 10px 20px;
`;

export const Title = styled.h3`
  margin: 0;
  padding-top: 70px;
  font-size: 25px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const ParticipantCount = styled.p`
  margin: 10px 0;
  font-size: 25px;
`;

export const Privacy = styled.p`
  margin: 0;
  padding-top: 10px;
  font-size: 25px;
`;

export const ItemFooter = styled.div`
  padding: 5px;
  margin: 20px 0;
`;

export const ItemTitle = styled.h4`
  margin: 0;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    height: 5px; // 가로 스크롤바의 높이
  }

  &::-webkit-scrollbar-thumb {
    background: #d9d9d9; // 스크롤바 색상
    border-radius: 10px; // 스크롤바 모서리 둥글게
  }

  &::-webkit-scrollbar-track {
    background: transparent; // 스크롤바 배경색 제거
  }
`;

export const Hashtags = styled.div`
  margin-top: 5px;
  display: flex;
  flex-wrap: nowrap;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    height: 5px; // 가로 스크롤바의 높이
  }

  &::-webkit-scrollbar-thumb {
    background: #d9d9d9; // 스크롤바 색상
    border-radius: 10px; // 스크롤바 모서리 둥글게
  }

  &::-webkit-scrollbar-track {
    background: transparent; // 스크롤바 배경색 제거
  }
`;

export const Hashtag = styled.span`
  margin-right: 5px;
  font-size: 18px;
  color: ${({ theme }) => theme.color.plannerTimeGray};
  font-style: italic;
  white-space: nowrap;
`;
