import styled from 'styled-components';

export const RankingItemStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f9f9f9f9;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  flex-direction: row;
  gap: 40px;
`;

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 20px;
`;

export const Ttile = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const DayList = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  padding: 10px 0;
  background-color: white;
`;

export const MyList = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  padding: 10px 0;
  background-color: white;
`;

export const RankItem = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isCurrentUser'].includes(prop),
})<{ isCurrentUser?: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${({ isCurrentUser }) =>
    isCurrentUser ? '#ddebfd' : 'transparent'};
`;

export const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Rank = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isDayList'].includes(prop),
})<{ isDayList?: boolean }>`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: center;
  font-size: ${({ isDayList }) => (isDayList ? '1.5rem' : '1rem')};

  img {
    width: 2.5rem;
    height: 2.5rem;
    justify-content: center;
    align-items: center;
  }
`;

export const NickName = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

export const TotalTime = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;
