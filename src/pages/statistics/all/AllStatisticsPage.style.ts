import styled from 'styled-components';

export const StatContainer = styled.div`
  border: 1px solid gray;
  border-radius: 12px;
  padding: 24px;
  margin: 18px;
`;

export const AvgWrapper = styled.div`
  display: flex;
  gap: 18px;
  justify-content: space-around;
  margin: 24px;
`;

export const Avg = styled.div`
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  gap: 14px;
`;

export const AvgTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const AvgLine = styled.div`
  margin-bottom: 4px;
`;

export const AvgSpan = styled.span`
  font-weight: bold;
  margin-left: 4px;
`;

export const AvgSub = styled.h4`
  font-size: 14px;
`;

export const LegendContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  list-style-type: none;
  padding-top: 12px;
  max-width: 240px;
  margin-right: 0;
`;

export const LegendItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const LegendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
`;

export const Line = styled.span<{ color?: string; dashed?: boolean }>`
  display: inline-block;
  width: 12px;
  height: 2px;
  margin-right: 10px;
  background-color: ${({ color, dashed }) =>
    dashed ? 'transparent' : color || 'black'};
  border-bottom: ${({ dashed, color }) =>
    dashed ? `1px dashed ${color}` : 'none'};
`;
