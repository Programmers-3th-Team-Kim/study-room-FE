import { useNavigate } from 'react-router-dom';
import { logout } from '@/apis/auth.api';
import * as S from './Header.style';
import { useAuthStore } from '@/stores/auth.store';
import { toast } from 'react-toastify';
import { IoPersonCircle } from 'react-icons/io5';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const navigate = useNavigate();
  const { accessToken, user, clearAuthData } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    clearAuthData();
    toast.success('로그아웃 되었습니다.');
    navigate('/');
  };

  const renderProfileImage = () => {
    return user?.imageUrl ? (
      <S.ProfileImg src={user?.imageUrl} alt="Profile" />
    ) : (
      <IoPersonCircle size={32} />
    );
  };
  return (
    <S.HeaderContainer>
      <S.HeaderTitle>{title}</S.HeaderTitle>
      <S.ButtonWrapper>
        {accessToken ? (
          <>
            {renderProfileImage()}
          </>
        ) : (
          <>
            <S.Button onClick={() => navigate('/login')}>로그인</S.Button>
            <S.Button onClick={() => navigate('/signup')}>회원가입</S.Button>
          </>
        )}
      </S.ButtonWrapper>
    </S.HeaderContainer>
  );
}
