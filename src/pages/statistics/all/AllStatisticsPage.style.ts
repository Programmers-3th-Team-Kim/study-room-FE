import styled from 'styled-components';

export const StatContainer = styled.div`
  border: 1px solid gray;
  border-radius: 12px;
  padding: 24px;
  margin: 20px;
  height: 100%;
  width: 900px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const AvgWrapper = styled.div`
  display: flex;
  gap: 18px;
  justify-content: space-around;
`;

export const Avg = styled.div`
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 20px 34px;
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
  display: flex;
  margin-left: auto;
  gap: 8px;
`;

export const LegendItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 12px;
  gap: 6px;
`;

export const Line = styled.span<{ color?: string; dashed?: boolean }>`
  display: inline-block;
  width: 12px;
  height: 2px;
  background-color: ${({ color, dashed }) =>
    dashed ? 'transparent' : color || 'black'};
  border-bottom: ${({ dashed, color }) =>
    dashed ? `1px dashed ${color}` : 'none'};
`;

export const ArrowGraphContainer = styled.div`
  display: flex;
  align-items: end;
  width: 100%;
`;
