import styled from 'styled-components';

export const ChatWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 30px;
  margin-top: auto;
`;

export const UserInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 72px;
  height: 97px;
  flex-shrink: 0;
`;

export const UserProfile = styled.div`
  border-radius: 50%;
  width: 72px;
  height: 72px;
  background-color: gray;
`;

export const Nickname = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

export const ChatInfoArea = styled.div`
  width: 371px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

export const ChatBox = styled.div`
  /* background-color : ${({ theme }) => theme.color.bgGray} */
  /* background-color : ${({ theme }) => theme.color.main} */
  background-color: ${({ theme }) => theme.color.bgGray};
  width: 100%;
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
`;

export const CreatedTime = styled.div`
  margin-top: 10px;
  margin-left: auto;
`;
