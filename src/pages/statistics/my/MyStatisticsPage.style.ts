import styled from 'styled-components';

export const StatContainer = styled.div`
  display: flex;
  margin: 24px;
  gap: 32px;
`;

export const StatWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  right: 0;
`;

export const Button = styled.button`
  background: none;
  border: 1px solid lightgray;
  border-radius: 12px;
  padding: 4px 8px;
  cursor: pointer;
  /* :focus; */
`;

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid lightgray;
  border-radius: 12px;
  padding: 18px;
  min-width: 350px;
`;
