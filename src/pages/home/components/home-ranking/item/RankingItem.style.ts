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

export const RankItem = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  //background-color: #ddebfd;
`;

export const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Rank = styled.div<{ isDayList?: boolean }>`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: center;
  font-size: ${({ isDayList }) => (isDayList ? '24px' : '16px')};
  /* border: ${({ isDayList }) => (isDayList ? 'none' : '1px solid #e4e4e4')};
  border-radius: ${({ isDayList }) => (isDayList ? 'none' : '10px')}; */
`;

export const NickName = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

export const TotalTime = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;
