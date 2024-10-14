import styled from 'styled-components';

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin: 18px;
`;

export const DateCellWrapper = styled.div`
  padding: 0;
  margin: 0;
`;

export const DateHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CalendarWrapper = styled.div`
  .rbc-date-cell {
    padding-right: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rbc-month-row {
    text-align: center;
  }
`;
export const DateHeaderButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['backgroundColor'].includes(prop),
})<{ backgroundColor: string }>`
  all: unset;
  border-radius: 50%;
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.backgroundColor};

  cursor: pointer;
`;

export const Year = styled.span`
  font-weight: 500;
  font-size: 14px;
`;

export const MonthWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
`;

export const Month = styled.span`
  font-weight: 500;
  font-size: 22px;
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const Header = styled.div`
  height: 36px;
  align-content: center;
  font-weight: bold;
  text-align: center;
`;

export const Legend = styled.div`
  display: flex;
  gap: 4px;
  font-size: 12px;
  margin-top: 12px;
  justify-content: center;
`;

export const LegendItem = styled.span<{ $bgcolor: string }>`
  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: ${(props) => props.$bgcolor};
    margin-right: 4px;
    vertical-align: middle;
  }
`;
