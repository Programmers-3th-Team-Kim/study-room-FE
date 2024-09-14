import styled from 'styled-components';

export const StyledInput = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== 'hasError',
})<{ hasError?: boolean }>`
  width: 100%;
  height: 60px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ hasError }) => (hasError ? '#ff7777' : '#ddd')};
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ hasError }) => (hasError ? '#ff7777' : '#599bfc')};
  }
`;
