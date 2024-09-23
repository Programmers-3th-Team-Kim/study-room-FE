import * as S from './Chatting.style';

interface ChattingProps {
  nickname: string;
  message: string;
  time?: string;
}

export default function Chatting({ chatInfo }: { chatInfo: ChattingProps }) {
  const { nickname, message, time } = chatInfo;

  return (
    <S.ChatWrapper>
      <S.UserInfoArea>
        <S.UserProfile></S.UserProfile>
        <S.Nickname>{nickname}</S.Nickname>
      </S.UserInfoArea>
      <S.ChatInfoArea>
        <S.ChatBox>{message}</S.ChatBox>

        <S.CreatedTime>{time}</S.CreatedTime>
      </S.ChatInfoArea>
    </S.ChatWrapper>
  );
}
