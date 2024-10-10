import styled, { keyframes } from 'styled-components';

export const HomeStudyRoomsStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.div`
  display: flex;
  font-size: 1.25rem;
  font-weight: 600;
  padding-bottom: 20px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 20px;
`;

export const StudyRoomWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  height: 100%;
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 20px;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  .spinner {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #599bfc;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s linear infinite;
  }
`;

export const Text = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.plannerGray};
  font-size: 1.7rem;
  font-weight: 600;
`;
