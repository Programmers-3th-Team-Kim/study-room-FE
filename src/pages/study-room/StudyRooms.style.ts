import styled from 'styled-components';

export const StudyRoomsStyle = styled.div`
  display: flex;
  flex: 1;

  .wrapper {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 100px);
  }

  .header {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin: 50px 0;
  }
`;

export const MainContentArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: calc(100vh - 100px);
  width: 100%;
  overflow: auto;
`;
