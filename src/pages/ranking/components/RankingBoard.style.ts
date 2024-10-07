import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: flex;
  width: 25vw;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const BoardAndInformWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 3%;
`;

export const InformText = styled.div`
  font-size: max(0.8rem, 1vw);
  color: ${({ theme }) => theme.color.labelGray};
`;

export const BoardWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['bgColor'].includes(prop),
})<{ bgColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  height: 80%;
  border: 1px solid black;
  border-radius: 0.8rem;
  /* background-color: ${(props) => props.bgColor}; */
  /* background-color: ${({ theme }) => theme.color.bgGray}; */
  box-shadow: 2px 2px 4px 1px rgb(0 0 0 / 20%);
`;

export const Title = styled.div`
  font-size: max(1rem, 1.2vw);
  font-weight: 600;
`;

export const ContentWrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  display: grid;
  grid-template-columns: 2fr 4fr 4fr;
  grid-template-rows: 1fr repeat(10, 1fr) 1fr;

  /* align-items: center; */
  width: 90%;
  height: 90%;
  background-color: white;
  border-radius: 0.8rem;
  border: 2px dotted ${({ theme }) => theme.color.bgGray};

  .header {
    /* font-size : 1rem; */
    font-weight: 600;
  }

  .myRank {
    grid-column: 1/2;
    grid-row: 12/13;
  }

  .myNickname {
    grid-column: 2/3;
    grid-row: 12/13;
  }

  .myStudyTime {
    grid-column: 3/4;
    grid-row: 12/13;
  }
`;

export const GridItem = styled.div`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: max(0.5rem, 1vw);

  &:nth-child(3n + 2):nth-child(n + 4) {
    border-left: 1px solid ${({ theme }) => theme.color.bgGray};
    border-right: 1px solid ${({ theme }) => theme.color.bgGray};
  }

  &:nth-last-child(1),
  &:nth-last-child(2),
  &:nth-last-child(3) {
    border-top: 1px solid black;
  }
`;
