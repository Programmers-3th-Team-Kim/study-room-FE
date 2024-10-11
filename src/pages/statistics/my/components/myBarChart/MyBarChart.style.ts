import styled from 'styled-components';

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const ChartValueContainer = styled.div`
  display: flex;
  gap: 18px;
`;

export const ChartValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 1px solid lightgray;
  border-radius: 12px;
  padding: 16px;
`;

export const ValueTitle = styled.h3`
  font-size: 16px;
`;

export const ValueText = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const BarContainer = styled.div`
  width: 300px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  white-space: nowrap;
`;

export const IconWrapper = styled.span`
  font-size: 20px;
  margin-right: 5px;
  color: ${({ color }) => color || '#FFA500'}; /* 아이콘 색상 */
`;

export const LabelText = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
