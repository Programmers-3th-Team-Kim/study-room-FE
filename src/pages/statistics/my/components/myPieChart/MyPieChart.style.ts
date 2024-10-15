import styled from 'styled-components';

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin: auto;
`;

export const ValueContainer = styled.div`
  display: flex;
  gap: 18px;
`;

export const ValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 16px;
  min-width: 160px;
`;

export const ValueTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: auto;
`;

export const ValueText = styled.p`
  font-size: 16px;
  margin: auto;
`;