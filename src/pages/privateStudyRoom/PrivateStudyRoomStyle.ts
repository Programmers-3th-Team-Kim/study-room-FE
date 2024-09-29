import styled from 'styled-components';

export const PrivateStudyRoomStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const MainContentArea = styled.div`
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
`;

export const StudyRoomHeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100vh;
`;

export const StudyRoomWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  margin: 60px 0;
`;

export const InstructionText = styled.div`
  text-align: center;
  margin: 20px 0;
  font-size: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 433px;
`;
