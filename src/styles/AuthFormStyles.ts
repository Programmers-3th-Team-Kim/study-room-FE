import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 480px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 24px;
`;

export const ErrorMessage = styled.span`
  color: #ff7777;
  font-size: 12px;
  margin-top: 10px;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: #434343;
  text-decoration: none;
  margin-top: 20px;
`;

export const StyledLink = styled(Link)`
  color: #599bfc;
  font-weight: 600;
  text-decoration: none;
`;

export const Span = styled.span`
  font-size: 16px;
  color: #666;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #666;
`;
