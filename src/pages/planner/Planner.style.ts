import styled from 'styled-components';

const pannelPadding = '50px 30px';

export const PlannerWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  height: 100vh;

  .label {
    color: ${({ theme }) => theme.color.labelGray};
    font-weight: 600;
    font-size: 20px;
  }
`;

export const LeftPannel = styled.div`
  width: 700px;
  height: 100%;
  padding: ${pannelPadding};
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const RightPannel = styled.div`
  width: 500px;
  height: 100%;
  padding: ${pannelPadding};
`;

export const LeftHeader = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;

  .date {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;
    font-weight: 600;
  }

  .addButton {
    margin-left: auto;
    font-size: 44px;
    font-weight: 600;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const LeftContentWrapper = styled.div`
  background-color: yellow;
  height: 100%;
  width: 100%;
  overflow: auto;
`;
