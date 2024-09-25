import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
interface LoginFormInputs {
  userId: string;
  password: string;
}
import * as S from '@/styles/AuthFormStyles';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormInputs> = () => {
    navigate('/');
  };

  return (
    <S.Container>
      <S.Title>로그인</S.Title>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputContainer>
          <Input
            hasError={!!errors.id}
            placeholder="아이디"
            {...register('id', {
              required: '아이디를 입력해주세요.',
            })}
          />
          {errors.id && <S.ErrorMessage>{errors.id.message}</S.ErrorMessage>}
        </S.InputContainer>
        <S.InputContainer>
          <Input
            hasError={!!errors.password}
            placeholder="비밀번호"
            type="password"
            {...register('password', {
              required: '비밀번호를 입력해주세요.',
            })}
          />
          {errors.password && (
            <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
          )}
        </S.InputContainer>
        <Button type="submit" size="large">
          로그인
        </Button>
      </S.Form>
      <S.LinkContainer>
        <S.Span>아직 회원이 아니신가요?</S.Span>
        <S.StyledLink to={'/register'}>회원가입</S.StyledLink>
      </S.LinkContainer>
    </S.Container>
  );
}
