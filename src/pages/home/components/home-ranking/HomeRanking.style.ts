import styled, { keyframes } from 'styled-components';

export const HomeRankingStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f9f9f9f9;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  flex-direction: row;
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
